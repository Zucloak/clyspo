import { Button } from "@cap/ui-solid";
import { trackDeep } from "@solid-primitives/deep";
import { throttle } from "@solid-primitives/scheduled";
import { makePersisted } from "@solid-primitives/storage";
import { createQuery, createMutation } from "@tanstack/solid-query";
import { cx } from "cva";
import {
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createSignal,
  on,
  onMount,
} from "solid-js";
import { createStore } from "solid-js/store";
import { useParams } from "@solidjs/router";

import Cropper, { cropToFloor } from "~/components/Cropper";
import { Toggle } from "~/components/Toggle";
import Tooltip from "~/components/Tooltip";
import { ConfigSidebar } from "./ConfigSidebar";
import {
  EditorContextProvider,
  FPS,
  OUTPUT_SIZE,
  useEditorContext,
} from "./context";
import { ExportDialog } from "./ExportDialog";
import { Header } from "./Header";
import { Player } from "./Player";
import { Timeline } from "./Timeline";
import { Dialog, DialogContent, EditorButton, Input, Subfield } from "./ui";
import { getRecording } from "~/utils/db";

export function Editor() {
  const params = useParams();
  const recordingQuery = createQuery(() => ({
    queryKey: ["recording", params.id],
    queryFn: () => getRecording(Number(params.id)),
  }));

  return (
    <Show when={recordingQuery.data}>
      {(recording) => (
        <EditorContextProvider recording={recording()}>
          <Inner />
        </EditorContextProvider>
      )}
    </Show>
  );
}

function Inner() {
  const { recording } = useEditorContext();

  const videoUrl = () => URL.createObjectURL(recording.video);

  return (
    <>
      <Header />
      <div
        class="flex overflow-y-hidden flex-col flex-1 gap-2 pb-4 w-full leading-5 animate-in fade-in"
      >
        <div class="flex overflow-hidden flex-col flex-1">
          <div class="flex overflow-y-hidden flex-row flex-1 gap-2 px-2 pb-0.5">
            <Player videoUrl={videoUrl()} />
            <ConfigSidebar />
          </div>
          <Timeline />
        </div>
        <Dialogs />
      </div>
    </>
  );
}

function Dialogs() {
  const { dialog, setDialog } = useEditorContext();

  return (
    <Dialog.Root
      contentClass={(() => {
        const d = dialog();
        if ("type" in d && d.type === "export") return "max-w-[740px]";
        return "";
      })()}
      open={dialog().open}
      onOpenChange={(o) => {
        if (!o) setDialog((d) => ({ ...d, open: false }));
      }}
    >
      <Show
        when={(() => {
          const d = dialog();
          if ("type" in d) return d;
        })()}
      >
        {(dialog) => (
          <Switch>
            <Match when={dialog().type === "export"}>
              <ExportDialog />
            </Match>
          </Switch>
        )}
      </Show>
    </Dialog.Root>
  );
}
