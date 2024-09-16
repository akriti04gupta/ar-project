function uploadScan() {
    const uploadCard = document.getElementById('uploadSection');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const toolsSection = document.getElementById('toolsSection');

    // Show spinner and simulate a delay for uploading
    loadingSpinner.style.display = 'block';

    // Simulate file upload delay
    setTimeout(() => {
        // Hide the upload section and spinner
        uploadCard.style.display = 'none';
        loadingSpinner.style.display = 'none';

        // Show the analysis tools section
        toolsSection.style.display = 'flex';
    }, 2000); // 2 second delay to simulate upload time
}
