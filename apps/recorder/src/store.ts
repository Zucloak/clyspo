import { createQuery } from "@tanstack/solid-query";
import { onCleanup } from "solid-js";

// A simple in-memory store to replace the Tauri store
const memoryStore = new Map<string, any>();

function declareStore<T extends object>(name: string) {
  const get = async () => memoryStore.get(name) as T | undefined;
  const listen = (fn: (data?: T | undefined) => void) => {
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

export const presetsStore = declareStore<any>("presets");
export const authStore = declareStore<any>("auth");
export const hotkeysStore = declareStore<any>("hotkeys");
export const generalSettingsStore = declareStore<any>("general_settings");
