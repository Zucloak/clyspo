import {
  Collapsible,
} from "@kobalte/core/collapsible";
import {
  RadioGroup as KRadioGroup,
  RadioGroup,
} from "@kobalte/core/radio-group";
import { Select as KSelect } from "@kobalte/core/select";
import { Tabs as KTabs } from "@kobalte/core/tabs";
import { createElementBounds } from "@solid-primitives/bounds";
import { createEventListenerMap } from "@solid-primitives/event-listener";
import { createWritableMemo } from "@solid-primitives/memo";
import { cx } from "cva";
import {
  For,
  Show,
  ValidComponent,
  batch,
  createEffect,
  createMemo,
  createResource,
  createRoot,
  createSignal,
  on,
  onMount,
} from "solid-js";
import { createStore } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import toast from "solid-toast";
// import colorBg from "~/assets/illustrations/color.webp";
// import gradientBg from "~/assets/illustrations/gradient.webp";
// import imageBg from "~/assets/illustrations/image.webp";
// import transparentBg from "~/assets/illustrations/transparent.webp";
import { Toggle } from "~/components/Toggle";
import { useEditorContext } from "./context";
import {
  DEFAULT_GRADIENT_FROM,
  DEFAULT_GRADIENT_TO,
  RGBColor,
} from "./projectConfig";
import ShadowSettings from "./ShadowSettings";
import { TextInput } from "./TextInput";
import {
  ComingSoonTooltip,
  EditorButton,
  Field,
  MenuItem,
  MenuItemList,
  PopperContent,
  Slider,
  Subfield,
  topSlideAnimateClasses,
} from "./ui";
import { CaptionsTab } from "./CaptionsTab";
import { BackgroundSource, CameraShape, StereoMode } from "~/utils/types";

const BACKGROUND_SOURCES = {
  wallpaper: "Wallpaper",
  image: "Image",
  color: "Color",
  gradient: "Gradient",
} satisfies Record<BackgroundSource["type"], string>;

// const BACKGROUND_ICONS = {
//   wallpaper: imageBg,
//   image: transparentBg,
//   color: colorBg,
//   gradient: gradientBg,
// } satisfies Record<BackgroundSource["type"], string>;

const BACKGROUND_SOURCES_LIST = [
  "wallpaper",
  "image",
  "color",
  "gradient",
] satisfies Array<BackgroundSource["type"]>;

const BACKGROUND_COLORS = [
  "#FF0000", // Red
  "#FF4500", // Orange-Red
  "#FF8C00", // Orange
  "#FFD700", // Gold
  "#FFFF00", // Yellow
  "#ADFF2F", // Green-Yellow
  "#32CD32", // Lime Green
  "#008000", // Green
  "#00CED1", // Dark Turquoise
  "#4785FF", // Dodger Blue
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#800080", // Purple
  "#A9A9A9", // Dark Gray
  "#FFFFFF", // White
  "#000000", // Black
];

const BACKGROUND_GRADIENTS = [
  { from: [15, 52, 67], to: [52, 232, 158] }, // Dark Blue to Teal
  { from: [34, 193, 195], to: [253, 187, 45] }, // Turquoise to Golden Yellow
  { from: [29, 253, 251], to: [195, 29, 253] }, // Cyan to Purple
  { from: [69, 104, 220], to: [176, 106, 179] }, // Blue to Violet
  { from: [106, 130, 251], to: [252, 92, 125] }, // Soft Blue to Pinkish Red
  { from: [131, 58, 180], to: [253, 29, 29] }, // Purple to Red
  { from: [249, 212, 35], to: [255, 78, 80] }, // Yellow to Coral Red
  { from: [255, 94, 0], to: [255, 42, 104] }, // Orange to Reddish Pink
  { from: [255, 0, 150], to: [0, 204, 255] }, // Pink to Sky Blue
  { from: [0, 242, 96], to: [5, 117, 230] }, // Green to Blue
  { from: [238, 205, 163], to: [239, 98, 159] }, // Peach to Soft Pink
  { from: [44, 62, 80], to: [52, 152, 219] }, // Dark Gray Blue to Light Blue
  { from: [168, 239, 255], to: [238, 205, 163] }, // Light Blue to Peach
  { from: [74, 0, 224], to: [143, 0, 255] }, // Deep Blue to Bright Purple
  { from: [252, 74, 26], to: [247, 183, 51] }, // Deep Orange to Soft Yellow
  { from: [0, 255, 255], to: [255, 20, 147] }, // Cyan to Deep Pink
  { from: [255, 127, 0], to: [255, 255, 0] }, // Orange to Yellow
  { from: [255, 0, 255], to: [0, 255, 0] }, // Magenta to Green
] satisfies Array<{ from: RGBColor; to: RGBColor }>;

