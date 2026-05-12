const express = require("express");
const router = express.Router();
const db = require("../db");

//CREATE APPOINTMENT
router.post("/", (req, res) => {

    const {
        customer_name,
        service_requested,
        date_time
    } = req.body;

    //Validation
    if (!customer_name || !service_requested || !date_time) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }

    const sql = `
        INSERT INTO appointments
        (customer_name, service_requested,date_time)
        VALUES (?, ?, ?)
    `;

    db.run(
        sql,
        [customer_name, service_requested,date_time],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }
        

            res.status(201).json({
                message: "Appointment created",
                appointmentId: this.lastID
            });
        }
    );
});


//GET ALL APPOINTMENTS
router.get("/", (req, res) => {

    const sql = `SELECT * FROM appointments`;

    db.all(sql, [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(rows);
    });
});

//UPDATE STATUS
router.patch("/:id", (req, res) => {

    const { id } = req.params;

    const sql = `
        UPDATE appointments
        SET status = 'Confirmed'
        WHERE id = ?
    `;

    db.run(sql, [id], function(err) {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json({
            message: "Appointment confirmed"
        });
    });
});

module.exports = router;