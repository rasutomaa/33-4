document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('score-display');
    const copyBtn = document.getElementById('copy-btn');
    
    let scores = [];

    // 100回分の累加スコアを生成（桁揃え）
    for (let i = 1; i <= 100; i++) {
        const teamA = 33 * i;
        const teamB = 4 * i;

        const count = String(i).padStart(3, '0'); // 001,002…
        const line = `${count}回目 : ${teamA} - ${teamB}`;
        scores.push(line);
    }

    const fullText = scores.join('\n');
    display.textContent = fullText;

    // コピー機能（フォールバック付き）
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(fullText);
            successEffect();
        } catch (e) {
            // 古い環境用
            const textarea = document.createElement("textarea");
            textarea.value = fullText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            successEffect();
        }
    });

    function successEffect() {
        const originalText = copyBtn.innerText;

        copyBtn.innerText = "COPIED!";
        copyBtn.style.backgroundColor = "#00ff99";
        copyBtn.style.color = "#000";

        navigator.vibrate?.(50); // スマホ軽く振動

        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#ffcc00";
            copyBtn.style.color = "#000";
        }, 1500);
    }
});
