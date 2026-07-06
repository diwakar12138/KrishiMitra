const transporter = require("../config/nodemailer");

const sendContactMail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Mail to Admin
    await transporter.sendMail({
      from: `"KrishiMitra Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Query - ${subject}`,
      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">

      <h2 style="color:#2e7d32">
      🌱 New Farmer Contact Request
      </h2>

      <table cellpadding="8">

      <tr>
      <td><b>Name</b></td>
      <td>${name}</td>
      </tr>

      <tr>
      <td><b>Email</b></td>
      <td>${email}</td>
      </tr>

      <tr>
      <td><b>Subject</b></td>
      <td>${subject}</td>
      </tr>

      <tr>
      <td><b>Message</b></td>
      <td>${message}</td>
      </tr>

      </table>

      </div>
      `,
    });

    // Auto Reply to Farmer
    await transporter.sendMail({
      from: `"KrishiMitra" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message 🌱",
      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">

      <h2 style="color:#2e7d32">
      Thank You, ${name}!
      </h2>

      <p>
      We have successfully received your query.
      </p>

      <p>
      Our KrishiMitra support team will get back to you as soon as possible.
      </p>

      <br>

      <b>Your Message</b>

      <p>
      ${message}
      </p>

      <br>

      <p>
      Regards,<br>
      Team KrishiMitra 🌾
      </p>

      </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Unable to send message.",
    });
  }
};

module.exports = {
  sendContactMail,
};