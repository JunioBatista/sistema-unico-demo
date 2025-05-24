export default (db) => {
    db.exec(`CREATE TABLE IF NOT EXISTS users (
      id TEXT ,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )`);
  };