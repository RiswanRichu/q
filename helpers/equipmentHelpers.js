var db = require('../config/connection')
var collection = require('../config/collection')
var objectId = require('mongodb').ObjectId
var bcrypt = require('bcrypt')

const { resolve, reject } = require('promise')
const { response } = require('express')
module.exports = {
    getTrimbleProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getTrimbleProgress = await db.get().collection(collection.TRIMBLE_COLLECTION).find().toArray()
            resolve(getTrimbleProgress)
        })
    },


    getComnovAProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getComnovAProgress = await db.get().collection(collection.COMNOV_A_COLLECTION).find().toArray()
            resolve(getComnovAProgress)
        })
    },

    getComnovBProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getComnovBProgress = await db.get().collection(collection.COMNOV_B_COLLECTION).find().toArray()
            resolve(getComnovBProgress)
        })
    },

    getComnovCProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getComnovCProgress = await db.get().collection(collection.COMNOV_C_COLLECTION).find().toArray()
            resolve(getComnovCProgress)
        })
    },



    getTsAProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getTsAProgress = await db.get().collection(collection.TsA_COLLECTION).find().toArray()
            resolve(getTsAProgress)
        })
    },


    getTsBProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getTsBProgress = await db.get().collection(collection.TsB_COLLECTION).find().toArray()
            resolve(getTsBProgress)
        })
    },

    getGeoMaxTsrogress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getGeoMaxTsProgress = await db.get().collection(collection.GEO_COLLECTION).find().toArray()
            resolve(getGeoMaxTsProgress)
        })
    },


    getTopcornProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getTopcornProgress = await db.get().collection(collection.TOPCORN_COLLECTION).find().toArray()
            resolve(getTopcornProgress)
        })
    },


    getTopcornProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getTopcornProgress = await db.get().collection(collection.TOPCORN_COLLECTION).find().toArray()
            resolve(getTopcornProgress)
        })
    },


    getAutoAProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getAutoAProgress = await db.get().collection(collection.AutoA_COLLECTION).find().toArray()
            resolve(getAutoAProgress)
        })
    },

    getAutoBProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getAutoBProgress = await db.get().collection(collection.AutoB_COLLECTION).find().toArray()
            resolve(getAutoBProgress)
        })
    },
    

    getDatsonProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getDatsonProgress = await db.get().collection(collection.DATSON_COLLECTION).find().toArray()
            resolve(getDatsonProgress)
        })
    },


    getEECOProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getEECOProgress = await db.get().collection(collection.EECO_COLLECTION).find().toArray()
            resolve(getEECOProgress)
        })
    },
    

    getGlamerNewProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getGlamerNewProgress = await db.get().collection(collection.GLAMER_NEW_COLLECTION).find().toArray()
            resolve(getGlamerNewProgress)
        })
    },
    

    getGlamerOldProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getGlamerOldProgress = await db.get().collection(collection.GLAMER_OLD_COLLECTION).find().toArray()
            resolve(getGlamerOldProgress)
        })
    },
    


    getActivaProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getActivaProgress = await db.get().collection(collection.ACTIVA_COLLECTION).find().toArray()
            resolve(getActivaProgress)
        })
    },
    


    getHeroProgress:()=>{
        return new Promise(async(resolve,reject)=>{
            let getHeroProgress = await db.get().collection(collection.HERO_COLLECTION).find().toArray()
            resolve(getHeroProgress)
        })
    },
    
































    
    addProgressTrimble: (trimbleProgress, callback) => {
      
            db.get().collection(collection.TRIMBLE_COLLECTION).insertOne(trimbleProgress).then((data) => {
         
                callback(data.insertedId);
    
            })
        },

        
    addProgressComnovA: (ComnovAProgress, callback) => {
      
        db.get().collection(collection.COMNOV_A_COLLECTION).insertOne(ComnovAProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

           
    addProgressComnovB: (ComnovBProgress, callback) => {
      
        db.get().collection(collection.COMNOV_B_COLLECTION).insertOne(ComnovBProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressComnovC: (ComnovCProgress, callback) => {
      
        db.get().collection(collection.COMNOV_C_COLLECTION).insertOne(ComnovCProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },
    

    addProgressTsA: (TsAProgress, callback) => {
      
        db.get().collection(collection.TsA_COLLECTION).insertOne(TsAProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressTsB: (TsBProgress, callback) => {
      
        db.get().collection(collection.TsB_COLLECTION).insertOne(TsBProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressGeoMaxTs: (GeoMaxTsProgress, callback) => {
      
        db.get().collection(collection.GEO_COLLECTION).insertOne(GeoMaxTsProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressTopcorn: (TopcornProgress, callback) => {
      
        db.get().collection(collection.TOPCORN_COLLECTION).insertOne(TopcornProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },







    addProgressAutoA: (AutoAProgress, callback) => {
      
        db.get().collection(collection.AutoA_COLLECTION).insertOne(AutoAProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressAutoB: (AutoBProgress, callback) => {
      
        db.get().collection(collection.AutoB_COLLECTION).insertOne(AutoBProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    //Vehicle

    addProgressDatson: (DatsonProgress, callback) => {
      
        db.get().collection(collection.DATSON_COLLECTION).insertOne(DatsonProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },
    

    addProgressEECO: (EECOProgress, callback) => {
      
        db.get().collection(collection.EECO_COLLECTION).insertOne(EECOProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressglamerNew: (glamerNewProgress, callback) => {
      
        db.get().collection(collection.GLAMER_NEW_COLLECTION).insertOne(glamerNewProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },


    addProgressglamerOld: (glamerOldProgress, callback) => {
      
        db.get().collection(collection.GLAMER_OLD_COLLECTION).insertOne(glamerOldProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressActiva: (ActivaProgress, callback) => {
      
        db.get().collection(collection.ACTIVA_COLLECTION).insertOne(ActivaProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

    addProgressHero: (HeroProgress, callback) => {
      
        db.get().collection(collection.HERO_COLLECTION).insertOne(HeroProgress).then((data) => {
     
            callback(data.insertedId);

        })
    },

}
//addProgressEECO