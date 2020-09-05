// On load, check that webserial is supported

document.addEventListener("DOMContentLoaded", () => {
  const div = document.getElementById("webserial-supported");
  if (!div) {
    console.log("element not found");
    return;
  }
  console.log(navigator);
  let supported: boolean = "serial" in navigator;
  div.innerText = supported.toString();
})
