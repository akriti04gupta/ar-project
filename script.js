/* function uploadScan() {
    const uploadCard = document.getElementById('uploadSection');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const toolsSection = document.getElementById('toolsSection');

    
    loadingSpinner.style.display = 'block';

    
    setTimeout(() => {
        
        uploadCard.style.display = 'none';
        loadingSpinner.style.display = 'none';

        
        toolsSection.style.display = 'flex';
    }, 2000); 
}
    */
function validateUpload() {
    const fileInput = document.getElementById('fileInput');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const uploadSection = document.getElementById('uploadSection');
    const toolsSection = document.getElementById('toolsSection');

    if (fileInput.files.length === 0) {
        alert('Please select a file to upload.');
        return;
    }

    // Show loading spinner
    loadingSpinner.style.display = 'block';

    // Simulate a file upload delay and process
    setTimeout(() => {
        // Hide the upload card and spinner
        uploadSection.style.display = 'none';
        loadingSpinner.style.display = 'none';

        // Show the analysis tools with tabs
        toolsSection.style.display = 'block';
    }, 2000); // Simulate 2 seconds delay
}

// Tab functionality
function openTab(event, tabName) {
    const tabContent = document.getElementsByClassName('tab-content');
    const tabButtons = document.getElementsByClassName('tab-button');

    // Hide all tab contents
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    // Remove active class from all tab buttons
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show the clicked tab content and add active class to the button
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}
