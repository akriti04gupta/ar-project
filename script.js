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
    }, 100); // Simulate 2 seconds delay
}

// Tab functionality
/* function openTab(event, tabName) {
    const tabContent = document.getElementsByClassName('tab-content');
    const tabButtons = document.getElementsByClassName('tab-button');

    
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
} */
/*     function openTab(tabName) {
        
        var tabContents = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active");
        }
    
        
        var tabButtons = document.getElementsByClassName("tab-btn");
        for (var i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove("active-tab");
        }
    
        
        document.getElementById(tabName).classList.add("active");
    
        
        event.target.classList.add("active-tab");
    
        
        if (tabName === 'visualization') {
            setTimeout(function() {
                document.getElementById('graph').classList.add('graph-move');
            }, 100); 
        } else {
            
            document.getElementById('graph').classList.remove('graph-move');
        }
    } */
        /* function openTab(event, tabName) {
            
            var tabContents = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabContents.length; i++) {
                tabContents[i].classList.remove("active");
            }
        
            
            var tabButtons = document.getElementsByClassName("tab-btn");
            for (var i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active-tab");
            }
        
            
            document.getElementById(tabName).classList.add("active");
        
            
            event.target.classList.add("active-tab");
        
            
            if (tabName === 'visualization') {
                setTimeout(function() {
                    document.getElementById('graph').classList.add('graph-move');
                }, 100); 
            } else {
                
                document.getElementById('graph').classList.remove('graph-move');
            }
        } */

            function openTab(event, tabName) {
                // Hide all tab contents
                var tabContents = document.getElementsByClassName("tab-content");
                for (var i = 0; i < tabContents.length; i++) {
                    tabContents[i].classList.remove("active");
                }
            
                // Remove active class from all tab buttons
                var tabButtons = document.getElementsByClassName("tab-btn");
                for (var i = 0; i < tabButtons.length; i++) {
                    tabButtons[i].classList.remove("active-tab");
                }
            
                // Show the clicked tab content
                document.getElementById(tabName).classList.add("active");
            
                // Add active class to the clicked tab button
                event.target.classList.add("active-tab");
            
                // If "visualization" tab is clicked, animate the graph
                if (tabName === 'visualization') {
                    setTimeout(function() {
                        document.getElementById('graph').classList.add('graph-move');
                    }, 100); // Small delay for smooth transition
                } else {
                    // Reset graph when navigating away
                    document.getElementById('graph').classList.remove('graph-move');
                }
            }
            
        
    
