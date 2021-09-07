
const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
})

const contacts = [
  '22100104@lums.edu.pk',
  '22100090@lums.edu.pk',
  '22100061@lums.edu.pk',
  '22100163@lums.edu.pk',
  '22100018@lums.edu.pk',
  '22100145@lums.edu.pk',
  'sameer.nadeem24@gmail.com'
]


let src1 = 'https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/241232293_4363818563702745_113189738856332676_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGFqRzj3EH-gnMrkI_W-nsE5KKkMPkmvCfkoqQw-Sa8J9IYFUJOC3ApWkLiXJZxVtE13dyYkU_Cg03kGRvzxZ5i&_nc_ohc=VLjGpjRoZCcAX-v10dC&_nc_ht=scontent.flhe5-1.fna&oh=ad3d6fc8e451304d8665c36b3f7783c2&oe=615D7319'
let src2 = 'https://scontent.flhe5-1.fna.fbcdn.net/v/t1.6435-9/241349451_4363818537036081_3853146546201651777_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGhpROaxBuqfjazmcC4PkXpNiOFZbgdPds2I4VluB092ygOWexTqMvBhCn-DeFEqiyQPDoM8Yfc561Osw5_nOTB&_nc_ohc=bmJxsdKKNJcAX9wDZG-&tn=okx8m3-miE9AcPtS&_nc_ht=scontent.flhe5-1.fna&oh=b6a1ddcfc8818ac3b3d00ea69b3cad35&oe=615CB061'
contacts.forEach(contact => {
  let mailOptions = {
    from: 'sameer.nadeem24@gmail.com',
    to: contact,
    subject: 'Just a regular email routine.',
    html: `<img src=${src1}><br><img src=${src2}>`
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  })


})












