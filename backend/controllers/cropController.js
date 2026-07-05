const Crop = require("../models/Crop");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

/* ===========================================
   Helper Function
=========================================== */

const uploadImageToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "KrishiMitra/Crops",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(uploadStream);
  });
};

/* ===========================================
   Add Crop
=========================================== */

const addCrop = async (req, res) => {
  try {
    const {
      cropName,
      cropVariety,
      season,
      area,
      areaUnit,
      sowingDate,
      expectedHarvestDate,
      irrigationType,
      soilType,
      notes,
      status,
    } = req.body;

    let cropImage = "";
    let cropImagePublicId = "";

    if (req.file) {
      const uploadedImage = await uploadImageToCloudinary(req.file);

      cropImage = uploadedImage.secure_url;
      cropImagePublicId = uploadedImage.public_id;
    }

    const crop = await Crop.create({
      farmer: req.user._id,

      cropName,
      cropVariety,
      season,

      area,
      areaUnit,

      sowingDate,
      expectedHarvestDate: expectedHarvestDate || null,

      irrigationType,
      soilType,
      notes,
      status,

      cropImage,
      cropImagePublicId,
    });

    return res.status(201).json({
      success: true,
      message: "Crop added successfully.",
      data: crop,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });

  }
};
/* ===========================================
   Get All Crops
=========================================== */

const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find({
      farmer: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: crops.length,
      data: crops,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

/* ===========================================
   Get Crop By Id
=========================================== */

const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user._id,
    });

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: crop,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

/* ===========================================
   Update Crop
=========================================== */

const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user._id,
    });

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found.",
      });
    }

    const {
      cropName,
      cropVariety,
      season,
      area,
      areaUnit,
      sowingDate,
      expectedHarvestDate,
      irrigationType,
      soilType,
      notes,
      status,
      removeImage,
    } = req.body;

    // Remove existing image
    if (removeImage === "true") {
      if (crop.cropImagePublicId) {
        await cloudinary.uploader.destroy(crop.cropImagePublicId);
      }

      crop.cropImage = "";
      crop.cropImagePublicId = "";
    }

    // Upload new image
    if (req.file) {
      if (crop.cropImagePublicId) {
        await cloudinary.uploader.destroy(crop.cropImagePublicId);
      }

      const uploadedImage = await uploadImageToCloudinary(req.file);

      crop.cropImage = uploadedImage.secure_url;
      crop.cropImagePublicId = uploadedImage.public_id;
    }

    crop.cropName = cropName;
    crop.cropVariety = cropVariety;
    crop.season = season;
    crop.area = area;
    crop.areaUnit = areaUnit;
    crop.sowingDate = sowingDate;
    crop.expectedHarvestDate = expectedHarvestDate || null;
    crop.irrigationType = irrigationType;
    crop.soilType = soilType;
    crop.notes = notes;
    crop.status = status;

    await crop.save();

    return res.status(200).json({
      success: true,
      message: "Crop updated successfully.",
      data: crop,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

/* ===========================================
   Delete Crop
=========================================== */

const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findOne({
      _id: req.params.id,
      farmer: req.user._id,
    });

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found.",
      });
    }

    if (crop.cropImagePublicId) {
      await cloudinary.uploader.destroy(crop.cropImagePublicId);
    }

    await crop.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Crop deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

/* ===========================================
   Exports
=========================================== */

module.exports = {
  addCrop,
  getAllCrops,
  getCropById,
  updateCrop,
  deleteCrop,
};