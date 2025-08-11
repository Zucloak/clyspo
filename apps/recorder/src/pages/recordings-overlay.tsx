import { Button } from "@cap/ui-solid";
import Tooltip from "@corvu/tooltip";
import { createElementBounds } from "@solid-primitives/bounds";
import { makePersisted } from "@solid-primitives/storage";
import { createMutation, createQuery } from "@tanstack/solid-query";
// import { convertFileSrc } from "@tauri-apps/api/core";
import { cx } from "cva";
import {
  type Accessor,
  type ComponentProps,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  For,
  Match,
  onCleanup,
  onMount,
  Show,
  startTransition,
  Suspense,
  Switch,
} from "solid-js";
import { createStore, produce, SetStoreFunction } from "solid-js/store";
import { TransitionGroup } from "solid-transition-group";
import IconLucideClock from "~icons/lucide/clock";

import { authStore } from "~/store";
// import { exportVideo } from "~/utils/export";
// import { commands, events, FramesRendered, UploadResult } from "~/utils/tauri";
import { FPS, OUTPUT_SIZE } from "./editor/context";
// import { createTauriEventListener } from "~/utils/createEventListener";

type MediaEntry = {
  path: string;
  prettyName: string;
  isNew: boolean;
  type?: "recording" | "screenshot";
};

export default function () {
  return null;
}

function ActionProgressOverlay(props: {
  title: string;
  // percentage 0-100
  progressPercentage: number;
  progressMessage?: string | false;
}) {
  return (
    <div
      style={{
        "background-color": "rgba(0, 0, 0, 0.85)",
      }}
      class="absolute inset-0 flex items-center justify-center z-[999999] pointer-events-auto"
    >
      <div class="w-[80%] text-center">
        <h3 class="mb-3 text-sm font-medium text-gray-1 dark:text-gray-12">
          {props.title}
        </h3>
        <div class="w-full bg-gray-10 rounded-full h-2.5 mb-2">
          <div
            class="bg-blue-9 text-gray-1 dark:text-gray-12 h-2.5 rounded-full transition-all duration-200"
            style={{
              width: `${Math.max(0, Math.min(100, props.progressPercentage))}%`,
            }}
          />
        </div>

        <p class="mt-2 text-xs text-gray-1 dark:text-gray-12">
          {typeof props.progressMessage === "string"
            ? props.progressMessage
            : `${Math.floor(props.progressPercentage)}%`}
        </p>
      </div>
    </div>
  );
}

const IconButton = (props: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      type="button"
      class={cx(
        "p-[0.325rem] bg-gray-1 dark:bg-gray-12 rounded-full text-[12px] shadow-[0px 2px 4px rgba(18, 22, 31, 0.12)]",
        props.class
      )}
    />
  );
};

const TooltipIconButton = (
  props: ComponentProps<"button"> & {
    tooltipText: string;
    tooltipPlacement: string;
  }
) => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <Tooltip
      placement={props.tooltipPlacement as "top" | "bottom" | "left" | "right"}
      openDelay={0}
      closeDelay={0}
      open={isOpen()}
      onOpenChange={setIsOpen}
      hoverableContent={false}
      floatingOptions={{
        offset: 10,
        flip: true,
        shift: true,
      }}
    >
      <Tooltip.Trigger as={IconButton} {...props}>
        {props.children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          class="py-1.5 px-2 font-medium"
          style={{
            "background-color": "rgba(255, 255, 255, 0.85)",
            color: "black",
            "border-radius": "8px",
            "font-size": "12px",
            "z-index": "15",
          }}
        >
          {props.tooltipText}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  );
};

function createFakeWindowBounds(
  ref: () => HTMLElement | undefined | null,
  key: Accessor<string>
) {
  const bounds = createElementBounds(ref);

  createEffect(() => {
    commands.setFakeWindowBounds(key(), {
      x: bounds.left ?? 0,
      y: bounds.top ?? 0,
      width: bounds.width ?? 0,
      height: bounds.height ?? 0,
    });
  });

  onCleanup(() => {
    commands.removeFakeWindow(key());
  });
}

