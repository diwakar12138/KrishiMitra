const Crop = require("../models/Crop");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

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
    } = req.body;

    let imageUrl = "";

    if (req.file) {
      const uploadFromBuffer = () => {
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

          streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
        });
      };

      const uploadedImage = await uploadFromBuffer();

      imageUrl = uploadedImage.secure_url;
    }

    const crop = await Crop.create({
      farmer: req.user._id,
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
      cropImage: imageUrl,
    });

    return res.status(201).json({
      success: true,
      message: "Crop added successfully.",
      data: crop,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const getAllCrops = async (req, res) => {
    try {

        const crops = await Crop.find({
            farmer: req.user._id
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: crops.length,
            data: crops
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};




const getCropById = async (req, res) => {
    try {

        const crop = await Crop.findOne({
            _id: req.params.id,
            farmer: req.user._id
        });

        if (!crop) {
            return res.status(404).json({
                success: false,
                message: "Crop not found."
            });
        }

        return res.status(200).json({
            success: true,
            data: crop
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


const updateCrop = async (req, res) => {
    try {

        const updatedCrop = await Crop.findOneAndUpdate(
            {
                _id: req.params.id,
                farmer: req.user._id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedCrop) {
            return res.status(404).json({
                success: false,
                message: "Crop not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Crop updated successfully.",
            data: updatedCrop
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};





const deleteCrop = async (req, res) => {
    try {

        const deletedCrop = await Crop.findOneAndDelete({
            _id: req.params.id,
            farmer: req.user._id
        });

        if (!deletedCrop) {
            return res.status(404).json({
                success: false,
                message: "Crop not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Crop deleted successfully."
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    addCrop,
    getAllCrops,
    getCropById,
    updateCrop,
    deleteCrop
};