const WALLPAPER_NAMES = [
  // macOS wallpapers
  "macOS/sequoia-dark",
  "macOS/sequoia-light",
  "macOS/sonoma-clouds",
  "macOS/sonoma-dark",
  "macOS/sonoma-evening",
  "macOS/sonoma-fromabove",
  "macOS/sonoma-horizon",
  "macOS/sonoma-light",
  "macOS/sonoma-river",
  "macOS/ventura-dark",
  "macOS/ventura-semi-dark",
  "macOS/ventura",
  // Blue wallpapers
  "blue/1",
  "blue/2",
  "blue/3",
  "blue/4",
  "blue/5",
  "blue/6",
  // Purple wallpapers
  "purple/1",
  "purple/2",
  "purple/3",
  "purple/4",
  "purple/5",
  "purple/6",
  // Dark wallpapers
  "dark/1",
  "dark/2",
  "dark/3",
  "dark/4",
  "dark/5",
  "dark/6",
  // Orange wallpapers
  "orange/1",
  "orange/2",
  "orange/3",
  "orange/4",
  "orange/5",
  "orange/6",
  "orange/7",
  "orange/8",
  "orange/9",
] as const;

const CAMERA_SHAPES = [
  {
    name: "Square",
    value: "square",
  },
  {
    name: "Source",
    value: "source",
  },
] satisfies Array<{ name: string; value: CameraShape }>;

const BACKGROUND_THEMES = {
  macOS: "macOS",
  dark: "Dark",
  blue: "Blue",
  purple: "Purple",
  orange: "Orange",
};

const TAB_IDS = {
  background: "background",
  camera: "camera",
  transcript: "transcript",
  audio: "audio",
  cursor: "cursor",
  hotkeys: "hotkeys",
} as const;

export function ConfigSidebar() {
  const [state, setState] = createStore({
    selectedTab: "background" as "background" | "captions",
  });

  let scrollRef!: HTMLDivElement;

  return (
    <KTabs
      value={state.selectedTab}
      class="flex flex-col shrink-0 flex-1 max-w-[26rem] overflow-hidden rounded-xl z-10 relative bg-gray-1 dark:bg-gray-2 border border-gray-3"
    >
      <KTabs.List class="flex overflow-hidden relative z-40 flex-row items-center h-16 text-lg border-b border-gray-3 shrink-0">
        <For
          each={[
            { id: TAB_IDS.background, icon: IconCapImage },
            {
              id: "captions" as const,
              icon: IconCapMessageBubble,
            },
          ].filter(Boolean)}
        >
          {(item) => (
            <KTabs.Trigger
              value={item.id}
              class="flex relative z-10 flex-1 justify-center items-center px-4 py-2 transition-colors text-gray-11 group ui-selected:text-gray-12 disabled:opacity-50 focus:outline-none"
              onClick={() => {
                setState("selectedTab", item.id);
                scrollRef.scrollTo({
                  top: 0,
                });
              }}
            >
              <div
                class={cx(
                  "flex justify-center relative border-transparent border z-10 items-center rounded-md size-9 transition will-change-transform",
                  state.selectedTab !== item.id &&
                    "group-hover:border-gray-300 group-disabled:border-none",
                )}
              >
                <Dynamic component={item.icon} />
              </div>
            </KTabs.Trigger>
          )}
        </For>

        {/** Center the indicator with the icon */}
        <KTabs.Indicator class="absolute top-0 left-0 w-full h-full transition-transform duration-200 ease-in-out pointer-events-none will-change-transform">
          <div class="absolute top-1/2 left-1/2 rounded-lg transform -translate-x-1/2 -translate-y-1/2 bg-gray-3 will-change-transform size-9" />
        </KTabs.Indicator>
      </KTabs.List>
      <div
        ref={scrollRef}
        class="p-4 custom-scroll overflow-x-hidden overflow-y-scroll text-[0.875rem] h-full"
      >
        <BackgroundConfig scrollRef={scrollRef} />
        <KTabs.Content value="captions" class="flex flex-col gap-6">
          <CaptionsTab />
        </KTabs.Content>
      </div>
    </KTabs>
  );
}

