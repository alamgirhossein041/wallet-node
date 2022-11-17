const Kraken = require("kraken");

const kraken = new Kraken({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const uploadImage = (file) => {
    const params = {
        file: file,
        wait: true,
    };

    kraken.upload(params, (status) => {
        console.log("Params: ", params);
        console.log("Status: ", status);
    });
};

module.exports = { uploadImage };
