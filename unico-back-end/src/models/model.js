
import  { initDatabase } from '../config/dataBase.js'

export default async function createFilaTable() {
  const db = await initDatabase();

  db.exec(`
    CREATE TABLE IF NOT EXISTS filas (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      instance TEXT,
      connected INTEGER,
      connected_date DATETIME,
      chatsOnQueue INTEGER
    )`
  );
  console.log('Tabela "filas" criada.');
}


export const addFilas = async ({db}, filas) => { 

  try {
    let sql = `INSERT OR IGNORE INTO filas (id, name, instance, connected, chatsOnQueue) VALUES `;
    const placeholders = [];
    const values = [];

    filas.forEach((fila) => {
      placeholders.push(`(?, ?, ?, ?, ?)`);
      values.push(fila.id, fila.name, fila.type, fila.connected, fila.chatsOnQueue);
    });

    sql += placeholders.join(', ');

    await new Promise((resolve, reject) => {
      db.run(sql, values, function(err) {
        if (err) return reject(err);
        resolve();
      });
    });

    const listFilaDB = await readFila(db);

    return listFilaDB;

  } catch (error) {
    console.error('Erro ao adicionar filas:', error);
    return { error: 'Erro interno do servidor ao adicionar filas.' }
  }

};


export function readFila(db, id) {
  const sql = id
    ? `SELECT * FROM filas WHERE id = ?`
    : `SELECT * FROM filas`;

  const params = id ? [id] : [];
  console.log(db.db)
  return new Promise((resolve, reject) => {
    const callback = (err, rows) => {
      if (err) {
        console.error('Erro ao buscar filas:', err);
        return reject(err);
      }
      console.log('Resultado da consulta:', rows);
      resolve(rows);
    };

    db.all(sql, params, callback);
  });
}


export async function updateFila(db, id, changes) {

  return new Promise((resolve, reject) => {
    const setParts = [];
    const params = [];

    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        setParts.push(`${key} = ?`);
        params.push(changes[key]);
      }
    }

    params.push(id);
    const sql = `UPDATE filas SET ${setParts.join(', ')} WHERE id = ?`;

    db.run(sql, params, function (err) {
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