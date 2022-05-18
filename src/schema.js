const { gql } = require("apollo-server");

module.exports = gql`
type Query {
   users: [User!]!
   posts: [Post!]!
   login(data:LoginInput) : LoginPayload!
}
type Mutation {
   createUser(data: CreateUserInput):User!
   deleteUser: User!
   updateUser(id: ID!, data: UpdateUserInput ): User!
   createPost(data: CreatePostInput):Post!
}
input CreatePostInput {
   title: String!
   body: String!
}
type Post{
   _id: ID!
   title: String!
   body: String!
   published: Boolean!
   author: User!
}
type LoginPayload {
   token: String!
   user: User!
}
input LoginInput{
   email: String!
   password: String!
}

input UpdateUserInput {
   name: String
   email: String
   age: Int
}
type User{
   _id: ID!
   name: String!
   email: String!
   password: String
   age: Int
   posts: [Post!]!
}
input CreateUserInput{
   name: String!
   email: String!
   password: String!
   age: Int
}
`