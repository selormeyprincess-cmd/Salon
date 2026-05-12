const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/salon.db", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Connected to SQLite database.");
    }
});

//CREATE TABLE
db.run(`
CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT NOT NULL,
    service_requested TEXT NOT NULL,
    date_time TEXT NOT NULL,
    status TEXT DEFAULT 'Pending'
)
`);

module.exports = db;