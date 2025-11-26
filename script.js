const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// /change the postion of no button
noBtn.addEventListener("pointerdoen", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";
  

  
document.querySelector("footer").innerHTML =
`
____   ____    .__       .__  .__                                                                    
\   \ /   /___ |__| ____ |__| |  | _____    _______   ____ ______   ____   ____   ______ ____    /\  
 \   Y   /  _ \|  |/ ___\|  | |  | \__  \   \_  __ \_/ __ \\____ \ /  _ \ /    \ /  ___// __ \   \/  
  \     (  <_> )  \  \___|  | |  |__/ __ \_  |  | \/\  ___/|  |_> >  <_> )   |  \\___ \\  ___/   /\  
   \___/ \____/|__|\___  >__| |____(____  /  |__|    \___  >   __/ \____/|___|  /____  >\___  >  \/  
                       \/               \/               \/|__|               \/     \/     \/       

<!--
    ====================================================================================================================
    ====================================================================================================================
    dark4rmy{je_veux_bien_sortir_avec_toi}
    =====================================================================================================================
    ====================================================================================================================
    -->
`;

  
  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);

});









