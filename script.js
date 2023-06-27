const adviceId = document.querySelector(".advice-id span");
const adviceText = document.querySelector(".advice-text");
const btn = document.querySelector(".generate-btn");

const displayAdvice = (data) => {
  adviceId.textContent = data.slip.id;
  adviceText.textContent = `"${data.slip.advice}"`;
};

const getRandomAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      slip: {
        id: "00000",
        advice: "Something went wrong, please try again later."
      }
    }
  }
};

const generateAdvice = async () => {
  const data = await getRandomAdvice();
  displayAdvice(data)
}

btn.addEventListener('click', () => {
  generateAdvice();
});

window.onload = () => {
  generateAdvice();
};


