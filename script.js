document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('score-display');
    const copyBtn = document.getElementById('copy-btn');
    
    let scores = [];
    let fullText = "";

    // 100回分の累加スコアを生成
    for (let i = 1; i <= 100; i++) {
        const teamA = 33 * i;
        const teamB = 4 * i;
        const line = `${i}回目: ${teamA} - ${teamB}`;
        scores.push(line);
    }

    fullText = scores.join('\n');
    display.innerText = fullText;

    // コピー機能
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(fullText).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "COPIED!";
            copyBtn.style.backgroundColor = "#fff";
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = "#ffcc00";
            }, 2000);
        });
    });
});
<