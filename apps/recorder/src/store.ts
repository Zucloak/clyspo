import { createQuery } from "@tanstack/solid-query";
import { onCleanup } from "solid-js";

// A simple in-memory store to replace the Tauri store
const memoryStore = new Map<string, unknown>();

function declareStore<T extends object>(name: string) {
  const get = async () => memoryStore.get(name) as T | undefined;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const listen = (_fn: (data?: T | undefined) => void) => {
    // This is a no-op for now, as we don't have a way to listen for changes
    // to the in-memory store.
    return Promise.resolve(() => {});
  };

  return {
    get,
    listen,
    set: async (value?: Partial<T>) => {
      if (value === undefined) {
        memoryStore.delete(name);
      } else {
        const current = memoryStore.get(name) || {};
        memoryStore.set(name, { ...current, ...value });
      }
    },
    createQuery: () => {
      const query = createQuery(() => ({
        queryKey: ["store", name],
        queryFn: async () => (await get()) ?? null,
      }));

      const cleanup = listen(() => {
        query.refetch();
      });
      onCleanup(() => cleanup.then((c) => c()));

      return query;
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ProjectConfiguration = { [key: string]: any }; // placeholder
export type Preset = { name: string; config: ProjectConfiguration };
export type PresetsStore = { presets: Preset[]; default: number | null };

export type AuthSecret = { api_key: string } | { token: string; expires: number };
export type Plan = { upgraded: boolean; manual: boolean; last_checked: number };
export type AuthStore = { secret: AuthSecret; user_id: string | null; plan: Plan | null; intercom_hash: string | null };

export const presetsStore = declareStore<PresetsStore>("presets");
export const authStore = declareStore<AuthStore>("auth");

export type HotkeyAction = "startRecording" | "stopRecording" | "restartRecording";
export type Hotkey = { code: string; meta: boolean; ctrl: boolean; alt: boolean; shift: boolean };
export type HotkeysStore = { hotkeys: { [key in HotkeyAction]: Hotkey } };

export const hotkeysStore = declareStore<HotkeysStore>("hotkeys");

export type GeneralSettingsStore = { hapticsEnabled?: boolean; };
export const generalSettingsStore = declareStore<GeneralSettingsStore>("general_settings");
