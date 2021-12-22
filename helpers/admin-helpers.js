var db = require('../config/connection')
var collection = require('../config/collection')
const bcrypt = require('bcrypt')
const { response } = require('express')

module.exports={
    doAdminSignup:(adminData)=>{
      return new Promise(async(resolve,reject)=>{
        adminData.Passwords = await bcrypt.hash(adminData.Passwords,10)
        db.get().collection(collection.ADMIN_COLLECTION).insertOne(adminData).then((data) => { 
          
        resolve(data.insertedId) })
      })
    
    },
    doSudheeshSignup:(sudheeshData)=>{
      return new Promise(async(resolve,reject)=>{
        sudheeshData.Passwords = await bcrypt.hash(sudheeshData.Passwords,10)
        db.get().collection(collection.SUDHEESH_ADMIN_COLLECTION).insertOne(sudheeshData).then((data) => { 
          
        resolve(data.insertedId) })
      })
    
    },

    doAdminLogin:(adminData)=>{
      return new Promise(async(resolve,reject)=>{
           let loginStatus = false
           let response = {}
           let admin = await db.get().collection(collection.ADMIN_COLLECTION).findOne({Email:adminData.Email})
           
           if (admin) {
              bcrypt.compare(adminData.Passwords,admin.Passwords).then((astatus)=>{
                  if (astatus) {
                    console.log("Admin Logined"); 
                    response.admin = admin
                    response.astatus = true
                    resolve(response)
                  }else{
                 
                    console.log("Unknown Man Trying To Login");
                    resolve({astatus:false})
                  }
              })
           }else{
            console.log("Unknown Man Trying To Login")
            resolve({astatus:false})
           }
      })
    },

    


}