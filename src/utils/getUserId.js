const { verify } = require("jsonwebtoken")
const getUserId = request => {
    const authHeader = request.req.headers.authorization;
    if(authHeader){
        // extract token
        const token = authHeader.replace("Bearer ", "");        // Bearer theTokenValue
        const decode = verify(token,"SECRET_KEY")           // {iat :"", id:""}
        return decode.id;
    }else{
        throw new Error("Authentication required")
    }
}

module.exports = getUserId;