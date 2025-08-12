import { makePersisted } from "@solid-primitives/storage";
import { createStore } from "solid-js/store";

import { createEventListener } from "@solid-primitives/event-listener";
import {
  RecordingMode,
  ScreenCaptureTarget,
  DeviceOrModelID,
} from "./types";

export function createOptionsQuery() {
  const PERSIST_KEY = "recording-options-query";
  const [state, setState] = makePersisted(
    createStore<{
      captureTarget: ScreenCaptureTarget;
      micName: string | null;
      mode: RecordingMode;
      captureSystemAudio?: boolean;
      cameraID?: DeviceOrModelID | null;
      /** @deprecated */
      cameraLabel: string | null;
    }>({
      captureTarget: { variant: "screen", id: 0 },
      micName: null,
      cameraLabel: null,
      mode: "studio",
    }),
    { name: PERSIST_KEY }
  );

  createEventListener(window, "storage", (e) => {
    if (e.key === PERSIST_KEY) setState(JSON.parse(e.newValue ?? "{}"));
  });

  return { rawOptions: state, setOptions: setState };
}
