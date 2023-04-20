import { SECRET_KEY } from "../config/globalKey.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Models } from "../model/index.js";

export const GenerateToken = (user) => {
  return new Promise(async (resovle, reject) => {
    try {
      let token = jwt.sign(
        {
          _id: user._id,
          phoneNumber: user.phoneNumber,
        },
        `${SECRET_KEY}`,
        { expiresIn: "7d" }
      );
      resovle({ token });
    } catch (error) {
      reject(error);
    }
  });
};
export const CheckPric = (price,priceTotal) => {
  return new Promise(async (resovle, reject) => {
    try {
       if(price != priceTotal){
       } 
       resovle({isMatch: true});
    } catch (error) {
      reject(error);
    }
  });
};
export const VerifyToken = (token)=>{
  return new Promise(async(resovle,reject)=>{
    try {
      
      jwt.verify(token, `${SECRET_KEY}` , async (err,decode)=> {
        if(err) return reject(err);
        const user = Models.User.findOne({_id: decode._id})
        resovle(user)
      })
    } catch (error) {
      console.log(error);
      reject(error);
    }
  })
}

export const ComparePassword = (user, password) => {
  return new Promise(async (resovle, reject) => {
    try {
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return reject(err);
        resovle(isMatch);
      });
    } catch (error) {
      reject(error);
    }
  });
};
