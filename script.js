// script.js

// Function to update the output with the value from the input field
function updateOutput() {
    var ddOption = document.getElementById("ddOptions").value;

    var div_bjp = 0;
    var pct_bjp = 0;
    var pct_jmm = 0;
console.log("You have chosen" + ddOption);
if (ddOption == 1) {
console.log("You have chosen" + ddOption);
	div_bjp = 1.08;
    	pct_bjp = 1.51;
    	pct_jmm = 1.40;

} else if (ddOption == 2) {
console.log("You have chosen" + ddOption);
	div_bjp = 1.112;
    	pct_bjp = 1.195;
    	pct_jmm = 1.075;

} else if (ddOption == 3) {
console.log("You have chosen" + ddOption);
	div_bjp = 1.15;
    	pct_bjp = 1.3;
    	pct_jmm = 0.9;

}

    const jmm_2024 = document.getElementById('ipPCI').value;

    bjp_2024 = jmm_2024*div_bjp;
    bjp_2029 = jmm_2024*pct_bjp;
    jmm_2029 = jmm_2024*pct_jmm;

    // Set the value to the output fields
    document.getElementById('bjp_2024').innerText = bjp_2024;
    document.getElementById('jmm_2024').innerText = jmm_2024;
    document.getElementById('bjp_2029').innerText = bjp_2029;
    document.getElementById('jmm_2029').innerText = jmm_2029;
}
