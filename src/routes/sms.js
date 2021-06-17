const app = require('express');
require('dotenv').config();

const routes = app.Router();
console.log(process.env.SID);
const client = require('twilio')(process.env.SID, process.env.TOKEN);

routes.get('/', (req, res)=>{
    return res.send('API');
});

routes.post('/send', (req, res)=>{
    const { number } = req.body;
    console.log(number);

    client.verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verifications
    .create({
        to: number.toString(),
        channel: 'sms'
    }).then(response => 
        {console.log(response.status)
            return res.send(response.status);
    })
    .catch(error => console.log(error))
});

routes.post('/verify', (req, res)=>{
    const { number, code } = req.body;
    client.verify
    .services(process.env.VERIFY_SERVICE_SID)
      .verificationChecks
      .create({to: number, code})
      .then(verification_check => {
          console.log(verification_check.status);
          return res.send(verification_check.status);
        });
});

module.exports = routes;
