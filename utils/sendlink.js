const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


exports.sendemail = async (email, link) => {
   try{
      const msg = {
         to: email,
         from: 'yogeshrdr11@gmail.com',
         subject: 'VERIFY TO LOGIN EXAMIFY',
         text: 'LINK TO VERIFY',
         html: `<strong>${link}</strong>`,
      }
      const mail = await sgMail.send(msg);
      console.log(mail);
      return true;
   }catch(error){
      return false;
   }
}