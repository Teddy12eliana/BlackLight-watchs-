<script>
  async function fetchAlerts() {
    try {
      const response = await fetch("https://teddy12eliana-2.onrender.com/status-api");
      if (!response.ok) {
        throw new Error("Failed to fetch alerts");
      }
      const data = await response.json();

      // Example: Show alerts in console or on your page
      console.log("Live Alerts:", data);
      document.getElementById("alerts").innerText = JSON.stringify(data, null, 2);

    } catch (error) {
      console.error("Error fetching alerts:", error);
      document.getElementById("alerts").innerText = "⚠️ Unable to fetch live alerts.";
    }
  }

  // Call it on page load
  window.onload = fetchAlerts;
</script>
