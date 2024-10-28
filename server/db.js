import Database from '@better-sqlite3/better-sqlite3';

const db = new Database('alumni.db');

export function initDB() {
  // Users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Profiles table
  db.exec(`
    CREATE TABLE IF NOT EXISTS profiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      title TEXT,
      company TEXT,
      location TEXT,
      phone TEXT,
      website TEXT,
      linkedin TEXT,
      twitter TEXT,
      bio TEXT,
      avatar_url TEXT,
      FOREIGN KEY (user_id) REFERENCES users (id)
    );
  `);

  // Experience table
  db.exec(`
    CREATE TABLE IF NOT EXISTS experience (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      profile_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      company TEXT NOT NULL,
      duration TEXT NOT NULL,
      description TEXT,
      FOREIGN KEY (profile_id) REFERENCES profiles (id)
    );
  `);

  // Education table
  db.exec(`
    CREATE TABLE IF NOT EXISTS education (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      profile_id INTEGER NOT NULL,
      degree TEXT NOT NULL,
      school TEXT NOT NULL,
      year TEXT NOT NULL,
      FOREIGN KEY (profile_id) REFERENCES profiles (id)
    );
  `);
}

export default db;