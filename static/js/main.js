const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const form = document.getElementById("enquiryForm");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      "Hello Gaurik Power Innovators,",
      "",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Project details: ${data.get("message") || "Not provided"}`
    ].join("\n");
    window.open(`https://wa.me/919004695921?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}


const emailButton = document.getElementById("sendEmailButton");
const emailChoiceDialog = document.getElementById("emailChoiceDialog");
const closeEmailChoice = document.getElementById("closeEmailChoice");
const chooseEmailApp = document.getElementById("chooseEmailApp");
const chooseGmailBrowser = document.getElementById("chooseGmailBrowser");

function getEnquiryEmailDetails() {
  const data = new FormData(form);
  const subject = `Website enquiry: ${data.get("service")}`;
  const body = [
    "Hello Gaurik Power Innovators,",
    "",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Service required: ${data.get("service")}`,
    `Project details: ${data.get("message") || "Not provided"}`,
    "",
    "Regards,"
  ].join("\n");
  return { subject, body };
}

if (emailButton && form && emailChoiceDialog) {
  emailButton.addEventListener("click", () => {
    if (!form.reportValidity()) return;
    emailChoiceDialog.hidden = false;
    if (chooseEmailApp) chooseEmailApp.focus();
  });

  const hideEmailChoice = () => {
    emailChoiceDialog.hidden = true;
    emailButton.focus();
  };

  closeEmailChoice?.addEventListener("click", hideEmailChoice);
  emailChoiceDialog.addEventListener("click", event => {
    if (event.target === emailChoiceDialog) hideEmailChoice();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !emailChoiceDialog.hidden) hideEmailChoice();
  });

  chooseEmailApp?.addEventListener("click", () => {
    const { subject, body } = getEnquiryEmailDetails();
    window.location.href = `mailto:phmhatre.g@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    hideEmailChoice();
  });

  chooseGmailBrowser?.addEventListener("click", () => {
    const { subject, body } = getEnquiryEmailDetails();
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=phmhatre.g@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    hideEmailChoice();
  });
}
