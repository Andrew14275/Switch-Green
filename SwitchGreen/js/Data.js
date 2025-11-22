/**
 * Data Dashboard JavaScript
 * Simplified version without complex animations
 */

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    console.log('📊 Initializing Dashboard...');
    
    // Create charts
    createEnergyMixChart();
    createStatesChart();
    
    console.log('✅ Dashboard loaded');
});

// Energy Mix Doughnut Chart
function createEnergyMixChart() {
    const canvas = document.getElementById('mixChart');
    if (!canvas) return;
    
    const data = getOfficialMNREData();
    
    new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: ['Solar', 'Wind', 'Small Hydro', 'Biomass'],
            datasets: [{
                data: [
                    data.totals.totalSolar / 1000,
                    data.totals.totalWind / 1000,
                    data.totals.totalHydro / 1000,
                    data.totals.totalBiomass / 1000
                ],
                backgroundColor: ['#f59e0b', '#3b82f6', '#06b6d4', '#84cc16'],
                borderWidth: 3,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: { size: 13, weight: '600' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${value.toFixed(2)} GW (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Top States Horizontal Bar Chart
function createStatesChart() {
    const canvas = document.getElementById('statesChart');
    if (!canvas) return;
    
    const data = getOfficialMNREData();
    const top10 = data.topStates.slice(0, 10);
    
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: top10.map(s => s.name),
            datasets: [
                {
                    label: 'Solar',
                    data: top10.map(s => s.solar / 1000),
                    backgroundColor: '#f59e0b'
                },
                {
                    label: 'Wind',
                    data: top10.map(s => s.wind / 1000),
                    backgroundColor: '#3b82f6'
                },
                {
                    label: 'Hydro',
                    data: top10.map(s => s.hydro / 1000),
                    backgroundColor: '#06b6d4'
                },
                {
                    label: 'Biomass',
                    data: top10.map(s => s.biomass / 1000),
                    backgroundColor: '#84cc16'
                }
            ]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Capacity (GW)'
                    }
                },
                y: {
                    stacked: true
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

console.log('📄 Data.js loaded');
