import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

export const initDatabase = async () => {
  return open({
    filename: path.resolve('src', 'config', 'database.sqlite'),
    driver: sqlite3.Database
  });
};

