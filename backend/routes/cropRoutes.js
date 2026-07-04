const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {addCrop,getAllCrops,getCropById,updateCrop,deleteCrop} = require("../controllers/cropController");

router.post("/", protect, upload.single("cropImage"), addCrop);
router.get("/", protect, getAllCrops);
router.get("/:id", protect, getCropById);
router.put("/:id", protect, updateCrop);
router.delete("/:id", protect, deleteCrop);

module.exports = router;