
const today = new Date().getDay();
const banner = document.getElementById('chamber-banner');

if (today >= 1 && today <= 3){
    banner.style.display = 'block';
}

function closeBanner(){
    banner.style.display = 'none';
}