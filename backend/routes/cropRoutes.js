const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {addCrop,getAllCrops,getCropById,updateCrop,deleteCrop} = require("../controllers/cropController");

router.post("/", protect, addCrop);
router.get("/", protect, getAllCrops);
router.get("/:id", protect, getCropById);
router.put("/:id", protect, updateCrop);
router.delete("/:id", protect, deleteCrop);

module.exports = router;