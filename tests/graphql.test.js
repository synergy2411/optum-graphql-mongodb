const { ApolloClient, gql, InMemoryCache } = require("@apollo/client")
require("cross-fetch/polyfill");

let client;

beforeEach(()=>{
    client = new ApolloClient({
        uri : "http://localhost:4040/graphql",
        cache : new InMemoryCache()
    })
})

test("Should receive all 'users' - Query", async () => {
    const result = await client.query({
        query : gql`
            query {
                users {
                    _id
                    name
                    email
                }
            }
        `
    })
    // expect(result).not.toBeUndefined()
    // expect(result.data).not.toBeUndefined()
    expect(result.data.users).not.toHaveLength(0)
})

test("Should create user - Mutation", async () => {
    const result = await client.mutate({
        mutation : gql`
            mutation {
                createUser(data: {
                    name: "test1",
                    email: "test1@test",
                    password: "test1123"
                }){
                    _id
                    name
                    email
                }
            }
        `
    })

    // expect(result.data).not.toBeUndefined()
    // expect(result.data.createUser._id).not.toBeUndefined()
    expect(result.data.createUser.name).toMatch(/test1/)
})  