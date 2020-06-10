const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: 'wencelfabiansantos@gmail.com',
    subject: 'Welcome to my application',
    text: `Welcome to the app ${name}`,
    html: `<strong>Welcome to the app ${name}</strong>`,
  };
  sgMail.send(msg);
};
const sendCancelationEmail = (email, name) => {
  const msg = {
    to: email,
    from: 'wencelfabiansantos@gmail.com',
    subject: 'Sorry to see you go',
    text: `Hi ${name}, we are sorry to see you go, please let us know
     if there is anything we could have done to make you stay`,
    html: `<strong>Hi ${name}, we are sorry to see you go, please let us know
    if there is anything we could have done to make you stay</strong>`,
  };
  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
