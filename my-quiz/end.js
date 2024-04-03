const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = JSON.parse(localStorage.getItem('mostRecentScore')) || 0; // Retrieve mostRecentScore from localStorage

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = `Final Score: ${mostRecentScore}`;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

const saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(MAX_HIGH_SCORES); // Use MAX_HIGH_SCORES directly

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html'); // Corrected the URL
};
