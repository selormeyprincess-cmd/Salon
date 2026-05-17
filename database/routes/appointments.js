const express = require("express");
const router = express.Router();
const db = require("../db");

//CREATE
router.post("/", (req, res) => {
    const { customer_name, service_requested, date_time } = req.body;

    db.run(
        `
        INSERT INTO appointments
        (customer_name, service_requested, date_time)
        VALUES (?, ?, ?)
        `,
        [customer_name, service_requested, date_time],
        function (err) {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Appointment created",
                id: this.lastID,
            });
        }
    );
});

//GET ALL
router.get("/", (req, res) => {
    db.all("SELECT * FROM appointments", [], (err, rows) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(rows);
    });
});

//UPDATE STATUS
router.patch("/:id", (req, res) => {
    const { id } = req.params;

    db.run(
        `
        UPDATE appointments
        SET status='Confirmed'
        WHERE id=?
        `,
        [id],
        function (err) {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Appointment confirmed",
            });
        }
    );
});

module.exports = router;