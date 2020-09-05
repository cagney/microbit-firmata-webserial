"use strict";
// On load, check that webserial is supported
document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementById("webserial-supported");
    if (!div) {
        console.log("element not found");
        return;
    }
    console.log(navigator);
    var supported = "serial" in navigator;
    div.innerText = supported.toString();
});
