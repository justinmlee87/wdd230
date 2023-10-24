var pword = document.getElementById("pword"),
cpword = document.getElementById("cpword");

function valdiatePassword(){
    if(pword.value != cpword.value) {
        cpword.setCustomValidity("❌Passwords Do NOT match❌");

    }
    else{
        cpword.setCustomValidity('');
    }
}

pword.onchange = valdiatePassword;
cpword.onkeyup = valdiatePassword;


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");


range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}