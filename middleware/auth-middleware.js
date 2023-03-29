const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')

const checkUserAuth = async(req,res,next) =>{
    const token = req.headers.authorization.split(' ')[1];

        


}