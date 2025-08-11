import { Button } from "@cap/ui-solid";
import { cx } from "cva";
import {
  ComponentProps,
  createEffect,
  createSignal,
  Show,
} from "solid-js";
import { reconcile } from "solid-js/store";

import Mode from "~/components/Mode";
import Tooltip from "~/components/Tooltip";
import {
  RecordingOptionsProvider,
  useRecordingOptions,
} from "./OptionsContext";
import {
  ScreenCaptureTarget,
} from "~/utils/types";
import { addRecording } from "~/utils/db";
import { generateZoomSegments } from "~/utils/zoom";

export default function () {
  return (
    <RecordingOptionsProvider>
      <Page />
    </RecordingOptionsProvider>
  );
}

function Page() {
  const { rawOptions, setOptions } = useRecordingOptions();
  const [mediaRecorder, setMediaRecorder] = createSignal<MediaRecorder | null>(null);
  const [clicks, setClicks] = createSignal<any[]>([]);
  const isRecording = () => !!mediaRecorder();

  const startRecording = async () => {
    const videoStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });

    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    const combinedStream = new MediaStream([
      ...videoStream.getVideoTracks(),
      ...audioStream.getAudioTracks(),
    ]);

    const recorder = new MediaRecorder(combinedStream, {
      mimeType: "video/webm; codecs=vp9,opus",
    });
    setMediaRecorder(recorder);

    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    recorder.onstop = async () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      await addRecording({
        projectId: 1, // TODO: Get the project ID from the UI
        video: blob,
        audio: new Blob(), // TODO: Get the audio blob
        thumbnail: new Blob(), // TODO: Get the thumbnail blob
        metadata: {},
        zoomSegments: [],
        prettyName: `Recording ${new Date().toLocaleString()}`,
        meta: { type: "studio" },
      });
      setMediaRecorder(null);
    };

    const clickListener = (e: MouseEvent) => {
      setClicks((clicks) => [
        ...clicks,
        { x: e.clientX, y: e.clientY, timestamp: Date.now() },
      ]);
    };
    window.addEventListener("click", clickListener);

    recorder.onstop = async () => {
      window.removeEventListener("click", clickListener);
      const blob = new Blob(chunks, { type: "video/webm" });
      const videoDuration = await new Promise<number>((resolve) => {
        const video = document.createElement("video");
        video.onloadedmetadata = () => {
          resolve(video.duration);
        };
        video.src = URL.createObjectURL(blob);
      });

      const zoomSegments = generateZoomSegments(clicks(), videoDuration);

      await addRecording({
        projectId: 1, // TODO: Get the project ID from the UI
        video: blob,
        audio: new Blob(), // TODO: Get the audio blob
        thumbnail: new Blob(), // TODO: Get the thumbnail blob
        metadata: {},
        zoomSegments,
        prettyName: `Recording ${new Date().toLocaleString()}`,
        meta: { type: "studio" },
        clicks: clicks(),
      });
      setMediaRecorder(null);
      setClicks([]);
    };

    recorder.start();
  };

  const stopRecording = () => {
    mediaRecorder()?.stop();
  };

  const screens: any[] = [];
  const windows: any[] = [];
  const cameras: any[] = [];
  const mics: any[] = [];

  const _screens = () => screens;
  const _windows = () => windows;
  const _mics = () => mics;

  const options = {
    screen: () => {
      let screen;

      if (rawOptions.captureTarget.variant === "screen") {
        const screenId = rawOptions.captureTarget.id;
        screen = _screens()?.find((s: any) => s.id === screenId) ?? _screens()?.[0];
      } else if (rawOptions.captureTarget.variant === "area") {
        const screenId = rawOptions.captureTarget.screen;
        screen = _screens()?.find((s: any) => s.id === screenId) ?? _screens()?.[0];
      }

      return screen;
    },
    window: () => {
      let win;

      if (rawOptions.captureTarget.variant === "window") {
        const windowId = rawOptions.captureTarget.id;
        win = _windows()?.find((s: any) => s.id === windowId) ?? _windows()?.[0];
      }

      return win;
    },
    cameraID: () =>
      cameras.find((c: any) => {
        const { cameraID } = rawOptions;
        if (!cameraID) return;
        if ("ModelID" in cameraID && c.model_id === cameraID.ModelID) return c;
        if ("DeviceID" in cameraID && c.device_id == cameraID.DeviceID)
          return c;
      }),
    micName: () => mics.find((name) => name === rawOptions.micName),
    target: (): ScreenCaptureTarget => {
      switch (rawOptions.captureTarget.variant) {
        case "screen":
          return { variant: "screen", id: options.screen()?.id ?? -1 };
        case "window":
          return { variant: "window", id: options.window()?.id ?? -1 };
        case "area":
          return {
            variant: "area",
            bounds: rawOptions.captureTarget.bounds,
            screen: options.screen()?.id ?? -1,
          };
      }
    },
  };

  createEffect(() => {
    if (options.target().variant === "window" && _windows()?.length === 0) {
      setOptions(
        "captureTarget",
        reconcile({
          variant: "screen",
          id: options.screen()?.id ?? -1,
        })
      );
    }
  });

  return (
    <div class="flex justify-center flex-col p-[1rem] gap-[0.75rem] text-[0.875rem] font-[400] h-full text-[--text-primary]">
      <div class="flex items-center justify-between pb-[0.25rem]">
        <div class="flex items-center space-x-1">
          <a
            class="*:w-[92px] *:h-auto text-[--text-primary]"
            target="_blank"
            href={"/"}
          >
            <IconCapLogoFullDark class="hidden dark:block" />
            <IconCapLogoFull class="block dark:hidden" />
          </a>
        </div>
        <Mode />
      </div>
      <div>
        <AreaSelectButton
          screen={options.screen()}
          targetVariant={
            rawOptions.captureTarget.variant === "window"
              ? "other"
              : rawOptions.captureTarget.variant
          }
          onChange={(area) => {
            if (!area)
              setOptions(
                "captureTarget",
                reconcile({
                  variant: "screen",
                  id: options.screen()?.id ?? -1,
                })
              );
          }}
        />
        <div
          class={cx(
            "flex flex-row items-center rounded-[0.5rem] relative border h-8 transition-all duration-500",
            (rawOptions.captureTarget.variant === "screen" ||
              rawOptions.captureTarget.variant === "area") &&
              "ml-[2.4rem]"
          )}
          style={{
            "transition-timing-function":
              "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
          }}
        >
          <div
            class="w-1/2 absolute flex p-px inset-0 transition-transform peer-focus-visible:outline outline-2 outline-blue-300 outline-offset-2 rounded-[0.6rem] overflow-hidden"
            style={{
              transform:
                rawOptions.captureTarget.variant === "window"
                  ? "translateX(100%)"
                  : undefined,
            }}
          >
            <div class="flex-1 bg-gray-2" />
          </div>
          <TargetSelect
            options={_screens() ?? []}
            onChange={(value) => {
              if (!value) return;
              setOptions(
                "captureTarget",
                reconcile({ variant: "screen", id: value.id })
              );
            }}
            value={options.screen() ?? null}
            placeholder="Screen"
            optionsEmptyText="No screens found"
            selected={
              rawOptions.captureTarget.variant === "screen" ||
              rawOptions.captureTarget.variant === "area"
            }
          />
          <TargetSelect
            options={_windows() ?? []}
            onChange={(value) => {
              if (!value) return;
              setOptions(
                "captureTarget",
                reconcile({ variant: "window", id: value.id })
              );
            }}
            value={options.window() ?? null}
            placeholder="Window"
            optionsEmptyText="No windows found"
            selected={rawOptions.captureTarget.variant === "window"}
            getName={(value) => value.name }
            disabled={_windows()?.length === 0}
          />
        </div>
      </div>
      <CameraSelect
        options={cameras}
        value={options.cameraID() ?? null}
        onChange={(v) => {
        }}
      />
      <MicrophoneSelect
        disabled={mics.length === 0}
        options={_mics() ?? []}
        value={options.micName() ?? null}
        onChange={(v) => {}}
      />
      <SystemAudio />
      <div class="flex items-center space-x-1 w-full">
          <Button
            variant="blue"
            size="md"
            onClick={() => {
              if (isRecording()) {
                stopRecording();
              } else {
                startRecording();
              }
            }}
            class="flex flex-grow justify-center items-center"
          >
            {isRecording() ? (
              "Stop Recording"
            ) : (
              <>
                Start Recording
              </>
            )}
          </Button>
      </div>
    </div>
  );
}

