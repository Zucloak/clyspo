import { Button } from "@cap/ui-solid";
import { Select as KSelect } from "@kobalte/core/select";
import { makePersisted } from "@solid-primitives/storage";
import { createMutation } from "@tanstack/solid-query";
import { cx } from "cva";
import {
  createEffect,
  createSignal,
  For,
  Match,
  Show,
  Switch,
  ValidComponent,
} from "solid-js";
import { createStore, produce, reconcile } from "solid-js/store";
import toast from "solid-toast";

import { addRecording, getAllProjects } from "~/utils/db";
import { saveVideoToFile } from "~/utils/export";
import {
  ExportCompression,
  ExportSettings,
} from "~/utils/types";
import { RenderState, useEditorContext } from "./context";
import { RESOLUTION_OPTIONS } from "./Header";
import {
  Dialog,
  DialogContent,
  MenuItem,
  MenuItemList,
  PopperContent,
  topSlideAnimateClasses,
} from "./ui";
import {
  IconCapFile,
  IconCapChevronDown,
  IconCapCircleX,
  IconCapCheck,
} from "~/components/icons";

export const COMPRESSION_OPTIONS: Array<{
  label: string;
  value: ExportCompression;
}> = [
    { label: "Minimal", value: "Minimal" },
    { label: "Social Media", value: "Social" },
    { label: "Web", value: "Web" },
    { label: "Potato", value: "Potato" },
  ];

export const FPS_OPTIONS = [
  { label: "15 FPS", value: 15 },
  { label: "30 FPS", value: 30 },
  { label: "60 FPS", value: 60 },
] satisfies Array<{ label: string; value: number }>;

export const GIF_FPS_OPTIONS = [
  { label: "10 FPS", value: 10 },
  { label: "15 FPS", value: 15 },
  { label: "20 FPS", value: 20 },
  { label: "25 FPS", value: 25 },
  { label: "30 FPS", value: 30 },
] satisfies Array<{ label: string; value: number }>;

type ExportFormat = ExportSettings["format"];

export const FORMAT_OPTIONS = [
  { label: "MP4", value: "Mp4" },
  { label: "GIF", value: "Gif" },
] as { label: string; value: ExportFormat; disabled?: boolean }[];

