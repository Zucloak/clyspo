type Click = {
  timestamp: number;
  x: number;
  y: number;
};

type ZoomSegment = {
  start: number;
  end: number;
  amount: number;
  mode: {
    manual: {
      x: number;
      y: number;
    };
  };
};

export function generateZoomSegments(clicks: Click[], videoDuration: number): ZoomSegment[] {
  const zoomSegments: ZoomSegment[] = [];
  for (const click of clicks) {
    const startTime = (click.timestamp - clicks[0].timestamp) / 1000;
    const endTime = Math.min(startTime + 2, videoDuration);
    zoomSegments.push({
      start: startTime,
      end: endTime,
      amount: 1.5,
      mode: {
        manual: {
          x: click.x,
          y: click.y,
        },
      },
    });
  }
  return zoomSegments;
}