function AreaSelectButton(props: {
  targetVariant: "screen" | "area" | "other";
  screen: any | undefined;
  onChange(area?: number): void;
}) {
  return (
    <Tooltip
      openDelay={500}
      content={
        props.targetVariant === "area"
          ? "Remove selection"
          : "Select area"
      }
      childClass="flex fixed flex-row items-center w-8 h-8"
    >
        <Show when={props.targetVariant !== "other"}>
          {(targetScreenOrArea) => (
            <button
              type="button"
              disabled={!targetScreenOrArea}
              class={cx(
                "flex items-center justify-center flex-shrink-0 w-full h-full rounded-[0.5rem] transition-all duration-200",
                "hover:bg-gray-3 disabled:bg-gray-2 disabled:text-gray-11",
                "focus-visible:outline font-[200] text-[0.875rem]",
                props.targetVariant === "area"
                  ? "bg-gray-2 text-blue-9 border border-blue-200"
                  : "bg-gray-2 text-gray-11"
              )}
            >
              <IconCapCrop
                class={cx(
                  "w-[1rem] h-[1rem]"
                )}
              />
            </button>
          )}
        </Show>
    </Tooltip>
  );
}

const NO_CAMERA = "No Camera";

function CameraSelect(props: {
  disabled?: boolean;
  options: any[];
  value: any | null;
  onChange: (cameraInfo: any | null) => void;
}) {
  const permissionGranted = () => true;

  return (
    <div class="flex flex-col gap-[0.25rem] items-stretch text-[--text-primary]">
      <button
        disabled={props.disabled}
        class="flex flex-row items-center h-[2rem] px-[0.375rem] gap-[0.375rem] border rounded-lg border-gray-3 w-full disabled:text-gray-11 transition-colors KSelect"
        onClick={() => {}}
      >
        <IconCapCamera class="text-gray-11 size-[1.25rem]" />
        <span class="flex-1 text-left truncate">
          {props.value?.display_name ?? NO_CAMERA}
        </span>
        <TargetSelectInfoPill
          value={props.value}
          permissionGranted={permissionGranted()}
          requestPermission={() => {}}
          onClick={(e) => {
            if (!props.options) return;
            if (props.value !== null) {
              e.stopPropagation();
              props.onChange(null);
            }
          }}
        />
      </button>
    </div>
  );
}

