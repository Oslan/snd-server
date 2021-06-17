const app = require('express');

const routes = app.Router();
//phone_number = "+5592988277815",
const verify_service_sid = "ZSe06ee3ca3fc0135427e84028f2d2ec0e",
     // phone_number = "+5592991782441",
      sid = "ACe8bca010069da860f8c120ee57551c7d",
      token = "16bc675231b950bd0831121416e7a79b";

const client = require('twilio')(sid, token);

routes.get('/', (req, res)=>{
    return res.send('API');
});

routes.post('/send', (req, res)=>{
    const { number } = req.body;
    console.log(number);

    client.verify
    .services(verify_service_sid)
    .verifications
    .create({
        to: number.toString(),
        channel: 'sms'
    }).then(response => 
        {console.log(response.status)
    })
    .catch(error => console.log(error.message))

    return res.send('send');
});

routes.post('/verify', (req, res)=>{
    return res.send('verify');
});

module.exports = routes;