interface Settings {
  format: ExportFormat;
  fps: number;
  resolution: { label: string; value: string; width: number; height: number };
  compression: ExportCompression;
}
export function ExportDialog() {
  const {
    setDialog,
    setExportState,
    exportState,
    recording,
    project,
  } = useEditorContext();

  const [settings, setSettings] = makePersisted(
    createStore<Settings>({
      format: "Mp4",
      fps: 30,
      resolution: { label: "720p", value: "720p", width: 1280, height: 720 },
      compression: "Minimal",
    }),
    { name: "export_settings" }
  );

  if (!["Mp4", "Gif"].includes(settings.format)) setSettings("format", "Mp4");

  const selectedStyle =
    "ring-1 ring-offset-2 ring-offset-gray-200 bg-gray-5 ring-gray-500";

  // eslint-disable-next-line solid/reactivity
  const save = createMutation(() => ({
    mutationFn: async () => {
      if (exportState.type !== "idle") return;

      setExportState(reconcile({ action: "save", type: "starting" }));

      const projects = await getAllProjects();
      const defaultProject = projects[0];

      if (!defaultProject) {
        toast.error("No project found to save the recording to.");
        setExportState(reconcile({ type: "idle" }));
        return;
      }

      const newRecording = {
        projectId: defaultProject.id,
        video: recording.video,
        audio: recording.audio,
        thumbnail: new Blob(), // TODO: Generate thumbnail
        metadata: project,
        zoomSegments: project.timeline?.zoomSegments || [],
        clicks: [], // TODO: Get clicks
      };

      const recordingId = await addRecording(newRecording);

      toast.success("Recording saved locally!");

      const handle = await saveVideoToFile(
        recording.video,
        `${defaultProject.name}-${recordingId}.mp4`
      );

      if (handle) {
        toast.success("Recording exported to file!");
      }

      setExportState({ type: "done" });
    },
    onError: () => {
      setExportState({ type: "idle" });
    },
    onSuccess() {
      //
    },
  }));

  return (
    <>
      <Show when={exportState.type === "idle"}>
        <DialogContent
          title="Export"
          confirm={
            <>
              <Button
                class="flex gap-1.5 items-center"
                variant="primary"
                onClick={() => save.mutate()}
              >
                Export to
                <IconCapFile class="text-gray-1 size-4" />
              </Button>
            </>
          }
          leftFooterContent={<div />}
        >
          <div class="flex flex-wrap gap-3">
            {/* Format */}
            <div class="p-4 rounded-xl bg-gray-2">
              <div class="flex flex-col gap-3">
                <h3 class="text-gray-12">Format</h3>
                <div class="flex flex-row gap-2">
                  <For each={FORMAT_OPTIONS}>
                    {(option) => (
                      <Button
                        variant="secondary"
                        onClick={() => {
                          setSettings(
                            produce((newSettings) => {
                              newSettings.format = option.value as ExportFormat;

                              if (
                                option.value === "Gif" &&
                                settings.resolution.value !== "720p"
                              )
                                newSettings.resolution =
                                  RESOLUTION_OPTIONS._720p;

                              if (
                                option.value === "Gif" &&
                                GIF_FPS_OPTIONS.every(
                                  (v) => v.value === settings.fps
                                )
                              )
                                newSettings.fps = 15;

                              if (
                                option.value === "Mp4" &&
                                FPS_OPTIONS.every(
                                  (v) => v.value !== settings.fps
                                )
                              )
                                newSettings.fps = 30;
                            })
                          );
                        }}
                        autofocus={false}
                        class={cx(
                          settings.format === option.value && selectedStyle
                        )}
                      >
                        {option.label}
                      </Button>
                    )}
                  </For>
                </div>
              </div>
            </div>
            {/* Frame rate */}
            <div class="overflow-hidden relative p-4 rounded-xl bg-gray-2">
              <div class="flex flex-col gap-3">
                <h3 class="text-gray-12">Frame rate</h3>
                <KSelect<{ label: string; value: number }>
                  options={
                    settings.format === "Gif" ? GIF_FPS_OPTIONS : FPS_OPTIONS
                  }
                  optionValue="value"
                  optionTextValue="label"
                  placeholder="Select FPS"
                  value={(settings.format === "Gif"
                    ? GIF_FPS_OPTIONS
                    : FPS_OPTIONS
                  ).find((opt) => opt.value === settings.fps)}
                  onChange={(option) => {
                    const value =
                      option?.value ?? (settings.format === "Gif" ? 10 : 30);
                    setSettings("fps", value);
                  }}
                  itemComponent={(props) => (
                    <MenuItem<typeof KSelect.Item>
                      as={KSelect.Item}
                      item={props.item}
                    >
                      <KSelect.ItemLabel class="flex-1">
                        {props.item.rawValue.label}
                      </KSelect.ItemLabel>
                    </MenuItem>
                  )}
                >
                  <KSelect.Trigger class="flex flex-row gap-2 items-center px-3 w-full h-10 rounded-xl transition-colors bg-gray-3 disabled:text-gray-11">
                    <KSelect.Value<
                      (typeof FPS_OPTIONS)[number]
                    > class="flex-1 text-sm text-left truncate tabular-nums text-[--gray-500]">
                      {(state) => <span>{state.selectedOption()?.label}</span>}
                    </KSelect.Value>
                    <KSelect.Icon<ValidComponent>
                      as={(props) => (
                        <IconCapChevronDown
                          {...props}
                          class="size-4 shrink-0 transform transition-transform ui-expanded:rotate-180 text-[--gray-500]"
                        />
                      )}
                    />
                  </KSelect.Trigger>
                  <KSelect.Portal>
                    <PopperContent<typeof KSelect.Content>
                      as={KSelect.Content}
                      class={cx(topSlideAnimateClasses, "z-50")}
                    >
                      <MenuItemList<typeof KSelect.Listbox>
                        class="overflow-y-auto max-h-32"
                        as={KSelect.Listbox}
                      />
                    </PopperContent>
                  </KSelect.Portal>
                </KSelect>
              </div>
            </div>
            {/* Compression */}
            <div class="p-4 rounded-xl bg-gray-2">
              <div class="flex flex-col gap-3">
                <h3 class="text-gray-12">Compression</h3>
                <div class="flex gap-2">
                  <For each={COMPRESSION_OPTIONS}>
                    {(option) => (
                      <Button
                        onClick={() => {
                          setSettings(
                            "compression",
                            option.value as ExportCompression
                          );
                        }}
                        variant="secondary"
                        class={cx(
                          settings.compression === option.value && selectedStyle
                        )}
                      >
                        {option.label}
                      </Button>
                    )}
                  </For>
                </div>
              </div>
            </div>
            {/* Resolution */}
            <div class="flex-1 p-4 rounded-xl bg-gray-2">
              <div class="flex flex-col gap-3">
                <h3 class="text-gray-12">Resolution</h3>
                <div class="flex gap-2">
                  <For
                    each={
                      settings.format === "Gif"
                        ? [RESOLUTION_OPTIONS._720p]
                        : [
                          RESOLUTION_OPTIONS._720p,
                          RESOLUTION_OPTIONS._1080p,
                          RESOLUTION_OPTIONS._4k,
                        ]
                    }
                  >
                    {(option) => (
                      <Button
                        class={cx(
                          "flex-1",
                          settings.resolution.value === option.value
                            ? selectedStyle
                            : ""
                        )}
                        variant="secondary"
                        onClick={() => setSettings("resolution", option)}
                      >
                        {option.label}
                      </Button>
                    )}
                  </For>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Show>
      <Show when={exportState.type !== "idle" && exportState} keyed>
        {(exportState) => {
          const [showCompletionScreen, setShowCompletionScreen] = createSignal(
            exportState.type === "done" && exportState.action === "save"
          );

          createEffect(() => {
            if (exportState.type === "done" && exportState.action === "save") {
              setShowCompletionScreen(true);
            }
          });

          return (
            <>
              <Dialog.Header>
                <div class="flex justify-between items-center w-full">
                  <span class="text-gray-12">Export</span>
                  <div
                    onClick={() => setDialog((d) => ({ ...d, open: false }))}
                    class="flex justify-center items-center p-1 rounded-full transition-colors cursor-pointer hover:bg-gray-3"
                  >
                    <IconCapCircleX class="text-gray-12 size-4" />
                  </div>
                </div>
              </Dialog.Header>
              <Dialog.Content class="text-gray-12">
                <div class="relative z-10 px-5 py-4 mx-auto space-y-6 w-full text-center">
                  <Switch>
                    <Match
                      when={exportState.action === "save" && exportState}
                      keyed
                    >
                      {(saveState) => (
                        <div class="flex flex-col gap-4 justify-center items-center h-full">
                          <Show
                            when={
                              showCompletionScreen() &&
                              saveState.type === "done"
                            }
                            fallback={
                              <>
                                <h1 class="text-lg font-medium text-gray-12">
                                  {saveState.type === "starting"
                                    ? "Preparing..."
                                    : saveState.type === "rendering"
                                      ? settings.format === "Gif"
                                        ? "Rendering GIF..."
                                        : "Rendering video..."
                                      : saveState.type === "copying"
                                        ? "Exporting to file..."
                                        : "Export completed"}
                                </h1>
                                <Show
                                  when={
                                    (saveState.type === "rendering" ||
                                      saveState.type === "starting") &&
                                    saveState
                                  }
                                  keyed
                                >
                                  {(copyState) => (
                                    <RenderProgress
                                      state={copyState}
                                      format={settings.format}
                                    />
                                  )}
                                </Show>
                              </>
                            }
                          >
                            <div class="flex flex-col gap-6 items-center duration-500 animate-in fade-in">
                              <div class="flex flex-col gap-3 items-center">
                                <div class="flex justify-center items-center mb-2 rounded-full bg-gray-12 size-10">
                                  <IconCapCheck class="text-gray-1 size-5" />
                                </div>
                                <div class="flex flex-col gap-1 items-center">
                                  <h1 class="text-xl font-medium text-gray-12">
                                    Export Completed
                                  </h1>
                                  <p class="text-sm text-gray-11">
                                    Your{" "}
                                    {settings.format === "Gif"
                                      ? "GIF"
                                      : "video"}{" "}
                                    has successfully been exported
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Show>
                        </div>
                      )}
                    </Match>
                  </Switch>
                </div>
              </Dialog.Content>
            </>
          );
        }}
      </Show>
    </>
  );
}

function RenderProgress(props: { state: RenderState; format?: ExportFormat }) {
  return (
    <ProgressView
      amount={
        props.state.type === "rendering"
          ? (props.state.progress.renderedCount /
            props.state.progress.totalFrames) *
          100
          : 0
      }
      label={
        props.state.type === "rendering"
          ? `Rendering ${props.format === "Gif" ? "GIF" : "video"} (${props.state.progress.renderedCount
          }/${props.state.progress.totalFrames} frames)`
          : "Preparing to render..."
      }
    />
  );
}

function ProgressView(props: { amount: number; label?: string }) {
  return (
    <>
      <div class="w-full bg-gray-3 rounded-full h-2.5">
        <div
          class="bg-blue-9 h-2.5 rounded-full"
          style={{ width: `${props.amount}%` }}
        />
      </div>
      <p class="text-xs tabular-nums">{props.label}</p>
    </>
  );
}
