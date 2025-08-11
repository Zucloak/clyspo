export function generateZoomSegments(clicks: any[], videoDuration: number) {
  const zoomSegments: any[] = [];
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
