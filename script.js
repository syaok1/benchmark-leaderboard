// complete leaderboard data
const leaderboardData = [
    { model: 'GPT-4o', score: 95 },
    { model: 'Claude-Sonnet-4', score: 90 },
    { model: 'Gemini-2.0-Pro', score: 92 },
    { model: 'LLaMA-3.1', score: 88 },
    { model: 'Qwen-VL-Max', score: 91 },
];

// function to render the leaderboard table dynamically
function renderLeaderboard() {
    const tableBody = document.getElementById('leaderboard-body'); // Assuming you have a table body with id 'leaderboard-body'
    tableBody.innerHTML = ''; // Clear existing table data

    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        const modelCell = document.createElement('td');
        const scoreCell = document.createElement('td');

        modelCell.textContent = entry.model;
        scoreCell.textContent = entry.score;

        row.appendChild(modelCell);
        row.appendChild(scoreCell);
        tableBody.appendChild(row);
    });
}

// Call the function to render the leaderboard
document.addEventListener('DOMContentLoaded', renderLeaderboard);
