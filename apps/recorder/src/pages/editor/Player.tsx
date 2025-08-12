import { createElementBounds } from "@solid-primitives/bounds";
import { createEffect, createSignal, Show } from "solid-js";

import { cx } from "cva";
import {
  onMount,
} from "solid-js";

import { FPS, useEditorContext } from "./context";
import { formatTime } from "./utils";
import AspectRatioSelect from "./AspectRatioSelect";

export function Player(props: { videoUrl: string }) {
  const {
    project,
    totalDuration,
    editorState,
    setEditorState,
  } = useEditorContext();

  let videoRef: HTMLVideoElement | undefined;

  const play = () => {
    videoRef?.play();
    setEditorState("playing", true);
  };

  const pause = () => {
    videoRef?.pause();
    setEditorState("playing", false);
  };

  const renderLoop = () => {
    if (videoRef && canvasContainerRef()) {
      const canvas = canvasContainerRef()?.querySelector("canvas");
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const { background } = project;
          if (background.source.type === "color") {
            ctx.fillStyle = `rgb(${background.source.value.join(",")})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          } else if (background.source.type === "gradient") {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, `rgb(${background.source.from.join(",")})`);
            gradient.addColorStop(1, `rgb(${background.source.to.join(",")})`);
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

          ctx.drawImage(videoRef, 0, 0, canvas.width, canvas.height);
        }
      }
    }
    requestAnimationFrame(renderLoop);
  };

  onMount(() => {
    requestAnimationFrame(renderLoop);
  });

  return (
    <div class="flex flex-col flex-1 rounded-xl bg-gray-1 dark:bg-gray-2 border border-gray-3">
      <video
        ref={videoRef}
        src={props.videoUrl}
        style={{ display: "none" }}
      />
      <div class="flex gap-3 justify-center p-3">
        <AspectRatioSelect />
      </div>
      <PreviewCanvas />
      <div class="flex overflow-hidden z-10 flex-row gap-3 justify-between items-center p-5">
        <div class="flex-1">
          <Time
            class="text-gray-12"
            seconds={Math.max(
              editorState.previewTime ?? editorState.playbackTime,
              0
            )}
          />
          <span class="text-gray-11 text-[0.875rem] tabular-nums"> / </span>
          <Time seconds={totalDuration()} />
        </div>
        <div class="flex flex-row items-center justify-center text-gray-11 gap-8 text-[0.875rem]">
          <button
            type="button"
            class="transition-opacity hover:opacity-70 will-change-[opacity]"
            onClick={() => {
              if (videoRef) videoRef.currentTime = 0;
            }}
          >
            <IconCapPrev class="text-gray-12 size-3" />
          </button>
          <button
            type="button"
            onClick={() => (editorState.playing ? pause() : play())}
            class="flex justify-center items-center rounded-full border border-gray-300 transition-colors bg-gray-3 hover:bg-gray-4 hover:text-black size-9"
          >
            {editorState.playing ? (
              <IconCapPause class="text-gray-12 size-3" />
            ) : (
              <IconCapPlay class="text-gray-12 size-3" />
            )}
          </button>
          <button
            type="button"
            class="transition-opacity hover:opacity-70 will-change-[opacity]"
            onClick={() => {
              if (videoRef) videoRef.currentTime = videoRef.duration;
            }}
          >
            <IconCapNext class="text-gray-12 size-3" />
          </button>
        </div>
        <div class="flex flex-row flex-1 gap-4 justify-end items-center">
          <div class="flex-1" />
        </div>
      </div>
    </div>
  );
}

function PreviewCanvas() {
  const { latestFrame } = useEditorContext();

  let canvasRef: HTMLCanvasElement | undefined;

  const [canvasContainerRef, setCanvasContainerRef] =
    createSignal<HTMLDivElement>();
  const containerBounds = createElementBounds(canvasContainerRef);

  createEffect(() => {
    const frame = latestFrame();
    if (!frame) return;
    if (!canvasRef) return;
    const ctx = canvasRef.getContext("2d");
    ctx?.putImageData(frame.data, 0, 0);
  });

  return (
    <div
      ref={setCanvasContainerRef}
      class="relative flex-1 justify-center items-center"
    >
      <Show when={latestFrame()}>
        {(currentFrame) => {
          const padding = 4;

          const containerAspect = () => {
            if (containerBounds.width && containerBounds.height) {
              return (
                (containerBounds.width - padding * 2) /
                (containerBounds.height - padding * 2)
              );
            }

            return 1;
          };

          const frameAspect = () =>
            currentFrame().width / currentFrame().data.height;

          const size = () => {
            if (frameAspect() < containerAspect()) {
              const height = (containerBounds.height ?? 0) - padding * 1;

              return {
                width: height * frameAspect(),
                height,
              };
            }

            const width = (containerBounds.width ?? 0) - padding * 2;

            return {
              width,
              height: width / frameAspect(),
            };
          };

          return (
            <div class="flex overflow-hidden absolute inset-0 justify-center items-center h-full">
              <canvas
                style={{
                  width: `${size().width - padding * 2}px`,
                  height: `${size().height}px`,
                }}
                class="bg-blue-50 rounded"
                ref={canvasRef}
                id="canvas"
                width={currentFrame().width}
                height={currentFrame().data.height}
              />
            </div>
          );
        }}
      </Show>
    </div>
  );
}

function Time(props: { seconds: number; fps?: number; class?: string }) {
  return (
    <span class={cx("text-gray-11 text-sm tabular-nums", props.class)}>
      {formatTime(props.seconds, props.fps ?? FPS)}
    </span>
  );
}