function BackgroundConfig(props: { scrollRef: HTMLDivElement }) {
  const { project, setProject, projectHistory } = useEditorContext();

  // Background tabs
  const [backgroundTab, setBackgroundTab] =
    createSignal<keyof typeof BACKGROUND_THEMES>("macOS");

  const [wallpapers] = createResource(async () => {
    // Only load visible wallpapers initially
    const visibleWallpaperPaths = WALLPAPER_NAMES.map(async (id) => {
      try {
        const path = await resolveResource(`assets/backgrounds/${id}.jpg`);
        return { id, path };
      } catch (err) {
        return { id, path: null };
      }
    });

    // Load initial batch
    const initialPaths = await Promise.all(visibleWallpaperPaths);

    return initialPaths
      .filter((p) => p.path !== null)
      .map(({ id, path }) => ({
        id,
        url: convertFileSrc(path!),
        rawPath: path!,
      }));
  });

  // Validate background source path on mount
  onMount(async () => {
    if (
      project.background.source.type === "wallpaper" ||
      project.background.source.type === "image"
    ) {
      const path = project.background.source.path;

      if (path) {
        if (project.background.source.type === "wallpaper") {
          // If the path is just the wallpaper ID (e.g. "sequoia-dark"), get the full path
          if (
            WALLPAPER_NAMES.includes(path as (typeof WALLPAPER_NAMES)[number])
          ) {
            // Wait for wallpapers to load
            const loadedWallpapers = wallpapers();
            if (!loadedWallpapers) return;

            // Find the wallpaper with matching ID
            const wallpaper = loadedWallpapers.find((w) => w.id === path);
            if (!wallpaper?.url) return;

            // Directly trigger the radio group's onChange handler
            const radioGroupOnChange = async (photoUrl: string) => {
              try {
                const wallpaper = wallpapers()?.find((w) => w.url === photoUrl);
                if (!wallpaper) return;

                // Get the raw path without any URL prefixes
                const rawPath = decodeURIComponent(
                  photoUrl.replace("file://", ""),
                );

                debouncedSetProject(rawPath);
              } catch (err) {
                toast.error("Failed to set wallpaper");
              }
            };

            await radioGroupOnChange(wallpaper.url);
          }
        } else if (project.background.source.type === "image") {
          (async () => {
            try {
              const convertedPath = convertFileSrc(path);
              await fetch(convertedPath, { method: "HEAD" });
            } catch (err) {
              setProject("background", "source", {
                type: "image",
                path: null,
              });
            }
          })();
        }
      }
    }
  });

  const filteredWallpapers = createMemo(() => {
    const currentTab = backgroundTab();
    return wallpapers()?.filter((wp) => wp.id.startsWith(currentTab)) || [];
  });

  const [scrollX, setScrollX] = createSignal(0);
  const [reachedEndOfScroll, setReachedEndOfScroll] = createSignal(false);

  const [backgroundRef, setBackgroundRef] = createSignal<HTMLDivElement>();

  createEventListenerMap(
    () => backgroundRef() ?? [],
    {
      /** Handle background tabs overflowing to show fade */
      scroll: () => {
        const el = backgroundRef();
        if (el) {
          setScrollX(el.scrollLeft);
          const reachedEnd = el.scrollWidth - el.clientWidth - el.scrollLeft;
          setReachedEndOfScroll(reachedEnd === 0);
        }
      },
      //Mouse wheel and touchpad support
      wheel: (e: WheelEvent) => {
        const el = backgroundRef();
        if (el) {
          e.preventDefault();
          el.scrollLeft +=
            Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        }
      },
    },
    { passive: false },
  );

  let fileInput!: HTMLInputElement;

  // Optimize the debounced set project function
  const debouncedSetProject = (wallpaperPath: string) => {
    const resumeHistory = projectHistory.pause();
    queueMicrotask(() => {
      batch(() => {
        setProject("background", "source", {
          type: "wallpaper",
          path: wallpaperPath,
        } as const);
        resumeHistory();
      });
    });
  };

  const backgrounds: {
    [K in BackgroundSource["type"]]: Extract<BackgroundSource, { type: K }>;
  } = {
    wallpaper: {
      type: "wallpaper",
      path: null,
    },
    image: {
      type: "image",
      path: null,
    },
    color: {
      type: "color",
      value: DEFAULT_GRADIENT_FROM,
    },
    gradient: {
      type: "gradient",
      from: DEFAULT_GRADIENT_FROM,
      to: DEFAULT_GRADIENT_TO,
    },
  };

  const generalSettings = generalSettingsStore.createQuery();
  const hapticsEnabled = () =>
    generalSettings.data?.hapticsEnabled && ostype() === "macos";

  return (
    <KTabs.Content value={TAB_IDS.background} class="flex flex-col gap-6">
      <Field icon={<IconCapImage class="size-4" />} name="Background Image">
        <KTabs
          value={project.background.source.type}
          onChange={(v) => {
            const tab = v as BackgroundSource["type"];
            switch (tab) {
              case "image": {
                setProject("background", "source", {
                  type: "image",
                  path:
                    project.background.source.type === "image"
                      ? project.background.source.path
                      : null,
                });
                break;
              }
              case "color": {
                setProject("background", "source", {
                  type: "color",
                  value:
                    project.background.source.type === "color"
                      ? project.background.source.value
                      : DEFAULT_GRADIENT_FROM,
                });
                break;
              }
              case "gradient": {
                setProject("background", "source", {
                  type: "gradient",
                  from:
                    project.background.source.type === "gradient"
                      ? project.background.source.from
                      : DEFAULT_GRADIENT_FROM,
                  to:
                    project.background.source.type === "gradient"
                      ? project.background.source.to
                      : DEFAULT_GRADIENT_TO,
                  angle:
                    project.background.source.type === "gradient"
                      ? project.background.source.angle
                      : 90,
                });
                break;
              }
              case "wallpaper": {
                setProject("background", "source", {
                  type: "wallpaper",
                  path:
                    project.background.source.type === "wallpaper"
                      ? project.background.source.path
                      : null,
                });
                break;
              }
            }
          }}
        >
          <KTabs.List class="flex flex-row gap-2 items-center rounded-[0.5rem] relative">
            <For each={BACKGROUND_SOURCES_LIST}>
              {(item) => {
                const el = (props?: object) => (
                  <KTabs.Trigger
                    class="z-10 flex-1 py-2.5 px-2 text-xs text-gray-11  ui-selected:border-gray-3 ui-selected:bg-gray-3 ui-not-selected:hover:border-gray-7 rounded-[10px] transition-colors duration-200 outline-none border ui-selected:text-gray-12 peer"
                    value={item}
                    {...props}
                  >
                    <div class="flex gap-1.5 justify-center items-center">
                      {(() => {
                        const getGradientBackground = () => {
                          const angle =
                            project.background.source.type === "gradient"
                              ? project.background.source.angle
                              : 90;
                          const fromColor =
                            project.background.source.type === "gradient"
                              ? project.background.source.from
                              : DEFAULT_GRADIENT_FROM;
                          const toColor =
                            project.background.source.type === "gradient"
                              ? project.background.source.to
                              : DEFAULT_GRADIENT_TO;

                          return (
                            <div
                              class="size-3.5 rounded"
                              style={{
                                background: `linear-gradient(${angle}deg, rgb(${fromColor}), rgb(${toColor}))`,
                              }}
                            />
                          );
                        };

                        const getColorBackground = () => {
                          const backgroundColor =
                            project.background.source.type === "color"
                              ? project.background.source.value
                              : hexToRgb(BACKGROUND_COLORS[9]);

                          return (
                            <div
                              class="size-3.5 rounded-[5px]"
                              style={{
                                "background-color": `rgb(${backgroundColor})`,
                              }}
                            />
                          );
                        };

                        switch (item) {
                          case "gradient":
                            return getGradientBackground();
                          case "color":
                            return getColorBackground();
                          case "image":
                          case "wallpaper":
                            return null;
                          default:
                            return null;
                        }
                      })()}
                      {BACKGROUND_SOURCES[item]}
                    </div>
                  </KTabs.Trigger>
                );

                return el({});
              }}
            </For>
          </KTabs.List>
          {/** Dashed divider */}
          <div class="my-5 w-full border-t border-dashed border-gray-5" />
          <KTabs.Content value="wallpaper">
            {/** Background Tabs */}
            <KTabs class="overflow-hidden relative" value={backgroundTab()}>
              <KTabs.List
                ref={setBackgroundRef}
                class="flex overflow-x-auto overscroll-contain relative z-40 flex-row gap-2 items-center mb-3 text-xs hide-scroll"
                style={{
                  "-webkit-mask-image": `linear-gradient(to right, transparent, black ${
                    scrollX() > 0 ? "24px" : "0"
                  }, black calc(100% - ${
                    reachedEndOfScroll() ? "0px" : "24px"
                  }), transparent)`,

                  "mask-image": `linear-gradient(to right, transparent, black ${
                    scrollX() > 0 ? "24px" : "0"
                  }, black calc(100% - ${
                    reachedEndOfScroll() ? "0px" : "24px"
                  }), transparent);`,
                }}
              >
                <For each={Object.entries(BACKGROUND_THEMES)}>
                  {([key, value]) => (
                    <>
                      <KTabs.Trigger
                        onClick={() =>
                          setBackgroundTab(
                            key as keyof typeof BACKGROUND_THEMES,
                          )
                        }
                        value={key}
                        class="flex relative z-10 flex-1 justify-center items-center px-4 py-2 bg-transparent rounded-lg border transition-colors duration-200 text-gray-11 ui-not-selected:hover:border-gray-7 ui-selected:bg-gray-3 ui-selected:border-gray-3 group ui-selected:text-gray-12 disabled:opacity-50 focus:outline-none"
                      >
                        {value}
                      </KTabs.Trigger>
                    </>
                  )}
                </For>
              </KTabs.List>
            </KTabs>
            {/** End of Background Tabs */}
            <KRadioGroup
              value={
                project.background.source.type === "wallpaper"
                  ? (wallpapers()?.find((w) =>
                      (
                        project.background.source as { path?: string }
                      ).path?.includes(w.id),
                    )?.url ?? undefined)
                  : undefined
              }
              onChange={(photoUrl) => {
                try {
                  const wallpaper = wallpapers()?.find(
                    (w) => w.url === photoUrl,
                  );
                  if (!wallpaper) return;

                  // Get the raw path without any URL prefixes

                  debouncedSetProject(wallpaper.rawPath);
                } catch (err) {
                  toast.error("Failed to set wallpaper");
                }
              }}
              class="grid grid-cols-7 gap-2 h-auto"
            >
              <Show
                when={!wallpapers.loading}
                fallback={
                  <div class="flex col-span-7 justify-center items-center h-32 text-gray-11">
                    <div class="flex flex-col gap-2 items-center">
                      <div class="w-6 h-6 rounded-full border-2 animate-spin border-gray-5 border-t-blue-400" />
                      <span>Loading wallpapers...</span>
                    </div>
                  </div>
                }
              >
                <For each={filteredWallpapers().slice(0, 21)}>
                  {(photo) => (
                    <KRadioGroup.Item
                      value={photo.url!}
                      class="relative aspect-square group"
                    >
                      <KRadioGroup.ItemInput class="peer" />
                      <KRadioGroup.ItemControl class="overflow-hidden w-full h-full rounded-lg transition cursor-pointer ui-not-checked:ring-offset-1 ui-not-checked:ring-offset-gray-200 ui-not-checked:hover:ring-1 ui-not-checked:hover:ring-gray-400 ui-checked:ring-2 ui-checked:ring-gray-500 ui-checked:ring-offset-2 ui-checked:ring-offset-gray-200">
                        <img
                          src={photo.url!}
                          loading="eager"
                          class="object-cover w-full h-full"
                          alt="Wallpaper option"
                        />
                      </KRadioGroup.ItemControl>
                    </KRadioGroup.Item>
                  )}
                </For>
                <Collapsible class="col-span-7">
                  <Collapsible.Content class="animate-in slide-in-from-top-2 fade-in">
                    <div class="grid grid-cols-7 gap-2">
                      <For each={filteredWallpapers()}>
                        {(photo) => (
                          <KRadioGroup.Item
                            value={photo.url!}
                            class="relative aspect-square group"
                          >
                            <KRadioGroup.ItemInput class="peer" />
                            <KRadioGroup.ItemControl class="overflow-hidden w-full h-full rounded-lg border cursor-pointer border-gray-5 ui-checked:border-blue-9 ui-checked:ring-2 ui-checked:ring-blue-9 peer-focus-visible:border-2 peer-focus-visible:border-blue-9">
                              <img
                                src={photo.url!}
                                alt="Wallpaper option"
                                class="object-cover w-full h-full"
                                loading="lazy"
                              />
                            </KRadioGroup.ItemControl>
                          </KRadioGroup.Item>
                        )}
                      </For>
                    </div>
                  </Collapsible.Content>
                </Collapsible>
              </Show>
            </KRadioGroup>
          </KTabs.Content>
          <KTabs.Content value="image">
            <Show
              when={
                project.background.source.type === "image" &&
                project.background.source.path
              }
              fallback={
                <button
                  type="button"
                  onClick={() => fileInput.click()}
                  class="p-6 bg-gray-2 text-[13px] w-full rounded-[0.5rem] border border-gray-5 border-dashed flex flex-col items-center justify-center gap-[0.5rem] hover:bg-gray-3 transition-colors duration-100"
                >
                  <IconCapImage class="text-gray-11 size-6" />
                  <span class="text-gray-12">
                    Click to select or drag and drop image
                  </span>
                </button>
              }
            >
              {(source) => (
                <div class="overflow-hidden relative w-full h-48 rounded-md border border-gray-3 group">
                  <img
                    src={convertFileSrc(source())}
                    class="object-cover w-full h-full"
                    alt="Selected background"
                  />
                  <div class="absolute top-2 right-2">
                    <button
                      type="button"
                      onClick={() =>
                        setProject("background", "source", {
                          type: "image",
                          path: null,
                        })
                      }
                      class="p-2 text-white rounded-full transition-colors bg-black/50 hover:bg-black/70"
                    >
                      <IconCapCircleX class="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </Show>
            <input
              type="file"
              ref={fileInput}
              class="hidden"
              accept="image/apng, image/avif, image/jpeg, image/png, image/webp"
              onChange={async (e) => {
                const file = e.currentTarget.files?.[0];
                if (!file) return;

                /*
                    this is a Tauri bug in WebKit so we need to validate the file type manually
                    https://github.com/tauri-apps/tauri/issues/9158
                    */
                const validExtensions = [
                  "jpg",
                  "jpeg",
                  "png",
                  "gif",
                  "webp",
                  "bmp",
                ];
                const extension = file.name.split(".").pop()?.toLowerCase();
                if (!extension || !validExtensions.includes(extension)) {
                  toast.error("Invalid image file type");
                  return;
                }

                try {
                  const fileName = `bg-${Date.now()}-${file.name}`;
                  const arrayBuffer = await file.arrayBuffer();
                  const uint8Array = new Uint8Array(arrayBuffer);

                  const fullPath = `${await appDataDir()}/${fileName}`;

                  await writeFile(fileName, uint8Array, {
                    baseDir: BaseDirectory.AppData,
                  });

                  setProject("background", "source", {
                    type: "image",
                    path: fullPath,
                  });
                } catch (err) {
                  toast.error("Failed to save image");
                }
              }}
            />
          </KTabs.Content>
          <KTabs.Content value="color">
            <Show
              when={
                project.background.source.type === "color" &&
                project.background.source
              }
            >
              <div class="flex flex-col flex-wrap gap-3">
                <div class="flex flex-row items-center w-full h-10">
                  <RgbInput
                    value={
                      project.background.source.type === "color"
                        ? project.background.source.value
                        : [0, 0, 0]
                    }
                    onChange={(value) => {
                      setProject("background", "source", {
                        type: "color",
                        value,
                      });
                    }}
                  />
                </div>

                <div class="flex flex-wrap gap-2">
                  <For each={BACKGROUND_COLORS}>
                    {(color) => (
                      <label class="relative">
                        <input
                          type="radio"
                          class="sr-only peer"
                          name="colorPicker"
                          onChange={(e) => {
                            if (e.target.checked) {
                              backgrounds.color = {
                                type: "color",
                                value: hexToRgb(color) ?? [0, 0, 0],
                              };
                              setProject(
                                "background",
                                "source",
                                backgrounds.color,
                              );
                            }
                          }}
                        />
                        <div
                          class="rounded-lg transition-all duration-200 cursor-pointer size-8 peer-checked:hover:opacity-100 peer-hover:opacity-70 peer-checked:ring-2 peer-checked:ring-gray-500 peer-checked:ring-offset-2 peer-checked:ring-offset-gray-200"
                          style={{ "background-color": color }}
                        />
                      </label>
                    )}
                  </For>
                </div>
                {/* <Tooltip content="Add custom color">
                      <button
                        class="flex justify-center items-center w-6 h-6 rounded-lg border border-gray-400 border-dashed text-gray-12 hover:border-gray-500"
                        onClick={() => {
                          // Function to add a new color (you can modify this)
                          console.log(
                            "Open color picker or modal to add a color"
                          );
                        }}
                      >
                        +
                      </button>
                    </Tooltip> */}
              </div>
            </Show>
          </KTabs.Content>
          <KTabs.Content value="gradient" class="flex flex-row justify-between">
            <Show
              when={
                project.background.source.type === "gradient" &&
                project.background.source
              }
            >
              {(source) => {
                const max = 360;

                const { projectHistory } = useEditorContext();

                const angle = () => source().angle ?? 90;

                return (
                  <>
                    <div class="flex flex-col gap-3">
                      <div class="flex gap-5 h-10">
                        <RgbInput
                          value={source().from}
                          onChange={(from) => {
                            backgrounds.gradient.from = from;
                            setProject("background", "source", {
                              type: "gradient",
                              from,
                            });
                          }}
                        />
                        <RgbInput
                          value={source().to}
                          onChange={(to) => {
                            backgrounds.gradient.to = to;
                            setProject("background", "source", {
                              type: "gradient",
                              to,
                            });
                          }}
                        />
                        <div
                          class="flex relative flex-col items-center p-1 ml-auto rounded-full border bg-gray-1 border-gray-3 size-10 cursor-ns-resize shrink-0"
                          style={{ transform: `rotate(${angle()}deg)` }}
                          onMouseDown={(downEvent) => {
                            const start = angle();
                            const resumeHistory = projectHistory.pause();

                            createRoot((dispose) =>
                              createEventListenerMap(window, {
                                mouseup: () => {
                                  dispose();
                                  resumeHistory();
                                },
                                mousemove: (moveEvent) => {
                                  const rawNewAngle =
                                    Math.round(
                                      start +
                                        (downEvent.clientY - moveEvent.clientY),
                                    ) % max;
                                  const newAngle = moveEvent.shiftKey
                                    ? rawNewAngle
                                    : Math.round(rawNewAngle / 45) * 45;

                                  if (
                                    !moveEvent.shiftKey &&
                                    hapticsEnabled() &&
                                    project.background.source.type ===
                                      "gradient" &&
                                    project.background.source.angle !== newAngle
                                  ) {
                                    commands.performHapticFeedback(
                                      "Alignment",
                                      "Now",
                                    );
                                  }

                                  setProject("background", "source", {
                                    type: "gradient",
                                    angle:
                                      newAngle < 0 ? newAngle + max : newAngle,
                                  });
                                },
                              }),
                            );
                          }}
                        >
                          <div class="bg-blue-9 rounded-full size-1.5" />
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <For each={BACKGROUND_GRADIENTS}>
                          {(gradient) => (
                            <label class="relative">
                              <input
                                type="radio"
                                class="sr-only peer"
                                name="colorPicker"
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    backgrounds.gradient = {
                                      type: "gradient",
                                      from: gradient.from,
                                      to: gradient.to,
                                    };
                                    setProject(
                                      "background",
                                      "source",
                                      backgrounds.gradient,
                                    );
                                  }
                                }}
                              />
                              <div
                                class="rounded-lg transition-all duration-200 cursor-pointer size-8 peer-checked:hover:opacity-100 peer-hover:opacity-70 peer-checked:ring-2 peer-checked:ring-gray-500 peer-checked:ring-offset-2 peer-checked:ring-offset-gray-200"
                                style={{
                                  background: `linear-gradient(${angle()}deg, rgb(${gradient.from.join(
                                    ",",
                                  )}), rgb(${gradient.to.join(",")}))`,
                                }}
                              />
                            </label>
                          )}
                        </For>
                      </div>
                    </div>
                  </>
                );
              }}
            </Show>
          </KTabs.Content>
        </KTabs>
      </Field>

      <Field name="Background Blur" icon={<IconCapBgBlur />}>
        <Slider
          value={[project.background.blur]}
          onChange={(v) => setProject("background", "blur", v[0])}
          minValue={0}
          maxValue={100}
          step={0.1}
          formatTooltip="%"
        />
      </Field>
      {/** Dashed divider */}
      <div class="w-full border-t border-gray-300 border-dashed" />
      <Field name="Padding" icon={<IconCapPadding class="size-4" />}>
        <Slider
          value={[project.background.padding]}
          onChange={(v) => setProject("background", "padding", v[0])}
          minValue={0}
          maxValue={40}
          step={0.1}
          formatTooltip="%"
        />
      </Field>
      <Field name="Rounded Corners" icon={<IconCapCorners class="size-4" />}>
        <Slider
          value={[project.background.rounding]}
          onChange={(v) => setProject("background", "rounding", v[0])}
          minValue={0}
          maxValue={100}
          step={0.1}
          formatTooltip="%"
        />
      </Field>
      <Field name="Shadow" icon={<IconCapShadow class="size-4" />}>
        <Slider
          value={[project.background.shadow!]}
          onChange={(v) => {
            batch(() => {
              setProject("background", "shadow", v[0]);
              // Initialize advanced shadow settings if they don't exist and shadow is enabled
              if (v[0] > 0 && !project.background.advancedShadow) {
                setProject("background", "advancedShadow", {
                  size: 50,
                  opacity: 18,
                  blur: 50,
                });
              }
            });
          }}
          minValue={0}
          maxValue={100}
          step={0.1}
          formatTooltip="%"
        />
        <ShadowSettings
          scrollRef={props.scrollRef}
          size={{
            value: [project.background.advancedShadow?.size ?? 50],
            onChange: (v) => {
              setProject("background", "advancedShadow", {
                ...(project.background.advancedShadow ?? {
                  size: 50,
                  opacity: 18,
                  blur: 50,
                }),
                size: v[0],
              });
            },
          }}
          opacity={{
            value: [project.background.advancedShadow?.opacity ?? 18],
            onChange: (v) => {
              setProject("background", "advancedShadow", {
                ...(project.background.advancedShadow ?? {
                  size: 50,
                  opacity: 18,
                  blur: 50,
                }),
                opacity: v[0],
              });
            },
          }}
          blur={{
            value: [project.background.advancedShadow?.blur ?? 50],
            onChange: (v) => {
              setProject("background", "advancedShadow", {
                ...(project.background.advancedShadow ?? {
                  size: 50,
                  opacity: 18,
                  blur: 50,
                }),
                blur: v[0],
              });
            },
          }}
        />
      </Field>
      {/* <ComingSoonTooltip>
            <Field name="Inset" icon={<IconCapInset />}>
              <Slider
                disabled
                value={[project.background.inset]}
                onChange={(v) => setProject("background", "inset", v[0])}
                minValue={0}
                maxValue={100}
              />
            </Field>
          </ComingSoonTooltip> */}
    </KTabs.Content>
  );
}


