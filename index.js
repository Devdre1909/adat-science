const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require("path");
const serveStatic = require("serve-static");

const server = express();

dotenv.config({ path: path.join(__dirname, ".env.local") });

console.log(process.env.MAIL_HOST);

server.use(morgan("tiny"));
server.use(cors());
server.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

server.use("/", serveStatic(path.join(__dirname, "/dist")));
// this * route is to serve project on different page routes except root `/`
server.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

server.post("/send-verify-mail", (req, res) => {
  let info = req.body;
  let { firstName, familyName, email, path } = info;

  let token = jwt.sign(
    {
      data: `${firstName}.${familyName}`
    },
    "secret",
    { expiresIn: "1h" }
  );

  let baseUrl =
    path +
    "/buythebook/" +
    token +
    "/" +
    firstName.toLowerCase() +
    familyName.toLowerCase();

  // Message object
  let message = {
    from: "Adat Science and Art Academy",
    to: email,
    subject: "Adat Science and Art Academy | Confirm Email",
    html: `<p>Please follow this link to confirm your email \n <a href=${baseUrl}>Click Me</a> \n If the link does not work kindly copy the url below \n ${baseUrl} </p>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return res.status(500).json({
        msg: "Unable to send mail"
      });
    }

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.status(200).json({
      msg: "Mail sent!"
    });
  });
});

server.post("/send-submission-mail", (req, res) => {
  let info = req.body;

  // Message object
  let message = {
    from: "Adat Science and Art Academy <> ",
    to: email,
    subject: "Adat Science and Art Academy",
    html: `<div>
          <p><strong>Dear First Last</strong></p>
          <p>
            Congratulation, your application for the contest, 'My Africa My
            History' has been submitted successfully.
          </p>
          <p>
            You would be duly communicated on the decision of the Review Team
          </p>
          Best of Luck <br />
          Application Team, ASACube
        </div>`
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
      return res.status(500).json({
        msg: "Unable to send mail"
      });
    }
    console.log("Message sent: %s", info.messageId);

    res.status(200).json({
      msg: "Mail sent!"
    });
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`listening on ${port}`);
});
