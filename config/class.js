const CALLBACK = require('../config/callback')
module.exports = class MyClass {
    constructor(ModelSchema, Request, Response, Next) {
        this.model = ModelSchema;
        this.req = Request
        this.res = Response
        this.next = Next
    }


    // @description: Malumotlar yaratish uchun class
    async Create_New_Data() {
        const ModelData = this.model
        const req = this.req
        const res = this.res
        const next = this.next
        const default_Request_Body = { ...req.body }
        const result = ModelData(default_Request_Body)
        await result.save()
            .then(() => res.json(CALLBACK.createDATA(result)))
            .catch((error) => res.json(CALLBACK.errorDATA(error)))
    }

    // @description: Hamma malumotlarni olish uchun class
    async Find_All_Data() {
        const ModelData = this.model
        const req = this.req
        const res = this.res
        const next = this.next
        await ModelData.find().sort({createdat: -1}).exec((error, data) => {
            if(error) {
                res.json(CALLBACK.errorDATA(error))
            }else {
                res.json(CALLBACK.getALL_DATA(data))
            }
        })
    }

    // @description: Alohida id boyicha malumotlarni olish uchun class
    async Find_One_Data() {
        const ModelData = this.model
        const req = this.req
        const res = this.res
        const next = this.next
        await ModelData.findById(req.params.id).exec((error, data) => {
            if(error) {
                res.json(CALLBACK.errorDATA(error))
            }else {
                res.json(CALLBACK.getALL_DATA(data))
            }
        })
    }

    // @description: Alohida id boyicha malumotlarni olish uchun class
    async Delete_One_Data() {
        const ModelData = this.model
        const req = this.req
        const res = this.res
        const next = this.next
        await ModelData.findByIdAndDelete(req.params.id).exec((error, data) => {
            if(error) {
                res.json(CALLBACK.errorDATA(error))
            }else {
                res.json(CALLBACK.delete_DATA(data))
            }
        })
    }



}