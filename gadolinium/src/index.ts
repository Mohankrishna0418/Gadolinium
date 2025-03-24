import "dotenv/config";
import jwt from 'jsonwebtoken';

const seckey = process.env.SECRET_KEY || "";

/* console.log(seckey) */

const payload: jwt.JwtPayload = {
  iss: "https://purpleshoy.co.in",
  sub: "Mohankrishna0418",
}


const token = jwt.sign(payload, seckey, {
  algorithm: "HS256",
});

console.log(token);

try{
  const decodepayload = jwt.verify(token,seckey);
  console.log("\n Decoded payload:", decodepayload);
}catch(e){
  console.log("error", e);
}  