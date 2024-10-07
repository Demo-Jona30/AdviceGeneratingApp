const id_el = document.querySelector('.id');
const advice_el = document.querySelector('.advice');
const refresh_btn = document.querySelector('.refresh');

const url = "https://api.adviceslip.com/advice";

getAdvice();

async function getAdvice() {
    const res = await fetch(url);
    const response = await res.json();
    id_el.innerHTML = response.slip.id;
    advice_el.innerHTML = response.slip.advice;
}

refresh_btn.addEventListener('click', () => {
    getAdvice();
})