const Order = require('../models/Order');
const path = require('path');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
// Cloudinary Imports
const cloudinary=require( "cloudinary").v2;
const multer=require('multer');
const fs=require('fs');
require('dotenv').config();

//.env
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });
  const upload = multer({ dest: "uploads/" });

  exports.createOrder = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            country,
            state,
            city,
            pincode,
            address,
            mobile,
            altMobile,
            email,
            items,
            orderItems,
            prescriptionImg,
            applyPrescription,
            totalAmount
        } = req.body;
    
        // Generate a unique order ID
        const orderId = `ORDER-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
        const invoiceDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
        const order = new Order({
            orderId,
            firstName,
            lastName,
            country,
            state,
            city,
            pincode,
            address,
            mobile,
            altMobile,
            email,
            items,
            orderItems,
            prescriptionImg,
            applyPrescription,
            totalAmount
        });
    
        // Load the HTML template and replace placeholders
        const templatePath = path.join(__dirname, '../templates/Mail.html');
        let htmlTemplate = fs.readFileSync(templatePath, 'utf8');
    
        // Replace placeholders with actual values
        htmlTemplate = htmlTemplate
            .replace('{{firstName}}', firstName)
            .replace('{{lastName}}', lastName)
            .replace('{{orderId}}', orderId)
            .replace('{{totalAmount}}', totalAmount)
            .replace('{{email}}', email)
            .replace('{{invoiceDate}}', invoiceDate)
            .replace('{{address}}', address)
            .replace('{{city}}', city)
            .replace('{{state}}', state)
            .replace('{{pincode}}', pincode)
            .replace('{{country}}', country)
            .replace('{{items}}', generateItemsHtml(items))
            .replace('{{orderItems}}', generateItemsHtml(orderItems));
    
        // Send order confirmation email
        await sendOrderConfirmationEmail(email, htmlTemplate);

        await order.save();
    
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ error: 'Failed to create order', details: error.message });
    }
};

const generateItemsHtml = (items) => {
    return items.map(item => `
        <tr>
            <td style="border-bottom: 1px solid #ddd; padding: 8px;">${item.name}</td>
            <td style="border-bottom: 1px solid #ddd; padding: 8px;">${item.quantity}</td>
        </tr>
    `).join('');
};

// Email function using nodemailer
const sendOrderConfirmationEmail = async (recipientEmail, htmlContent) => {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'drcare66@gmail.com',
            pass: 'ufrsbfayhpvhzkjt'
        }
    });

    console.log('Transporter is ready to send email');
  
    // Send the email
    await transporter.sendMail({
        from: 'drcare66@gmail.com',
        to: recipientEmail,
        subject: 'Order Confirmation Email',
        html: htmlContent
    });

    console.log('Mail sent');
};




//cloudinary photo save
exports.uploadPhoto = [upload.single('photo'), async (req, res) => {
    try {
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: "Product-Image-Upload",
          allowed_formats: ["jpg", "jpeg", "png"],
        });
  
        const photoUrl = result.secure_url;
        fs.unlinkSync(req.file.path);
        res.status(201).json(photoUrl);
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }];
  