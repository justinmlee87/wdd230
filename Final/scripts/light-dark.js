
const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
const content = document.querySelector(".content");




modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌜")) {
		header.style.background = "#333";
        header.style.color = "#a1ecff";
        footer.style.background = "#333";
        footer.style.color = "#a1ecff";
        content.style.background = "#333";
        
        
        
       

        
        
		
		
		modeButton.textContent = "🌞";
		
	} else {
		header.style.background = "#a1ecff";
        header.style.color = "#333";
        footer.style.background = "#a1ecff";
        footer.style.color = "#333";
        content.style.background = "#333";
              
        
       
        
        
        
		
		
		modeButton.textContent = "🌜";
	}
});