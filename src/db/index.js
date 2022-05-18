const { connect } = require("mongoose");

const MongoURI = "mongodb+srv://optum:ov8TFWTjQAUSpTW5@cluster0.e9xsq.mongodb.net/optum-db?retryWrites=true&w=majority"

connect(MongoURI)
    .then(conn => {
        console.log("Mongo Connected")
    }).catch(console.log)