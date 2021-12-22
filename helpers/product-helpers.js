var db = require('../config/connection')
var collection = require('../config/collection')
var objectId = require('mongodb').ObjectId
var bcrypt = require('bcrypt')

const { resolve, reject } = require('promise')
const { response } = require('express')
module.exports = {


    addProductKadher: (progressKavu, callback) => {
      
        db.get().collection('progressKavu').insertOne(progressKavu).then((tata) => {
     
            callback(tata.insertedId);

        })
    },

    addProductSudheesh: (progressSudheesh, callback) => {
      
        db.get().collection('progressSudheesh').insertOne(progressSudheesh).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProductAbdu: (progressAbdu, callback) => {
       
    db.get().collection('progressAbdu').insertOne(progressAbdu).then((lata) => {
         
            callback(lata.insertedId);

        })
    },

    addProductVibin: (progressVibin, callback) => {
    
db.get().collection('progressVibin').insertOne(progressVibin).then((mata) => {
          
            callback(mata.insertedId);

        })
    },




     getKadherProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let progressKavuAdmin = await db.get().collection(collection.KAVU_COLLECTION).find().toArray()
            resolve(progressKavuAdmin)
        })
     },

     getSudheeshProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let progressSudheeshAdmin = await db.get().collection(collection.SUDHEESH_COLLECTION).find().toArray()
            resolve(progressSudheeshAdmin)
        })
     },

      getAbduProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let progressAbduAdmin = await db.get().collection(collection.ABDU_COLLECTION).find().toArray()
            resolve(progressAbduAdmin)
        })
   
     },

     getVibinProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let progressVibinAdmin = await db.get().collection(collection.VIBIN_COLLECTION).find().toArray()
            resolve(progressVibinAdmin)
        })
     },




    
 

    doLogin: (adminData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false;
            let response = {}
            let admin = await db.get().collection(collection.admin).findOne({ Email: adminData.Email })
            if (admin) {
                bcrypt.compare(userData.Password, admin.Password).then((status) => {
                    if (status) {

                        response.admin = admin;
                        response.status = true;
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

    deleteAbdu:(abduId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ABDU_COLLECTION).deleteOne({_id:objectId(abduId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteKavu:(kavuId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.KAVU_COLLECTION).deleteOne({_id:objectId(kavuId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteSudheesh:(sudheeshId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.SUDHEESH_COLLECTION).deleteOne({_id:objectId(sudheeshId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteVibin:(VibinId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.VIBIN_COLLECTION).deleteOne({_id:objectId(VibinId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },


    deleteDatson:(DatsonId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.DATSON_COLLECTION).deleteOne({_id:objectId(DatsonId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteAutoA:(AutoAId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.AutoA_COLLECTION).deleteOne({_id:objectId(AutoAId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteAutoB:(AutoBId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.AutoB_COLLECTION).deleteOne({_id:objectId(AutoBId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteTsA:(TsAId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.TsA_COLLECTION).deleteOne({_id:objectId(TsAId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteTsB:(TsBId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.TsB_COLLECTION).deleteOne({_id:objectId(TsBId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteTopcorn:(TopcornId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.TOPCORN_COLLECTION).deleteOne({_id:objectId(TopcornId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    
    deleteGeo:(GeoId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.GEO_COLLECTION).deleteOne({_id:objectId(GeoId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteComnovA:(ComnovAId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.COMNOV_A_COLLECTION).deleteOne({_id:objectId(ComnovAId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },


    deleteComnovB:(ComnovBId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.COMNOV_B_COLLECTION).deleteOne({_id:objectId(ComnovBId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteComnovC:(ComnovCId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.COMNOV_C_COLLECTION).deleteOne({_id:objectId(ComnovCId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },


    deleteTrimble:(TrimbleId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.TRIMBLE_COLLECTION).deleteOne({_id:objectId(TrimbleId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteEECO:(EECOId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.EECO_COLLECTION).deleteOne({_id:objectId(EECOId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteGlamerNew:(GlamerNewId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.GLAMER_NEW_COLLECTION).deleteOne({_id:objectId(GlamerNewId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },


    deleteGlamerOld:(GlamerOldId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.GLAMER_OLD_COLLECTION).deleteOne({_id:objectId(GlamerOldId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },

    deleteActiva:(ActivaId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ACTIVA_COLLECTION).deleteOne({_id:objectId(ActivaId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },


    
    deleteHero:(HeroId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.HERO_COLLECTION).deleteOne({_id:objectId(HeroId)}).then((reponse)=>{
                resolve(response)
            })
        })
    },
    //deleteAutoA

    getAbduDetails:(abduId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.ABDU_COLLECTION).findOne({_id:objectId(abduId)}).then((abdu)=>{
                resolve(abdu)
            })
        })
    },

    getKavuDetails:(kavuId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.KAVU_COLLECTION).findOne({_id:objectId(kavuId)}).then((kavu)=>{
                resolve(kavu)
            })
        })
    },

    getVibinDetails:(vibinId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.VIBIN_COLLECTION).findOne({_id:objectId(vibinId)}).then((vibin)=>{
                resolve(vibin)
            })
        })
    },

    getSudheeshDetails:(sudheeshId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.SUDHEESH_COLLECTION).findOne({_id:objectId(sudheeshId)}).then((sudheesh)=>{
                resolve(sudheesh)
            })
        })
    },
    updateAbdu:(abduId,abduDetails)=>{
        return new Promise((resolve,reject)=>{
             db.get().collection(collection.ABDU_COLLECTION)
             .updateOne({_id:objectId(abduId)},{
                 $set:{
                    

                    ProjectName:abduDetails.ProjectName,
                    progress:abduDetails.progress,
                    ResourcesMachine:abduDetails.ResourcesMachine,
                    startingTime:abduDetails.startingTime,
                    CompetionTime:abduDetails.CompetionTime,
                    PendingAmount:abduDetails.PendingAmount,
                    Remarks:abduDetails.Remarks,
                 }
             }).then((response)=>{
                 resolve()
             })
        })
    },




    updateKavu:(kavuId,kavuDetails)=>{
        return new Promise((resolve,reject)=>{
             db.get().collection(collection.KAVU_COLLECTION)
             .updateOne({_id:objectId(kavuId)},{
                 $set:{
   

                    ProjectName:kavuDetails.ProjectName,
                    progress:kavuDetails.progress,
                    ResourcesMachine:kavuDetails.ResourcesMachine,
                    startingTime:kavuDetails.startingTime,
                    CompetionTime:kavuDetails.CompetionTime,
                    PendingAmount:kavuDetails.PendingAmount,
                    startingTime:kavuDetails.Remarks,
                 }
             }).then((response)=>{
                 resolve()
             })
        })
    },

    updateVibin:(vibinId,vibinDetails)=>{
        return new Promise((resolve,reject)=>{
             db.get().collection(collection.VIBIN_COLLECTION)
             .updateOne({_id:objectId(vibinId)},{
                 $set:{
                  
                    ProjectName:vibinDetails.ProjectName,
                    progress:vibinDetails.progress,
                    ResourcesMachine:vibinDetails.ResourcesMachine,
                    startingTime:vibinDetails.startingTime,
                    CompetionTime:vibinDetails.CompetionTime,
                    PendingAmount:vibinDetails.PendingAmount,
                    startingTime:vibinDetails.Remarks,
                 }
             }).then((response)=>{
                 resolve()
             })
        })
    },

    updateSudheesh:(sudheeshId,sudeeshDetails)=>{
        return new Promise((resolve,reject)=>{
             db.get().collection(collection.SUDHEESH_COLLECTION)
             .updateOne({_id:objectId(sudheeshId)},{
                 $set:{
                    ProjectName:sudeeshDetails.ProjectName,
                    progress:sudeeshDetails.progress,
                    ResourcesMachine:sudeeshDetails.ResourcesMachine,
                    startingTime:sudeeshDetails.startingTime,
                    CompetionTime:sudeeshDetails.CompetionTime,
                    PendingAmount:sudeeshDetails.PendingAmount,
                    startingTime:sudeeshDetails.Remarks,
                 }
             }).then((response)=>{
                 resolve()
             })
        })
    },
}