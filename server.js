const express = require("express");
const cors = require("cors");

const appointmentRoutes = require("./routes/appointments");

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//ROUTES
app.use("/api/appointments", appointmentRoutes);

//TEST ROUTE
app.get("/", (req, res) => {
    res.send("Salon Booking API Running");
});

//APPOINTMENT ENDPOINTS
let appointments = [];

app.post("/api/appointments", (req, res) => {
    const appointment = req.body;
    appointments.push(req.body);

    res.json({
        message: "Appointment saved successfully"
    });
});

app.get("/api/appointments", (req, res) => {
    res.json(appointments);
});

//SERVER
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
