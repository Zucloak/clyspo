import { cx } from "cva";
import {
  ComponentProps,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Show,
} from "solid-js";

import { Button } from "@cap/ui-solid";
import Tooltip from "~/components/Tooltip";
import { useEditorContext } from "./context";
import { EditorButton } from "./ui";
import { saveAs } from "file-saver";

export type ResolutionOption = {
  label: string;
  value: string;
  width: number;
  height: number;
};

export const RESOLUTION_OPTIONS = {
  _720p: { label: "720p", value: "720p", width: 1280, height: 720 },
  _1080p: { label: "1080p", value: "1080p", width: 1920, height: 1080 },
  _4k: { label: "4K", value: "4k", width: 3840, height: 2160 },
};

export interface ExportEstimates {
  duration_seconds: number;
  estimated_time_seconds: number;
  estimated_size_mb: number;
}

export function Header() {
  const { recording } = useEditorContext();

  return (
    <div class="flex relative flex-row items-center w-full h-14">
      <div class="flex flex-row flex-1 gap-2 items-center px-4 h-full">
        <div class="flex flex-row items-center">
          <NameEditor name={recording.prettyName} />
          <span class="text-sm text-gray-11">.webm</span>
        </div>
        <div class="flex-1 h-full" />
      </div>

      <div class="flex-1 h-full flex flex-row items-center gap-2 pl-2 pr-2">
        <div class="flex-1 h-full" />
        <Button
          variant="lightdark"
          class="flex gap-1.5 justify-center h-[40px] w-full max-w-[100px]"
          onClick={() => {
            saveAs(recording.video, `${recording.prettyName}.webm`);
          }}
        >
          <UploadIcon class="text-gray-1 size-4" />
          Export
        </Button>
      </div>
    </div>
  );
}

const UploadIcon = (props: ComponentProps<"svg">) => {
  const { exportState } = useEditorContext();
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Bottom part (the base) */}
      <path
        d="M16.6667 10.625V14.1667C16.6667 15.5474 15.5474 16.6667 14.1667 16.6667H5.83333C4.45262 16.6667 3.33333 15.5474 3.33333 14.1667V10.625"
        stroke="currentColor"
        stroke-width={1.66667}
        stroke-linecap="round"
        stroke-linejoin="round"
        class="upload-base"
      />

      {/* Arrow part */}
      <path
        d="M9.99999 3.33333V12.7083M9.99999 3.33333L13.75 7.08333M9.99999 3.33333L6.24999 7.08333"
        stroke="currentColor"
        stroke-width={1.66667}
        stroke-linecap="round"
        stroke-linejoin="round"
        class={cx(
          exportState.type !== "idle" && exportState.type !== "done" && "bounce"
        )}
      />
    </svg>
  );
};

import { updateRecording } from "~/utils/db";

function NameEditor(props: { name: string }) {
  const { recording } = useEditorContext();
  const [prettyName, setPrettyName] = createSignal(props.name);

  return (
    <div class="flex flex-row items-center relative text-sm font-inherit font-normal tracking-inherit text-gray-12">
      <input
        class="bg-transparent border-b border-transparent focus:border-gray-7 focus:outline-none"
        value={prettyName()}
        onInput={(e) => setPrettyName(e.currentTarget.value)}
        onBlur={async () => {
          const trimmed = prettyName().trim();
          if (trimmed.length > 0 && trimmed !== props.name) {
            await updateRecording(recording.id, { prettyName: trimmed });
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === "Escape") {
            (e.target as HTMLInputElement).blur();
          }
        }}
      />
    </div>
  );
}
