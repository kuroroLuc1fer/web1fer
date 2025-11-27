const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth / 2);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth / 2);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// /change the postion of no button
noBtn.addEventListener("pointerdoen", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth / 2);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth / 2);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

noBtn.addEventListener("click", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth / 2);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth / 2);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";
  

  
document.querySelector("#answer").innerHTML =
`
Mdrr, je plaisante!<br/> Voici la reponse : 
<!--
    dark4rmy{je_veux_bien_sortir_avec_toi_tu_me_plais}
-->
`;

  
  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);

});














