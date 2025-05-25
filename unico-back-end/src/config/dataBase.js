import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import createFilaTable from '../models/FilaModel.js'

export const initDatabase = async () => {
  return open({
    filename: './database.db',
    driver: sqlite3.Database
  }).then(
    (db)=> createFilaTable(db)
  );
};

