const GITHUB_USERNAME = "BenB33";
const REPO_NAME = "chicken-ball";
const ISSUE_NUMBER = 1;
const GITHUB_TOKEN = "your-personal-access-token";  // Store securely in environment variables if possible

async function updateTimestamp() {
    const timestamp = document.getElementById("timestamp").value;
    if (!timestamp) {
        alert("Please enter a valid timestamp.");
        return;
    }

    const issueUrl = `https://api.github.com/repos/${GITHUB_USERNAME}/${REPO_NAME}/issues/${ISSUE_NUMBER}`;
    const updatedBody = `last_updated: ${new Date(timestamp).toISOString()}`;

    const response = await fetch(issueUrl, {
        method: "PATCH",
        headers: {
            "Authorization": `token ${GITHUB_TOKEN}`,
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ body: updatedBody })
    });

    if (response.ok) {
        document.getElementById("status").innerText = "Timestamp updated successfully!";
    } else {
        document.getElementById("status").innerText = "Failed to update timestamp.";
    }
}