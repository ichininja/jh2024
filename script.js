// script.js

// Function to update the output with the value from the input field
function updateOutput() {
    // Get the value from the input field
    const div_bjp = 1.24;
    const div_jmm = 1.22;
    const pct_bjp = 1.22;
    const pct_jmm = 1.22;

    const ipVal = document.getElementById('ipPCI').value;

    bjp_2024 = ipVal*div_bjp;
    bjp_2029 = bjp_2024*pct_bjp;
    jmm_2024 = ipVal;
    jmm_2029 = ipVal*pct_jmm;

    // Set the value to the output fields
    document.getElementById('bjp_2024').innerText = bjp_2024;
    document.getElementById('jmm_2024').innerText = jmm_2024;
    document.getElementById('bjp_2029').innerText = bjp_2029;
    document.getElementById('jmm_2029').innerText = jmm_2029;
}