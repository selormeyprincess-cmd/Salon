const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
const appointmentRoutes = require("./routes/appointments");

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/appointments", appointmentRoutes);

//TEST ROUTE
app.get("/", (req, res) => {
    res.send("Salon Booking API Running");
});

//SERVER
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
=======
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

let appointments = [];

app.post("/api/appointments", (req, res) => {
    const appointment = req.body;
    appointments.push(req.body);

    res.json({
        message: "Appointment saved succesfully"
    });
});

app.get("/api/appointments", (req, res) => {
    res.json(appointments);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
>>>>>>> 09b7419 (initial salon project)
});