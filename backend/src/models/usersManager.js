const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  connectedUserByEmail(email) {
    console.info(email);
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ]);
  }

  insert(users) {
    return this.database.query(
      `INSERT INTO ${this.table} (pseudo, password, email) VALUES (?, ?, ?)`,
      [users.pseudo, users.password, users.email]
    );
  }

  update(users) {
    return this.database.query(
      `UPDATE ${this.table} SET pseudo = ?, password = ?, email = ?, update_date= CURRENT_DATE WHERE id = ?`,
      [users.pseudo, users.password, users.email]
    );
  }
}

module.exports = UsersManager;
