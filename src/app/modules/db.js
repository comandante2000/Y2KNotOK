import Dexie from "dexie";

export const db = new Dexie('y2knotok');
db.version(1).stores({
    assets: '++id, title, url, blob',
    errors: '++id, desc',
});