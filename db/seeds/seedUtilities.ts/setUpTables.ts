import db from "../../connection";

const setupTables = async () => {
  await db.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE days (
      id SERIAL PRIMARY KEY,
      day VARCHAR(20) UNIQUE NOT NULL CHECK (day IN ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'))
    );

    CREATE TABLE notes (
      id SERIAL PRIMARY KEY,
      userID INT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userID) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE to_do (
      id SERIAL PRIMARY KEY,
      userID INT NOT NULL,
      day_id INT NOT NULL,
      task TEXT NOT NULL,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userID) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (day_id) REFERENCES days(id) ON DELETE CASCADE
    );
  `);
};

export default setupTables;
