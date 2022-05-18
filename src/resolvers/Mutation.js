const UserModel = require("../model/user.model");
const { hash } = require("bcrypt");
const PostModel = require("../model/post.model");
const getUserId = require("../utils/getUserId");

module.exports = {
    async createUser(parent, args, ctx, info) {
        const { name, email, password, age } = args.data;
        try {
            const hashedPassword = await hash(password, 8)
            const newUser = new UserModel({ name, email, password: hashedPassword, age })
            const createdUser = await newUser.save()
            return {
                ...createdUser._doc
            }
        } catch (err) {
            throw new Error(err)
        }
    },
    async deleteUser(parent, args, {request}, info) {
        const userId = getUserId(request)
        try {
            const deletedUser = await UserModel.findByIdAndDelete(userId)
            await PostModel.deleteMany({author : userId})
            return deletedUser
        } catch (err) {
            throw new Error(err)
        }
    },
    async updateUser(parent, args, ctx, info) {
        const { id, data } = args
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, { ...data }, { new: true })
            return updatedUser;
        } catch (err) {
            throw new Error(err)
        }
    },
    async createPost(parent, args, { request }, info) {
        const userId = getUserId(request)
        if (userId) {
            try {
                const { title, body } = args.data;
                // check in DB - user does exist
                const userFound = await UserModel.findOne({ id: userId })
                if (userFound) {
                    const newPost = new PostModel({ title, body, author: userId })
                    await UserModel.findByIdAndUpdate(userId, { $push: { posts: newPost._doc._id } })
                    const createdPost = await newPost.save()
                    return createdPost;
                } else {
                    throw new Error("Unable to find User")
                }
            } catch (err) {
                throw new Error(err)
            }
        }else{
            throw new Error("Unauthorized access")
        }
    }
}
