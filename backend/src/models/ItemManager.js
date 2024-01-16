const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  insert(item) {
    return this.database.query(
      `INSERT INTO ${this.table} (title, description) VALUES (?, ?)`,
      [item.title, item.description
    ]);
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = ItemManager;
