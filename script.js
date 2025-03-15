document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("responseMessage").innerText = "Registration Successful!";
});

// Live Chat Feature
function sendMessage() {
    let input = document.getElementById("chatInput").value;
    if (input) {
        let chatBox = document.getElementById("chatBox");
        chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
        document.getElementById("chatInput").value = "";
    }
}
