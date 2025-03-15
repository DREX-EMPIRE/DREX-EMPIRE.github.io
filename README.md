<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Esports Event Management</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>
</head>
<body>
    <header>
        <h1>Esports Event Management</h1>
    </header>
    
    <section id="register">
        <h2>Register for Tournament</h2>
        <form id="registrationForm">
            <input type="text" id="teamName" placeholder="Team Name" required>
            <input type="text" id="leaderName" placeholder="Leader Name" required>
            <input type="email" id="email" placeholder="Email" required>
            <button type="submit">Register</button>
        </form>
        <p id="registerMessage"></p>
    </section>
    
    <section id="schedule">
        <h2>Schedule & Slots</h2>
        <p>Coming soon...</p>
    </section>
    
    <section id="results">
        <h2>Results</h2>
        <p>Results will be updated here.</p>
    </section>
    
    <section id="liveChat">
        <h2>Live Query Chat</h2>
        <div id="chatBox"></div>
        <input type="text" id="chatInput" placeholder="Ask your query...">
        <button onclick="sendMessage()">Send</button>
    </section>
    
    <script src="script.js"></script>
</body>
</html>
