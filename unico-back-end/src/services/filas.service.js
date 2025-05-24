export const createFila = async (db, userData) => {
  await db.run('INSERT INTO users (id, name, email) VALUES (?, ?, ?)', ['1', userData.name, userData.email]);
  return { id, ...userData };
};

export const getAllFilas = async (db) => {
  return db.all('SELECT * FROM users');
};