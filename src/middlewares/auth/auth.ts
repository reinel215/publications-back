// const { config } = require("../../config/config");
// const getHeaderToken = require("../../utils/getHeaderToken");
// import express, { Express, Request, Response } from 'express';


// const isAuth = (req, res, next) => {
//     try {
//         const accessToken = getHeaderToken({req});  

//         if (accessToken == null) {
//             next({ status: 400, message: "Invalid access token" });
//             return;
//         }
    
//         jwt.verify(accessToken, config.accessTokenSecret, (err, user) => {
//             if (err) {
//                 next({ status: 400, message: "Error in token verification" });
//                 return;
//             }
//             req.user = user;
//             next();
//         }); 

//     } catch (error) {
//         next({ status: 500, message: "Token in the header is invalid." });
//     }
    

// }


// module.exports = isAuth;
