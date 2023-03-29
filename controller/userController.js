const UserModel = require("../models/user");
require('dotenv').config()

const register = async (req,res) =>{
  const { username,email,password} = req.body;
  const user = await UserModel.findOne({email:email});

  if(user){
    res.send({status:"failed",message:"Email Already Exist"});

  }
  else{
    if(username && email && password && company){
        try{

            console.log(req.user)

            const newuser = new UserModel({
                 username:username,
                 email :email,
                 password:hasPassword,
                 company:company,
            });
            await newuser.save();

        }
        catch(error){
            console.log(error);
            res.send({status:"failed",message:"unable to register"});

        }
    }else{
        res.send({status:"failed",message:"All fields are required"});
    }
  }


};

const login = async (req,res) =>{
    try{

        const {email,password} = req.body;

        if(email && password){
            const user = await UserModel.findOne({email:email});
        
        if (user != null){
            const isMatch = await bcrypt.compare(password,user.password);

             if(user.email == email && isMatch){
                //JWT token
                const token = jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
                res.cookie('jwt',token,{
                    httpOnly:true,
                    maxAge:24*60*60*1000 //1 day
                })
                res.send({status:"Success",message:"Login Success","token":token});
             } else{
                res.send({
                    status:"failed",
                    message:"Email or Password are not valid",
                });
             }
        } else{
            res.send({
                status:"failed",
                message:"Email or Password are not valid",
            });
        }


        }else{
            res.send({
                status:"failed",
                message:"you are not a registered user",
            });
        }
    } catch(error){
        console.log(error);
        res.send({status:"failed",message:"unable to Login"});
    }
}

const auth = function(req,res){
    console.log(req.body)
    res.send({
        message:"dashboard"
    })
}

module.exports = {register,login,auth};
