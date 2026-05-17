console.log("ADMIN JS IS RUNNING");

async function loadAppointments() {
  const container = document.getElementById("appointments");

  console.log("Container found:", container);

  try {
    const res = await fetch("<http://localhost:5000/admin.html>");
    const data = await res.json();

    console.log("RAW DATA:", JSON.stringify(data, null, 2));

    container.innerHTML = "";

    if (data.lenght === 0) {
        container.innerHTML = "<p>No appointments yet</p>";
        return;
    }

    for (let i = 0; i < data.length; i++) {
        const item = data[i];

        console.log("Rendering:", item);

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

    console.log("RENDER COMPLETE");

  } catch (err) {
    console.log("ERROR:", err);
  }
}

loadAppointments();

        
