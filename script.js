// Dynamic leaderboard data
const leaderboardData = [
    { rank: 1, name: 'GPT-4o', score: 0.872 },
    { rank: 2, name: 'Claude-Sonnet-4', score: 0.856 },
    { rank: 3, name: 'Gemini-2.0-Pro', score: 0.843 },
    { rank: 4, name: 'LLaMA-3.1', score: 0.821 },
    { rank: 5, name: 'Qwen-VL', score: 0.798 }
];

function renderLeaderboard() {
    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';
    
    leaderboardData.forEach((entry) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.name}</td>
            <td>${entry.score.toFixed(3)}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderLeaderboard);
