import { createQuery } from "@tanstack/solid-query";
import {
  Match,
  Show,
  Switch,
} from "solid-js";
import { useParams } from "@solidjs/router";

import { ConfigSidebar } from "./ConfigSidebar";
import {
  EditorContextProvider,
  useEditorContext,
} from "./context";
import { ExportDialog } from "./ExportDialog";
import { Header } from "./Header";
import { Player } from "./Player";
import { Timeline } from "./Timeline";
import { Dialog } from "./ui";
import { getRecording } from "../../utils/db";

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
