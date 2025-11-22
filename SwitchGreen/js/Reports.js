/**
 * Reports Page JavaScript
 */

// Download report function
function downloadReport(reportId) {
    console.log('📥 Downloading report:', reportId);
    alert('Report download initiated: ' + reportId + '.pdf');
    
    // In production, this would trigger actual download
    // window.open(`/reports/${reportId}.pdf`, '_blank');
}

// Export data function
function exportData(format) {
    console.log('📤 Exporting data as:', format);
    
    const data = getOfficialMNREData();
    
    if (format === 'json') {
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `india-renewable-energy-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        alert('JSON file downloaded!');
    } else if (format === 'csv') {
        let csv = 'State,Solar (MW),Wind (MW),Hydro (MW),Biomass (MW),Total (MW)\n';
        data.topStates.forEach(state => {
            csv += `${state.name},${state.solar},${state.wind},${state.hydro},${state.biomass},${state.total}\n`;
        });
        const csvBlob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(csvBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `india-renewable-energy-${new Date().toISOString().split('T')[0]}.csv`;
        link.click();
        alert('CSV file downloaded!');
    } else {
        alert('Excel export feature coming soon!');
    }
}

console.log('📄 Reports.js loaded');
