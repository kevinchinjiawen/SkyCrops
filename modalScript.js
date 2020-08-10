document.getElementById('signInOnClick').addEventListener("click", 
function() {
	document.querySelector('.bgModal').style.display="flex";
});

document.querySelector('.close').addEventListener("click", ()=>{
    document.querySelector('.bgModal').style.display="none";
});

document.getElementById('signUpOnClick').addEventListener("click",() => {
    document.querySelector('.bgModal').style.display="flex";
});

document.querySelector('.close').addEventListener("click", ()=>{
    document.querySelector('.bgModal').style.display="none";
});