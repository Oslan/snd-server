const app = require('express');

const routes = app.Router();
//phone_number = "+5592988277815",
const verify_service_sid = "VAe1839ae321b1d00c4d9eee53e6968d94",
      phone_number = "+5592991782441",
      sid = "ACe8bca010069da860f8c120ee57551c7d",
      token = "0d964b249e61831697fdec3d68fd715a";

const client = require('twilio')(sid, token);

routes.get('/', (req, res)=>{
    return res.send('API');
});

routes.post('/send', (req, res)=>{
    client.verify
    .services(verify_service_sid)
    .verifications
    .create({
        to: phone_number,
        channel: 'sms'
    }).then(response => console.log(response))
    .catch(error => console.log(error))

    return res.send('send');
});

routes.post('/verify', (req, res)=>{
    return res.send('verify');
});

module.exports = routes;