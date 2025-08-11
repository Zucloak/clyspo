import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface CapDBSchema extends DBSchema {
  projects: {
    key: number;
    value: {
      id: number;
      name: string;
      createdAt: number;
    };
    indexes: { 'by-name': string };
  };
  recordings: {
    key: number;
    value: {
      id: number;
      projectId: number;
      video: Blob;
      audio: Blob;
      thumbnail: Blob;
      metadata: Record<string, any>;
      zoomSegments: any[];
      clicks: any[];
      createdAt: number;
    };
    indexes: { 'by-project': number };
  };
}

let db: IDBPDatabase<CapDBSchema>;

export async function initDB() {
  if (db) return db;

  db = await openDB<CapDBSchema>('cap-recorder-db', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('projects')) {
        const projectsStore = db.createObjectStore('projects', {
          keyPath: 'id',
          autoIncrement: true,
        });
        projectsStore.createIndex('by-name', 'name');
      }

      if (!db.objectStoreNames.contains('recordings')) {
        const recordingsStore = db.createObjectStore('recordings', {
          keyPath: 'id',
          autoIncrement: true,
        });
        recordingsStore.createIndex('by-project', 'projectId');
      }
    },
  });

  return db;
}

export async function getDB() {
  if (!db) {
    return await initDB();
  }
  return db;
}

// Project CRUD
export async function addProject(name: string) {
  const db = await getDB();
  return db.add('projects', { name, createdAt: Date.now() } as any);
}

export async function getProject(id: number) {
  const db = await getDB();
  return db.get('projects', id);
}

export async function getAllProjects() {
  const db = await getDB();
  return db.getAll('projects');
}

export async function updateProject(id: number, updates: Partial<any>) {
  const db = await getDB();
  const project = await db.get('projects', id);
  if (project) {
    Object.assign(project, updates);
    return db.put('projects', project);
  }
  return 0;
}

export async function deleteProject(id: number) {
  const db = await getDB();
  await db.delete('projects', id);
  const recordings = await getRecordingsForProject(id);
  for (const recording of recordings) {
    await db.delete('recordings', recording.id);
  }
}

// Recording CRUD
export async function addRecording(recording: Omit<any, 'id'>) {
    const db = await getDB();
    return db.add('recordings', { ...recording, createdAt: Date.now() } as any);
}

export async function getRecording(id: number) {
    const db = await getDB();
    return db.get('recordings', id);
}

export async function getRecordingsForProject(projectId: number) {
    const db = await getDB();
    return db.getAllFromIndex('recordings', 'by-project', projectId);
}

export async function updateRecording(id: number, updates: Partial<any>) {
    const db = await getDB();
    const recording = await db.get('recordings', id);
    if (recording) {
        Object.assign(recording, updates);
        return db.put('recordings', recording);
    }
    return 0;
}

export async function deleteRecording(id: number) {
    const db = await getDB();
    await db.delete('recordings', id);
}

export async function getAllRecordings() {
    const db = await getDB();
    return db.getAll('recordings');
}
