document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        customer_name: document.getElementById("name").value,
        service_requested: document.getElementById("service").value,
        date_time: document.getElementById("time").value,
    };

    const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data),
        });

        const result = await res.json();

        if (res.ok) {
            document.getElementById("message").innerText =
              "Appointment booked successfully!";
        } else {
            document.getElementById("message").innerText =
              "Something went wrong!";
        }
    });
