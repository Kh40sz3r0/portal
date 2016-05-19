/**
 * Created by sergiomarcial on 5/12/16.
 */
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: '{username}',
      clientId: '{Client ID}',
      clientSecret: '{Client Secret}',
      refreshToken: '{refresh-token}',
      accessToken: '{cached access token}'
    })
  }
});

module.exports = {
  sendEmail: sendEmail
};

function sendEmail(mailOptions){
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      return error;
    }
    console.log('Message sent: ' + info.response);
  });
}

