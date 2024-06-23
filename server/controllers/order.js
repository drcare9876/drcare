const Order = require('../models/Order');
// Cloudinary Imports
const cloudinary=require( "cloudinary").v2;
const multer=require('multer');
const fs=require('fs');

//.env
cloudinary.config({
    cloud_name: 'dofhvhvnf',
    api_key: '253791317489542',
    api_secret: 'HWY572CK-2vDnDA4HUsb3W3CzrU',
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
  
      const order = new Order({
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
  
      await order.save();
      res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order', details: error.message });
    }
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
  