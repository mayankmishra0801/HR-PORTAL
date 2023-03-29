const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')

const checkUserAuth = async(req,res,next) =>{
    const token = req.headers.authorization.split(' ')[1];

    if(!token) return res.status(401).send('Access Denied !');

    console.log("ourtoken",token);

    try{
        const UserID = await jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log("Your",UserID)

        if(!UserID){
            return res.send("test not done")
        }

        req.user = UserID;
        next();

    }
    catch(error){
     res.status(400).send('Invalid token !');

    }

        


}