const NO_MICROPHONE = "No Microphone";

function MicrophoneSelect(props: {
  disabled?: boolean;
  options: string[];
  value: string | null;
  onChange: (micName: string | null) => void;
}) {
  const permissionGranted = () => true;

  return (
    <div class="flex flex-col gap-[0.25rem] items-stretch text-[--text-primary]">
      <button
        disabled={props.disabled}
        class="relative flex flex-row items-center h-[2rem] px-[0.375rem] gap-[0.375rem] border rounded-lg border-gray-3 w-full disabled:text-gray-11 transition-colors KSelect overflow-hidden z-10"
        onClick={() => {}}
      >
        <IconCapMicrophone class="text-gray-11 size-[1.25rem]" />
        <span class="flex-1 text-left truncate">
          {props.value ?? NO_MICROPHONE}
        </span>
        <TargetSelectInfoPill
          value={props.value}
          permissionGranted={permissionGranted()}
          requestPermission={() => {}}
          onClick={(e) => {
            if (props.value !== null) {
              e.stopPropagation();
              props.onChange(null);
            }
          }}
        />
      </button>
    </div>
  );
}

function SystemAudio() {
  const { rawOptions, setOptions } = useRecordingOptions();

  return (
    <button
      onClick={() => {
        if (!rawOptions) return;
        setOptions({ captureSystemAudio: !rawOptions.captureSystemAudio });
      }}
      class="relative flex flex-row items-center h-[2rem] px-[0.375rem] gap-[0.375rem] border rounded-lg border-gray-3 w-full disabled:text-gray-11 transition-colors KSelect overflow-hidden z-10"
    >
      <div class="size-[1.25rem] flex items-center justify-center">
        <IconPhMonitorBold class="text-gray-11 stroke-2 size-[1.2rem]" />
      </div>
      <span class="flex-1 text-left truncate">
        {rawOptions.captureSystemAudio
          ? "Record System Audio"
          : "No System Audio"}
      </span>
      <InfoPill variant={rawOptions.captureSystemAudio ? "blue" : "red"}>
        {rawOptions.captureSystemAudio ? "On" : "Off"}
      </InfoPill>
    </button>
  );
}

