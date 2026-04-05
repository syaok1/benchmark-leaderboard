// Leaderboard data with full details
const leaderboardData = [
    { 
        rank: 1, 
        name: 'GPT-4o', 
        org: 'OpenAI',
        type: 'general',
        total: 0.872, 
        step1: 0.891, 
        step2: 0.845, 
        step3: 0.856, 
        step4: 0.879,
        css: 0.92,
        date: '2026-04-05'
    },
    { 
        rank: 2, 
        name: 'Claude-Sonnet-4', 
        org: 'Anthropic',
        type: 'general',
        total: 0.856, 
        step1: 0.871, 
        step2: 0.834, 
        step3: 0.839, 
        step4: 0.862,
        css: 0.88,
        date: '2026-04-04'
    },
    { 
        rank: 3, 
        name: 'Gemini-2.0-Pro', 
        org: 'Google',
        type: 'general',
        total: 0.843, 
        step1: 0.858, 
        step2: 0.821, 
        step3: 0.825, 
        step4: 0.849,
        css: 0.85,
        date: '2026-04-03'
    },
    { 
        rank: 4, 
        name: 'LLaMA-3.1', 
        org: 'Meta',
        type: 'general',
        total: 0.821, 
        step1: 0.832, 
        step2: 0.798, 
        step3: 0.805, 
        step4: 0.831,
        css: 0.80,
        date: '2026-04-02'
    },
    { 
        rank: 5, 
        name: 'Qwen-VL-Max', 
        org: 'Alibaba',
        type: 'general',
        total: 0.798, 
        step1: 0.812, 
        step2: 0.775, 
        step3: 0.791, 
        step4: 0.808,
        css: 0.78,
        date: '2026-04-01'
    }
];

function renderLeaderboard() {
    const tbody = document.querySelector('#leaderboard-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    leaderboardData.forEach((entry) => {
        const row = document.createElement('tr');
        let rankEmoji = '';
        if (entry.rank === 1) rankEmoji = '🥇';
        if (entry.rank === 2) rankEmoji = '🥈';
        if (entry.rank === 3) rankEmoji = '🥉';
        
        row.innerHTML = `
            <td><strong>${rankEmoji} #${entry.rank}</strong></td>
            <td>${entry.name}</td>
            <td>${entry.org}</td>
            <td><span class="score high">${entry.total.toFixed(3)}</span></td>
            <td><span class="score ${entry.step1 >= 0.85 ? 'high' : 'medium'}">${entry.step1.toFixed(3)}</span></td>
            <td><span class="score ${entry.step2 >= 0.85 ? 'high' : 'medium'}">${entry.step2.toFixed(3)}</span></td>
            <td><span class="score ${entry.step3 >= 0.85 ? 'high' : 'medium'}">${entry.step3.toFixed(3)}</span></td>
            <td><span class="score ${entry.step4 >= 0.85 ? 'high' : 'medium'}">${entry.step4.toFixed(3)}</span></td>
            <td><span class="score ${entry.css >= 0.85 ? 'high' : 'medium'}">${entry.css.toFixed(2)}</span></td>
            <td>${entry.date}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderLeaderboard);
