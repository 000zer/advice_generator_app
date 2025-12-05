const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const getAdviceBtn = document.querySelector('.get-advice');
async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
        const data = await response.json();
        adviceId.textContent = `ADVICE #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = '"Sorry, could not fetch advice at this time."';
    }
}
getAdviceBtn.addEventListener('click', fetchAdvice);
fetchAdvice();