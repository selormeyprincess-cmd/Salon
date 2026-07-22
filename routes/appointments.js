/*const express = require("express");
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
09b7419 (initial salon project)
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
//GET ALL
router.get("/", (req, res) => {
    db.all("SELECT * FROM appointments", [], (err, rows) => {
        if (err) {
            return res.status(500).json(err);
09b7419 (initial salon project)
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
09b7419 (initial salon project)
});

module.exports = router;
*/

const express = require("express");
const router = express.Router();

//Define your appointment routes here
router.get("/", (req, res) => {
    res.json({ message: "Appointments route working"});
});

module.exports = router;