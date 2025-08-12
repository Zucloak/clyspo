import { JSX } from "solid-js";

const iconUrl = (name: string) =>
  new URL(`../../../../packages/ui-solid/icons/${name}.svg`, import.meta.url)
    .href;

const Icon = (props: { name: string } & JSX.HTMLAttributes<HTMLImageElement>) => (
  <img src={iconUrl(props.name)} {...props} />
);

export const IconCapFile = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="file" {...props} />
);
export const IconCapCopy = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="copy" {...props} />
);
export const IconCapLink = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="link" {...props} />
);
export const IconCapChevronDown = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="chevron-down" {...props} />;
export const IconCapCircleX = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="circle-x" {...props} />
);
export const IconCapCamera = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="camera" {...props} />
);
export const IconCapStopwatch = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="stopwatch" {...props} />;
export const IconCapDownload = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="download" {...props} />
);
export const IconCapRecordings = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="recordings" {...props} />;
export const IconCapCheck = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="check" {...props} />
);
export const IconCapStopCircle = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="stop-circle" {...props} />;
export const IconCapMicrophone = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="microphone" {...props} />;
export const IconCapPlayCircle = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="play-circle" {...props} />;
export const IconCapPauseCircle = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="pause-circle" {...props} />;
export const IconCapRestart = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="restart" {...props} />
);
export const IconCapTrash = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="trash" {...props} />
);
export const IconCapMoreVertical = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="more-vertical" {...props} />;
export const IconCapAudioOff = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="audio-off" {...props} />
);
export const IconCapUpload = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="upload" {...props} />
);
export const IconCapImage = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="image" {...props} />
);
export const IconCapMessageBubble = (
  props: JSX.HTMLAttributes<HTMLImageElement>
) => <Icon name="message-bubble" {...props} />;
export const IconCapBgBlur = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="bg-blur" {...props} />
);
export const IconCapPadding = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="padding" {...props} />
);
export const IconCapCorners = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="corners" {...props} />
);
export const IconCapShadow = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="shadow" {...props} />
);
export const IconCapEnlarge = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="enlarge" {...props} />
);
export const IconCapSettings = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="settings" {...props} />
);
export const IconCapSearchLg = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="search-lg" {...props} />
);
export const IconCapStars = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="stars" {...props} />
);
export const IconCapVideo = (props: JSX.HTMLAttributes<HTMLImageElement>) => (
  <Icon name="video" {...props} />
);
