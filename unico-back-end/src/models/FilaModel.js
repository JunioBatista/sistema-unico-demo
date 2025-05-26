
import  { initDatabase } from '../config/dataBase.js'


export default async function createFilaTable() {
  const db = await initDatabase();

  db.exec(`
    CREATE TABLE IF NOT EXISTS filas (
      id TEXT PRIMARY KEY,
      name TEXT,
      instance TEXT,
      checkup_date TEXT
    )`);
  console.log('Tabela "filas" verificada/criada.');
}


export async function createFila( id, name, instance, checkup_date) {
  const db = await initDatabase();

  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO filas (id, name, instance, checkup_date) VALUES (?, ?, ?, ?)`;
    db.run(sql, [id, name, instance, checkup_date], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}


export async function readFila( id = null) {
  const db = await initDatabase();

  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM filas`;
    let params = [];

    const method = db.all.bind(db);

    method(sql, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}


export async function updateFila(id, updates) {
  const db = await initDatabase();
  return new Promise((resolve, reject) => {
    const setParts = [];
    const params = [];

    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        setParts.push(`${key} = ?`);
        params.push(updates[key]);
      }
    }

    params.push(id);

    const sql = `UPDATE filas SET ${setParts.join(', ')} WHERE id = ?`;

    db.run(sql, params, function(err) {
      if (err) {
        reject(err);
      } else if (this.changes === 0) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}


export async function deleteFila(id) {
  const db = await initDatabase();
  
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM filas WHERE id = ?`;
    db.run(sql, [id], function(err) {
      if (err) {
        reject(err);
      } else if (this.changes === 0) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}