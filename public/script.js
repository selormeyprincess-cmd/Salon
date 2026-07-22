document.getElementById("form").addEventListener("submit", async function(e) {
    e.preventDefault();

     document.getElementById("message").innerText = "";

const data = {
        customer_name: document.getElementById("name").value,
        service_requested: document.getElementById("service").value,
        date_time: document.getElementById("time").value,
    };
    try{
    const res = await fetch("https://salon-backend-x518.onrender.com/api/appointments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });

        const result = await res.json();

        if (res.ok) {
            document.getElementById("message").innerText = "Appointment booked successfuly!";
            e.target.reset();
        } else {
            document.getElementById("message").innerText = "Something went wrong.";
        }
      } catch (err) {
        document.getElementById("message").innerText = "Could not reach the server.";
        console.error(err);
      }
    });
