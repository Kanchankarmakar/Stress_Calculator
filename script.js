function calculateStress() {
    // Get input values
    var workload = parseFloat(document.getElementById("workload").value);
    var sleep = parseFloat(document.getElementById("sleep").value);
    var relationships = parseFloat(document.getElementById("relationships").value);

    // Check if all values are provided and within the specified range
    if (isNaN(workload) || isNaN(sleep) || isNaN(relationships) || relationships < 1 || relationships > 10) {
        alert("Please enter valid numerical values for all fields, and make sure Relationships Stress is between 1 and 10.");
        return;
    }

    // Calculate stress based on a simple formula (you can customize this)
    var stressLevel = workload * 0.5 + sleep * 0.2 + relationships * 0.3;

    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Stress Level: " + stressLevel.toFixed(2);

    // Change color based on stress level
    if (stressLevel < 3) {
        resultElement.style.color = "green";
    } else if (stressLevel < 6) {
        resultElement.style.color = "orange";
    } else {
        resultElement.style.color = "red";
    }

    // Provide contextual information with a funny message
    resultElement.innerHTML += "<br>" + getStressContext(stressLevel);
}

function getStressContext(stressLevel) {
    var funnyMessages = [
        "Looks like you're as chill as a cucumber! 🥒",
        "Not stressed at all! Are you secretly a zen master? 🧘",
        "Just a little stress. Remember, stress is just spice for the mind! 🌶️",
        "Moderate stress detected. Have you tried talking to your pet rock? 🪨",
        "High stress level! Time for a dance break! 💃🕺",
    ];

    if (stressLevel < 3) {
        return funnyMessages[0];
    } else if (stressLevel < 6) {
        return funnyMessages[1];
    } else {
        return funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    }
}
