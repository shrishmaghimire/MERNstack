var Twit = require('twit')
 
var T = new Twit({
  consumer_key:'ANrLNVnOObeR6JMU17pAJTCqG',
  consumer_secret:'CeOgTHBcjoF7R02NK2hjCLhyUM5hlBckg3PxxfAYZncr5DNAGG',
  access_token:'2941788972-hdDUFVRSWoXXr0nlondggcRyofnecytVCPWYJbE',
  access_token_secret:'h0p2JDyLcowUrUf0TYPKUS7q1o7FlUtTTQdvid4LDRTBg',
  timeout_ms:60*1000,  // optional HTTP request timeout to apply to all requests.
    // optional - requires SSL certificates to be valid.
})
T.post('statuses/update', { status: 'Hello from npm twit package ;)' }, function(err, data, response) {
  console.log(data.user.screen_name);
  // result.itemsforEach(element => {
    
  // });
    
})