function createRecordingMutations(
  media: MediaEntry,
  onEvent: (e: "upgradeRequired") => void
) {
  const type = media.type ?? "recording";
  const isRecording = type !== "screenshot";

  const recordingMeta = createQuery(() => ({
    queryKey: ["recordingMeta", media.path],
    queryFn: () => commands.getRecordingMeta(media.path, type),
  }));

  // just a wrapper of exportVideo to provide base settings
  // const exportWithDefaultSettings = (
  //   onProgress: (progress: FramesRendered) => void
  // ) =>
  //   exportVideo(
  //     media.path,
  //     {
  //       format: "Mp4",
  //       fps: FPS,
  //       resolution_base: OUTPUT_SIZE,
  //       compression: "Web",
  //     },
  //     onProgress
  //   );

  const copy = createMutation(() => ({
    mutationFn: async () => {
      setActionState({
        type: "copy",
        state: { type: "rendering", state: { type: "starting" } },
      });

      try {
        if (isRecording) {
          // First try to get existing rendered video
          const outputPath = await exportWithDefaultSettings(
            createRenderProgressCallback("copy", setActionState)
          );

          // Show quick progress animation for existing video
          setActionState(
            produce((s) => {
              if (
                s.type === "copy" &&
                s.state.type === "rendering" &&
                s.state.state.type === "rendering"
              )
                s.state.state.renderedFrames = s.state.state.totalFrames;
            })
          );

          await commands.copyVideoToClipboard(outputPath);
        } else {
          // For screenshots, show quick progress animation
          setActionState({
            type: "copy",
            state: { type: "copying" },
          });
          await commands.copyScreenshotToClipboard(media.path);
        }

        setActionState({
          type: "copy",
          state: { type: "copied" },
        });
      } catch (error) {
        console.error("Error in copy media:", error);
        throw error;
      }
    },
    onSuccess() {
      setTimeout(() => {
        setActionState({ type: "idle" });
      }, 2000);
    },
  }));

  const save = createMutation(() => ({
    mutationFn: async () => {
      const meta = recordingMeta.data;
      if (!meta) {
        throw new Error("Recording metadata not available");
      }

      const defaultName = isRecording
        ? "Cap Recording"
        : media.path.split(".cap/")[1];
      const suggestedName = meta.pretty_name || defaultName;

      const fileType = isRecording ? "recording" : "screenshot";
      const extension = isRecording ? ".mp4" : ".png";

      const fullFileName = suggestedName.endsWith(extension)
        ? suggestedName
        : `${suggestedName}${extension}`;

      setActionState({
        type: "save",
        state: {
          type: "choosing-location",
          mediaType: isRecording ? "video" : "screenshot",
        },
      });

      const savePath = await commands.saveFileDialog(fullFileName, fileType);

      if (!savePath) {
        setActionState({ type: "idle" });
        return false;
      }

      setActionState({
        type: "save",
        state: {
          type: "rendering",
          state: { type: "starting" },
        },
      });

      if (isRecording) {
        const outputPath = await exportWithDefaultSettings(
          createRenderProgressCallback("save", setActionState)
        );

        await commands.copyFileToPath(outputPath, savePath);
      } else {
        // For screenshots, show quick progress animation
        setActionState({ type: "save", state: { type: "saving" } });

        await commands.copyFileToPath(media.path, savePath);
      }

      setActionState({ type: "save", state: { type: "saved" } });

      return true;
    },
    onSettled() {
      setTimeout(() => {
        setActionState({ type: "idle" });
      }, 2000);
    },
  }));

  const upload = createMutation(() => ({
    mutationFn: async () => {
      if (recordingMeta.data?.sharing) {
        setActionState({ type: "upload", state: { type: "link-copied" } });

        await commands.writeClipboardString(recordingMeta.data.sharing.link);

        return;
      }

      // Check authentication first
      const existingAuth = await authStore.get();
      if (!existingAuth) {
        throw new Error("You need to sign in to share recordings");
      }

      const metadata = await commands.getVideoMetadata(media.path);
      const plan = await commands.checkUpgradedAndUpdate();
      const canShare = {
        allowed: plan || metadata.duration < 300,
        reason: !plan && metadata.duration >= 300 ? "upgrade_required" : null,
      };

      if (!canShare.allowed) {
        if (canShare.reason === "upgrade_required") {
          await commands.showWindow("Upgrade");
          throw new Error(
            "Upgrade required to share recordings longer than 5 minutes"
          );
        }
      }

      const unlisten = await events.uploadProgress.listen((event) => {
        console.log("Upload progress event:", event.payload);
        setActionState(
          produce((actionState) => {
            if (
              actionState.type !== "upload" ||
              actionState.state.type !== "uploading"
            )
              return;

            actionState.state.progress = Math.round(
              event.payload.progress * 100
            );
          })
        );
      });

      try {
        let res: UploadResult;
        if (isRecording) {
          setActionState({
            type: "upload",
            state: { type: "rendering", state: { type: "starting" } },
          });

          const progress = createRenderProgressCallback(
            "upload",
            setActionState
          );

          await exportWithDefaultSettings(progress);

          // Show quick progress animation for existing video
          setActionState(
            produce((s) => {
              if (
                s.type === "copy" &&
                s.state.type === "rendering" &&
                s.state.state.type === "rendering"
              )
                s.state.state.renderedFrames = s.state.state.totalFrames;
            })
          );

          setActionState({
            type: "upload",
            state: { type: "uploading", progress: 0 },
          });

          res = await commands.uploadExportedVideo(media.path, {
            Initial: { pre_created_video: null },
          });
        } else {
          setActionState({
            type: "upload",
            state: { type: "uploading", progress: 0 },
          });

          res = await commands.uploadScreenshot(media.path);
        }

        switch (res) {
          case "NotAuthenticated":
            throw new Error("Not authenticated");
          case "PlanCheckFailed":
            throw new Error("Plan check failed");
          case "UpgradeRequired":
            onEvent("upgradeRequired");
            return;
          default:
            break;
        }
      } finally {
        unlisten();
      }

      setActionState({ type: "upload", state: { type: "link-copied" } });
    },
    onSettled() {
      setTimeout(() => {
        setActionState({ type: "idle" });
      }, 2000);
    },
    onSuccess: () => startTransition(() => recordingMeta.refetch()),
  }));

  const [actionState, setActionState] = createStore<ActionState>({
    type: "idle",
  });

  return { copy, save, upload, actionState };
}

