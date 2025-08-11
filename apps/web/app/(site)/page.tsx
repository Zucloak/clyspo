"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllRecordings, initDB } from "~/utils/db";

export default function RecordingsPage() {
  const [recordings, setRecordings] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRecordings() {
      await initDB();
      const allRecordings = await getAllRecordings();
      setRecordings(allRecordings);
    }
    fetchRecordings();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Recordings</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Recording
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recordings.map((recording) => (
          <Link
            href={`/editor?id=${recording.id}`}
            key={recording.id}
            className="border rounded-lg p-4 hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold mb-2">
              Recording #{recording.id}
            </h2>
            <p className="text-sm text-gray-500">
              {new Date(recording.createdAt).toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
