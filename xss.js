fetch("https://www.profound.com/Pages/Subscriptions/ProfileManagement.aspx?view=Profile", {
  credentials: "include"
})
.then(response => response.text())
.then(html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let email = doc.querySelector("#BodyArea_MainContentArea_radEmailAddress_text")?.value || "Not found";
    let phone = doc.querySelector("#BodyArea_MainContentArea_radPhone_text")?.value || "Not found";

    alert("Email: " + email + "\nPhone: " + phone);
});
