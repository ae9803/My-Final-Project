// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "valeroApp",
        url: "mongodb://jake:tower86@ds133358.mlab.com:33358/valeroapp",
        port: 27017
    },

    local:
    {
        name: "valeroApp",
        url: "mongodb://localhost/valeroApp",
        port: 27017
    }

};