function TargetSelect<T extends { id: number; name: string }>(props: {
  options: Array<T>;
  onChange: (value: T) => void;
  value: T | null;
  selected: boolean;
  optionsEmptyText: string;
  placeholder: string;
  getName?: (value: T) => string;
  disabled?: boolean;
}) {
  const value = () => {
    const v = props.value;
    if (!v) return null;

    const o = props.options.find((o) => o.id === v.id);
    if (o) return props.value;

    props.onChange(props.options[0]);
    return props.options[0];
  };

  const getName = (value?: T) =>
    value ? props.getName?.(value) ?? value.name : props.placeholder;

  return (
    <button
      class="group flex-1 text-gray-11 py-1 z-10 data-[selected='true']:text-gray-12 disabled:text-gray-10 peer focus:outline-none transition-colors duration-100 w-full text-nowrap overflow-hidden px-2 flex gap-2 items-center justify-center"
      data-selected={props.selected}
      disabled={props.disabled}
      onClick={() => {}}
    >
      {props.options.length <= 1 ? (
        <span class="truncate">{value()?.name ?? props.placeholder}</span>
      ) : (
        <>
          <span class="truncate">{value()?.name ?? props.placeholder}</span>
          <IconCapChevronDown class="shrink-0 size-4" />
        </>
      )}
    </button>
  );
}

function TargetSelectInfoPill<T>(props: {
  value: T | null;
  permissionGranted: boolean;
  requestPermission: () => void;
  onClick: (e: MouseEvent) => void;
}) {
  return (
    <InfoPill
      variant={props.value !== null && props.permissionGranted ? "blue" : "red"}
      onPointerDown={(e) => {
        if (!props.permissionGranted || props.value === null) return;

        e.stopPropagation();
      }}
      onClick={(e) => {
        if (!props.permissionGranted) {
          props.requestPermission();
          e.stopPropagation();
          return;
        }

        props.onClick(e);
      }}
    >
      {!props.permissionGranted
        ? "Request Permission"
        : props.value !== null
        ? "On"
        : "Off"}
    </InfoPill>
  );
}

function InfoPill(
  props: ComponentProps<"button"> & { variant: "blue" | "red" }
) {
  return (
    <button
      {...props}
      type="button"
      class={cx(
        "px-[0.375rem] rounded-full text-[0.75rem]",
        props.variant === "blue"
          ? "bg-blue-3 text-blue-9"
          : "bg-red-3 text-red-9"
      )}
    />
  );
}
