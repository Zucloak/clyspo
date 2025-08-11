import Tooltip from "@corvu/tooltip";
import {
  createQuery,
  queryOptions,
  useQueryClient,
} from "@tanstack/solid-query";
import { cx } from "cva";
import {
  createMemo,
  createSignal,
  For,
  JSX,
  ParentProps,
  Show,
} from "solid-js";
import { deleteRecording, getAllRecordings } from "~/utils/db";

type Recording = any;

const Tabs = [
  {
    id: "all",
    label: "Show all",
  },
  {
    id: "instant",
    icon: <IconCapInstant class="invert size-3 dark:invert-0" />,
    label: "Instant",
  },
  {
    id: "studio",
    icon: <IconCapFilmCut class="invert size-3 dark:invert-0" />,
    label: "Studio",
  },
] satisfies { id: string; label: string; icon?: JSX.Element }[];

const recordingsQuery = queryOptions({
  queryKey: ["recordings"],
  queryFn: async () => {
    return await getAllRecordings();
  },
});

export default function Recordings() {
  const [activeTab, setActiveTab] = createSignal<(typeof Tabs)[number]["id"]>(
    Tabs[0].id
  );
  const recordings = createQuery(() => recordingsQuery);

  const filteredRecordings = createMemo(() => {
    if (!recordings.data) {
      return [];
    }
    if (activeTab() === "all") {
      return recordings.data;
    }
    return recordings.data.filter(
      (recording: any) => recording.meta.type === activeTab()
    );
  });

  const handleRecordingClick = (recording: Recording) => {
    // TODO: Implement this
  };

  const handleOpenEditor = (path: string) => {
    // TODO: Implement this
  };

  return (
    <div class="flex relative flex-col p-4 space-y-4 w-full h-full">
      <div class="flex flex-col">
        <h2 class="text-lg font-medium text-gray-12">Previous Recordings</h2>
        <p class="text-sm text-gray-10">
          Manage your recordings and perform actions.
        </p>
      </div>
      <Show
        when={recordings.data && recordings.data.length > 0}
        fallback={
          <p class="text-center text-[--text-tertiary] absolute flex items-center justify-center w-full h-full">
            No recordings found
          </p>
        }
      >
        <div class="flex gap-3 items-center pb-4 w-full border-b border-gray-2">
          <For each={Tabs}>
            {(tab) => (
              <div
                class={cx(
                  "flex gap-1.5 items-center transition-colors duration-200 p-2 px-3 border rounded-full",
                  activeTab() === tab.id
                    ? "bg-gray-5 cursor-default border-gray-5"
                    : "bg-transparent cursor-pointer hover:bg-gray-3 border-gray-5"
                )}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon && tab.icon}
                <p class="text-xs text-gray-12">{tab.label}</p>
              </div>
            )}
          </For>
        </div>

        <div class="flex flex-col flex-1 mt-4 rounded-xl border custom-scroll bg-gray-2 border-gray-3">
          <ul class="p-4 flex flex-col gap-5 w-full text-[--text-primary]">
            <For each={filteredRecordings()}>
              {(recording: any) => (
                <RecordingItem
                  recording={recording}
                  onClick={() => handleRecordingClick(recording)}
                  onOpenEditor={() => handleOpenEditor(recording.path)}
                />
              )}
            </For>
          </ul>
        </div>
      </Show>
    </div>
  );
}

function RecordingItem(props: {
  recording: Recording;
  onClick: () => void;
  onOpenEditor: () => void;
}) {
  const [imageExists, setImageExists] = createSignal(true);
  const type = () => props.recording.meta.type;
  const firstLetterUpperCase = () =>
    type().charAt(0).toUpperCase() + type().slice(1);

  const queryClient = useQueryClient();

  return (
    <li class="flex flex-row justify-between [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-5 [&:not(:last-child)]:border-gray-3 items-center w-full  transition-colors duration-200 hover:bg-gray-2">
      <div class="flex gap-5 items-center">
        <Show
          when={imageExists()}
          fallback={<div class="mr-4 rounded bg-gray-10 size-11" />}
        >
          <img
            class="object-cover rounded size-12"
            alt="Recording thumbnail"
            src={URL.createObjectURL(props.recording.thumbnail)}
            onError={() => setImageExists(false)}
          />
        </Show>
        <div class="flex flex-col gap-2">
          <span>{props.recording.prettyName}</span>
          <div
            class={cx(
              "px-2 py-0.5 flex items-center gap-1.5 font-medium text-[11px] text-gray-12 rounded-full w-fit",
              type() === "instant" ? "bg-blue-100" : "bg-gray-3"
            )}
          >
            {type() === "instant" ? (
              <IconCapInstant class="invert size-2.5 dark:invert-0" />
            ) : (
              <IconCapFilmCut class="invert size-2.5 dark:invert-0" />
            )}
            <p>{firstLetterUpperCase()}</p>
          </div>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <TooltipIconButton
            tooltipText="Edit"
            onClick={() => props.onOpenEditor()}
          >
            <IconLucideEdit class="size-4" />
          </TooltipIconButton>
        <TooltipIconButton
          tooltipText="Delete"
          onClick={async () => {
            if (!confirm("Are you sure you want to delete this recording?"))
              return;
            await deleteRecording(props.recording.id);
            queryClient.refetchQueries({ queryKey: ["recordings"] });
          }}
        >
          <IconCapTrash class="size-4" />
        </TooltipIconButton>
      </div>
    </li>
  );
}

function TooltipIconButton(
  props: ParentProps<{
    onClick: () => void;
    tooltipText: string;
    disabled?: boolean;
  }>
) {
  return (
    <Tooltip>
      <Tooltip.Trigger
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          props.onClick();
        }}
        disabled={props.disabled}
        class="p-2.5 opacity-70 will-change-transform hover:opacity-100 rounded-full transition-all duration-200 hover:bg-gray-3 dark:hover:bg-gray-5"
      >
        {props.children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content class="py-2 px-3 font-medium bg-gray-2 text-gray-12 border border-gray-3 text-xs rounded-lg animate-in fade-in slide-in-from-top-0.5">
          {props.tooltipText}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  );
}