type ActionState =
  | { type: "idle" }
  | {
      type: "copy";
      state:
        | { type: "rendering"; state: RenderState }
        | { type: "copying" }
        | { type: "copied" };
    }
  | {
      type: "save";
      state:
        | { type: "choosing-location"; mediaType: "video" | "screenshot" }
        | { type: "rendering"; state: RenderState }
        | { type: "saving" }
        | { type: "saved" };
    }
  | {
      type: "upload";
      state:
        | { type: "rendering"; state: RenderState }
        | {
            type: "uploading";
            // 0-100
            progress: number;
          }
        | { type: "link-copied" };
    };

function createRenderProgressCallback(
  actionType: Exclude<ActionState["type"], "idle">,
  setActionState: SetStoreFunction<ActionState>
) {
  return (msg: FramesRendered) => {
    setActionState(
      produce((progressState) => {
        if (
          progressState.type !== actionType ||
          progressState.state.type !== "rendering"
        )
          return;

        if (progressState.state.state.type === "rendering")
          progressState.state.state = {
            type: "rendering",
            renderedFrames: msg.renderedCount,
            totalFrames: msg.totalFrames,
          };
      })
    );
  };
}

function actionProgressPercentage(state: ActionState): number {
  function renderPercentage(state: RenderState) {
    if (state.type === "starting") return 0;
    else
      return Math.floor(
        Math.min((state.renderedFrames / state.totalFrames) * 100, 100)
      );
  }

  if (state.type === "idle") return 0;

  if (state.state.type === "rendering")
    return renderPercentage(state.state.state);

  switch (state.type) {
    case "copy": {
      return state.state.type === "copied" ? 100 : 50;
    }
    case "save": {
      if (state.state.type === "choosing-location") return 0;
      return state.state.type === "saved" ? 100 : 50;
    }
    case "upload": {
      if (state.state.type === "link-copied") return 100;
      return state.state.progress;
    }
  }
}

type RenderState =
  | {
      type: "rendering";
      renderedFrames: number;
      totalFrames: number;
    }
  | { type: "starting" };
