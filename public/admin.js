console.log("ADMIN JS IS RUNNING");

async function loadAppointments() {
  const container = document.getElementById("appointments");

  try {
    const res = await fetch("https://salon-backend-x518.onrender.com/api/appointments");
    const data = await res.json();

    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<p>No appointments yet</p>";
        return;
    }

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const div = document.createElement("div");

        div.style.border = "1px solid black";
        div.style.margin = "10px";
        div.style.padding = "10px";

        div.innerHTML = `
          <p><b>Name:</b> ${item.customer_name}</p>
          <p><b>Service:</b> ${item.service_requested}</p>
          <p><b>Date:</b> ${item.date_time}</p>
          <p><b>Status:</b> ${item.status}</p>
        `;

        container.appendChild(div);
    }
  } catch (err) {
    console.log("ERROR:", err);
  }
}

loadAppointments();
