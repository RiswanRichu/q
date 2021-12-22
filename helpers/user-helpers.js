var objectId = require("mongodb").ObjectID;
var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcrypt')
var objectId = require('mongodb').ObjectID


module.exports = {
    doSignup: (userData) => {
        return new Promise(async (resolve, reject) => {

            userData.Password = await bcrypt.hash(userData.Password, 10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data) => {
                db.get().collection(collection.USER_COLLECTION).findOne({ _id:objectId(data.insertedId) }).then((user) => {
                    resolve(user)
                })
            })
        })

    },
    doLogin: (userData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false;
            let response = {}
            let user = await db.get().collection(collection.USER_COLLECTION).findOne({ Email: userData.Email })
            if (user) {
                console.log(user);
                bcrypt.compare(userData.Password, user.Password).then((status) => {
                    if (status) {
                      
                        response.user = user;
                        response.status = true;
                        console.log(response);
                        resolve(response)
                    } else {
                    
                        resolve({ status: false })
                    }
                })
            } else {
             
                resolve({ status: false })
            }
        })
    },

  

   

    


   

}