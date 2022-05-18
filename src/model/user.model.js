const { Schema, model} = require("mongoose");

const userSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true
    },
    email : {
        type : Schema.Types.String,
        required : true
    },
    password : {
        type: Schema.Types.String,
        required : true
    },
    age : Schema.Types.Number,
    posts : [{
        type : Schema.Types.ObjectId,
        ref : "Post"
    }]
})

const UserModel = model("User", userSchema)

module.exports = UserModel;

// User -> users (Coll in DB)