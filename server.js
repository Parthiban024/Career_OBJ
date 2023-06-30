const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path')

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// API endpoint for job application form submission
app.post('/api/apply-job', upload.single('resume'), (req, res) => {
  try {
    const { name, address, experience, previousCompany, noticePeriod, lastCTC, expectedCTC } = req.body;

    // Handle form submission logic here
    // You can access the uploaded resume file using req.file

    // Example logic: Print form data and file details
    console.log('Form Data:');
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Experience:', experience);
    console.log('Previous Company:', previousCompany);
    console.log('Notice Period:', noticePeriod);
    console.log('Last CTC:', lastCTC);
    console.log('Expected CTC:', expectedCTC);

    if (req.file) {
      console.log('Uploaded Resume:');
      console.log('File Name:', req.file.originalname);
      console.log('File Path:', req.file.path);
    }

    // Configure your email provider details here (e.g., SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'parthibaneee7548@gmail.com',
        pass: 'xnzrszhaawvpkcov'
      }
    });

    // Send email using nodemailer
    const mailOptions = {
      from: 'careers-objectways', // Replace with your email address
      to: 'balamuruganveerappan@objectways.com', // Replace with the recipient email address
      cc: 'parthiban@objectways.com',
      subject: 'Job Application',
      text: `A new job application has been submitted.\n\nName: ${name}\nAddress: ${address}\nExperience: ${experience}\nPrevious Company: ${previousCompany}\nNotice Period: ${noticePeriod}\nLast CTC: ${lastCTC}\nExpected CTC: ${expectedCTC}`,
      attachments: []
    };

    if (req.file) {
      mailOptions.attachments.push({ filename: req.file.originalname, path: req.file.path });
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error occurred while sending email' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Application submitted successfully' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// Start the server
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
