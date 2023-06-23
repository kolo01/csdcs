import nodemailer from "nodemailer";

export default function handler(req, res) {
  const email = process.env.EMAIL;
  const pass = process.env.EMAIL_PASS;

  console.log(email, pass);
  console.log(req.body.email);
  console.log(req.body.subject);
  console.log(req.body.message);
  const message = {
    from: email,
    to: req.body.email,
    subject: ` ${req.body.subject}`,
    text: `${req.body.message}`,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" >  <div class="form-container text-center">
   <div style="margin-left: 5%; ">
   commande de ${req.body.subject}<br>
   voir les details<br>
   <div style="display: inline-flex;">
       
       <div>
       <img src="${req.body.image}" height="150px" width="200px" alt="image du produit"/>
           
       </div>
       <div style="margin-top: -20px; ">
           <p>
           <h2> ${req.body.subject}</h2>
          
                   
           </p>

           <p>
           <h2>Prix : </h2>${req.body.price}<br><h2>Quantité : </h2> ${req.body.quantity}
           </p>
       </div>
   </div>
</div>
   
   
   </div> <br/> pour plus de details veuillez nous joindre a l'adresse: <a href="mailto:support@rschain.net">support@rschain.net </a></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
  const message2 = {
    from: email,
    to: "lauria.guenaman@rschain.net",
    subject: ` ${req.body.subject}`,
    text: `${req.body.message}`,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" >  <div class="form-container text-center">
   <div style="margin-left: 5%; ">
   commande de ${req.body.subject}<br>
   voir les details<br>
   <div style="display: inline-flex;">
       
       <div>
           <img src="${req.body.image}" height="150px" width="200px" alt="image du produit"/>
           
       </div>
       <div style="margin-top: -20px; ">
           <p>
           <h2> ${req.body.subject}</h2>
          
                   
           </p>

           <p>
           <h2>Prix : </h2>${req.body.price}<br><h2>Quantité : </h2> ${req.body.quantity}
           </p>
       </div>
   </div>
</div>
   
   
   </div> <br/> pour plus de details veuillez nous joindre a l'adresse: <a href="mailto:support@rschain.net">support@rschain.net </a></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
  console.log(req.body.subject, req.body.message);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
    transporter.sendMail(message2, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
