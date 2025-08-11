"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Editor() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <>
      <p>Editing recording ID: {id}</p>
      <div className="mt-4 p-8 border rounded-lg bg-gray-100">
        <p className="text-center text-gray-500">
          Editor functionality will be implemented here.
        </p>
      </div>
    </>
  );
}

export default function EditorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Editor</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Editor />
      </Suspense>
    </div>
  );
}