function RgbInput(props: {
  value: [number, number, number];
  onChange: (value: [number, number, number]) => void;
}) {
  const [text, setText] = createWritableMemo(() => rgbToHex(props.value));
  let prevHex = rgbToHex(props.value);

  let colorInput!: HTMLInputElement;

  return (
    <div class="flex flex-row items-center gap-[0.75rem] relative">
      <button
        type="button"
        class="size-[2rem] rounded-[0.5rem]"
        style={{
          "background-color": rgbToHex(props.value),
        }}
        onClick={() => colorInput.click()}
      />
      <input
        ref={colorInput}
        type="color"
        class="absolute left-0 bottom-0 w-[3rem] opacity-0"
        onChange={(e) => {
          const value = hexToRgb(e.target.value);
          if (value) props.onChange(value);
        }}
      />
      <TextInput
        class="w-[4.60rem] p-[0.375rem] text-gray-12 text-[13px] border rounded-[0.5rem] bg-gray-1 outline-none focus:ring-1 transition-shadows duration-200 focus:ring-gray-500 focus:ring-offset-1 focus:ring-offset-gray-200"
        value={text()}
        onFocus={() => {
          prevHex = rgbToHex(props.value);
        }}
        onInput={(e) => {
          setText(e.currentTarget.value);

          const value = hexToRgb(e.target.value);
          if (value) props.onChange(value);
        }}
        onBlur={(e) => {
          const value = hexToRgb(e.target.value);
          if (value) props.onChange(value);
          else {
            setText(prevHex);
            props.onChange(hexToRgb(text())!);
          }
        }}
      />
    </div>
  );
}

function rgbToHex(rgb: [number, number, number]) {
  return `#${rgb
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

function hexToRgb(hex: string): [number, number, number] | null {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return null;
  return match.slice(1).map((c) => Number.parseInt(c, 16)) as any;
}
