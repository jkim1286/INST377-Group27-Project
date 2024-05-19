document.addEventListener('DOMContentLoaded', () => {
    let emissionsChart;  

    document.getElementById('calculateBtn').addEventListener('click', async () => {
        const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const tripsPerDay = daysOfWeek.map(day => Number(document.getElementById(day).value) || 0);
        const emissionsPerDay = await calculateEmissions(tripsPerDay);
        updateChart(emissionsPerDay);
    });

    async function calculateEmissions(tripsPerDay) {
        const emissionsPerDay = [];

        for (let trips of tripsPerDay) {
            const response = await fetch('https://api.climatiq.io/data/v1/estimate', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer MWGFQYA9FDMPAYHYPTYW704YSXAC',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emission_factor: {
                        activity_id: 'passenger_vehicle-vehicle_type_automobile-fuel_source_na-distance_na-engine_size_na',
                        data_version: '^0'
                    },
                    parameters: {
                        distance: trips,
                        distance_unit: 'km'
                    }
                })
            });

            const data = await response.json();
            emissionsPerDay.push(data.co2e);
        }

        return emissionsPerDay;
    }

    function updateChart(emissionsPerDay) {
        const ctx = document.getElementById('emissionsChart').getContext('2d');
        
        if (emissionsChart) {
            emissionsChart.destroy(); 
        }

        emissionsChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'CO2 Emissions (kg)',
                    data: emissionsPerDay,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
