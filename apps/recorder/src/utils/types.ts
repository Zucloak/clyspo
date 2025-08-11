export type RecordingMode = "studio" | "instant";

export type ScreenCaptureTarget =
  | { variant: "window"; id: number }
  | { variant: "screen"; id: number }
  | { variant: "area"; screen: number; bounds: { x: number; y: number; width: number; height: number } };

export type DeviceOrModelID = { DeviceID: string } | { ModelID: string };
