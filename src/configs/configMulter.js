const multer = require("multer");

// Image Upload
const imageStorage = multer.diskStorage({
    destination: "src/uploads", // Destination to store image
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "." + file.originalname.split(".").at(-1));
        // file.fieldname is name of the field (image), path.extname get the uploaded file extension
    },
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1000000, // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            // upload only png and jpg format
            return cb(new Error("Please upload a Image"));
        }
        cb(undefined, true);
    },
});

module.exports = { imageUpload };
