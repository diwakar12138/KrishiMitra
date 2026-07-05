const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
    {
        farmer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        cropName: {
            type: String,
            required: true,
            trim: true,
        },

        cropVariety: {
            type: String,
            default: "",
            trim: true,
        },

        season: {
            type: String,
            enum: ["Kharif", "Rabi", "Zaid"],
            required: true,
        },

        area: {
            type: Number,
            required: true,
        },

        areaUnit: {
            type: String,
            enum: ["Acre", "Hectare"],
            default: "Acre",
        },

        sowingDate: {
            type: Date,
            required: null,
        },

        expectedHarvestDate: {
            type: Date,
            required: true,
        },

        irrigationType: {
            type: String,
            default: "",
        },

        soilType: {
            type: String,
            default: "",
        },

        cropImage: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: ["Growing", "Harvested"],
            default: "Growing",
        },

        notes: {
            type: String,
            default: "",
            maxlength: 500,
        },

        cropImage: {
            type: String,
            default: "",
        },

        cropImagePublicId: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Crop", cropSchema);