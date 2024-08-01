function changeContentUsingInnerHTML() {
    var element = document.getElementById("content-html");
    element.innerHTML = "<strong>This content has been changed using innerHTML.</strong>";
}
function changeContentUsingInnerText() {
    var element = document.getElementById("content-text");
    element.innerText = "This content has been changed using innerText.";
}
function initializeContent() {
    document.getElementById("content-html").innerHTML = "Initial content for innerHTML.";
    document.getElementById("content-text").innerText = "Initial content for innerText.";
}