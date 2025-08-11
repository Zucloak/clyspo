export async function saveVideoToFile(videoBlob: Blob, suggestedName: string) {
  try {
    const handle = await window.showSaveFilePicker({
      suggestedName,
      types: [
        {
          description: "Video file",
          accept: {
            "video/mp4": [".mp4"],
          },
        },
      ],
    });
    const writable = await handle.createWritable();
    await writable.write(videoBlob);
    await writable.close();
    return handle;
  } catch (error) {
    if (error.name === "AbortError") {
      // User cancelled the save dialog
      return null;
    }
    console.error("Error saving file:", error);
    throw error;
  }
}
