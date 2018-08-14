const HTTP = require("http");

// Port 7000 will say something good about users
const PORT1 = 7000;
// Port 7500 will say something bad about users
const PORT2 = 7500;

const PORT3 = 8080;



let handleRequest = (request, response) => {
    response.end("You're such a wonderful human being filled with joy, hope, and love!" + request.url + 'html');
};

let handleRequestTwo = (request, response) => {
    response.end("You have made a terrible mistake that you will forever regret.. " + request.url + 'html');
};

let handleRequestThree = (request, response) => {
    var random = ["Hmmm, I don't know you", "What's wrong with you?", "I'm so glad I met you", "You have such a big heart", "The world needs you"];
    var rand = Math.round(Math.random() * 5) + 1;
    var msg = random[rand];
    response.end(msg);
};

const server1 = HTTP.createServer(handleRequest);
const server2 = HTTP.createServer(handleRequestTwo);
const server3 = HTTP.createServer(handleRequestThree);

server1.listen(PORT1, function() {
    console.log("Server listening on http:// localhost: " + PORT1);
});

server2.listen(PORT2, function() {
    console.log("Server listening on http:// localhost: " + PORT2);
});

server3.listen(PORT3, function() {
    console.log("Server listening on http:// localhost: " + PORT3);
})