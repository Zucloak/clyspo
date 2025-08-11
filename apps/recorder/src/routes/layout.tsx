import type { ParentProps } from "solid-js";

export default function Layout(props: ParentProps) {
  return (
    <div class="flex flex-col h-screen">
      <header class="flex items-center justify-between p-4 border-b border-gray-3">
        <h1 class="text-xl font-bold">Cap Recorder</h1>
      </header>
      <main class="flex-1 overflow-y-auto p-4">{props.children}</main>
    </div>
  );
}
