
import  { getDb } from '../../database.db'


export default async function createFilaTable() {
  const db = getDb();

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
  const db = getDb();

  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO filas (id, name, instance, checkup_date) VALUES (?, ?, ?, ?)`;
    db.run(sql, [id, name, instance, checkup_date], function(err) {
      if (err) {
        console.error('Erro ao criar fila:', err.message);
        reject(err);
      } else {
        console.log(`Fila "${name}" (ID: ${id}) criada.`);
        resolve(true);
      }
    });
  });
}


export async function readFila(db, id = null) {
  const db = getDb();

  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM filas`;
    let params = [];

    const method = db.all.bind(db);

    method(sql, params, (err, result) => {
      if (err) {
        console.error('Erro ao ler fila(s):', err.message);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}


export async function updateFila(db, id, updates) {
  const db = getDb();
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
        console.error('Erro ao atualizar fila:', err.message);
        reject(err);
      } else if (this.changes === 0) {
        console.log(`Nenhuma fila encontrada com ID ${id} para atualização.`);
        resolve(false);
      } else {
        console.log(`Fila com ID ${id} atualizada. Número de linhas afetadas: ${this.changes}`);
        resolve(true);
      }
    });
  });
}


export async function deleteFila(db, id) {
  const db = getDb();
  
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM filas WHERE id = ?`;
    db.run(sql, [id], function(err) {
      if (err) {
        console.error('Erro ao deletar fila:', err.message);
        reject(err);
      } else if (this.changes === 0) {
        console.log(`Nenhuma fila encontrada com ID ${id} para deletar.`);
        resolve(false);
      } else {
        console.log(`Fila com ID ${id} deletada. Número de linhas afetadas: ${this.changes}`);
        resolve(true);
      }
    });
  });
}