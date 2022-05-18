const { Schema, model} = require("mongoose")

const postSchema = new Schema ({
    title : {
        required : true,
        type : Schema.Types.String
    },
    body: {
        required : true,
        type : Schema.Types.String
    },
    published : {
        default : false,
        type : Schema.Types.Boolean
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

module.exports = model("Post", postSchema);

// Blog -> blogs
// Post -> posts (CollName in DB)