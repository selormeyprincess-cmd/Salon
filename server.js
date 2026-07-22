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

//SERVER
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
