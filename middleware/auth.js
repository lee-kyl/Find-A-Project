const jwt = require('jsonwebtoken');
//middleware for every user interact.
const auth = async (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        let decodedData;
        //todo if here is azure auth implemented token should be distinguished.
        
        if(token){
            //verify token by setted secret 'demo'
            decodedData = jwt.verify(token, 'demo');
            req.userId = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

module.exports = auth;