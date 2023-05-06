function sendEmail() {
    const recipientEmail = document.getElementById("recipient-email").value;
    const emailSubject = "Превіт!";
    const emailBody = "Hello world";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
}