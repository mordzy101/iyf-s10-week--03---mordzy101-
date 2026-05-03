const statusButton = document.querySelector("#status-button");
const statusMessage = document.querySelector("#status-message");

statusButton.addEventListener("click", () => {
  statusMessage.textContent = "Project files, Git commits, and branch workflow are ready.";
});
