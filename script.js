const droparea = document.getElementById("drop-area");
const preview = document.getElementById("preview");
const fileInput = document.getElementById("fileElem");
const buttons = document.getElementById("buttons");
const placeholder = document.getElementById("placeholder");
const removeBtn = document.getElementById("removeBtn");
const changeBtn = document.getElementById("changeBtn");

const saved = localStorage.getItem("avatar");
if (saved) {
  preview.src = saved;
  preview.style.display = "block";
  buttons.style.display = "flex";
  placeholder.style.display = "none";
}

fileInput.addEventListener("click", (e) => {
  e.stopPropagation();
});

["dragenter", "dragover"].forEach((evt) => {
  droparea.addEventListener(evt, (e) => {
    e.preventDefault();
    droparea.style.borderColor = "#aaa";
  });
});

["dragleave", "drop"].forEach((evt) => {
  droparea.addEventListener(evt, (e) => {
    e.preventDefault();
    droparea.style.borderColor = "#888";
  });
});

droparea.addEventListener("drop", (e) => {
  const file = e.dataTransfer.files[0];
  fileInput.files = e.dataTransfer.files;
  handleFile(file);
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  handleFile(file);
});

function handleFile(file) {
  if (!file || !file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
    alert("Only JPG/PNG under 5MB allowed");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result;
    preview.src = base64;
    preview.style.display = "block";
    buttons.style.display = "flex";
    placeholder.style.display = "none";
    localStorage.setItem("avatar", base64);
  };
  reader.readAsDataURL(file);
}

removeBtn.addEventListener("click", () => {
  preview.src = "";
  preview.style.display = "none";
  buttons.style.display = "none";
  placeholder.style.display = "block";
  localStorage.removeItem("avatar");
});

changeBtn.addEventListener("click", () => fileInput.click());

document
  .getElementById("ticket-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const git = document.getElementById("github").value;

    let valid = true;

    if (!name) {
      document.getElementById("required-error-name").classList.remove("hidden");
      valid = false;
      document.getElementById("name").style.borderColor = "red";
      document.getElementById("name").style.borderWidth = "1px";
    } else {
      document.getElementById("required-error-name").classList.add("hidden");
    }

    if (!email) {
      document
        .getElementById("required-error-email")
        .classList.remove("hidden");
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("email").style.borderWidth = "1px";

      valid = false;
    } else {
      document.getElementById("required-error-email").classList.add("hidden");
    }

    if (!git) {
      document.getElementById("required-error-git").classList.remove("hidden");
      document.getElementById("github").style.borderColor = "red";
      document.getElementById("github").style.borderWidth = "1px";
      valid = false;
    } else {
      document.getElementById("required-error-git").classList.add("hidden");
    }

    if (!valid) {
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("git", git);

    function generateTicketNumber() {
      const randomNumber = Math.floor(10000 + Math.random() * 90000);
      return `#${randomNumber}`;
    }

    const ticketNumber = generateTicketNumber();
    localStorage.setItem("ticketNumber", ticketNumber);

    window.location.href = "congrats.html";
  });
