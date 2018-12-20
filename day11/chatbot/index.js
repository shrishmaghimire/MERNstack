const login = require("facebook-chat-api");//package ko naam
 
// Create simple echo bot
login({email: "your email", password: "your password"}, (err, api) => {
    if(err) return console.error(err);
 
    api.listen((err, message) => {
        for(let i = 0;i<3;i++){
            api.sendMessage("Hello kali dada", message.threadID);
        }
        
    });
});