// CSV import/export functions

/**
 * Import CSV data from a file
 * @param {File} file - The CSV file to import
 * @returns {Array} - Array of objects representing the CSV rows
 */
function importCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const text = event.target.result;
            const data = text.split('\n').map(row => row.split(','));
            const headers = data[0];
            const rows = data.slice(1).map(row => {
                return headers.reduce((acc, header, index) => { 
                    acc[header] = row[index];
                    return acc;
                }, {});
            });
            resolve(rows);
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

/**
 * Export data to CSV format
 * @param {Array} data - Array of objects to export
 * @param {String} filename - The filename for the exported CSV
 */
function exportCSV(data, filename) {
    const csvContent = "data:text/csv;charset=utf-8,"
        + data.map(row => Object.values(row).join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}