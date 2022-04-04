const FaqModel = require('../model/faqModel')
const MyClass = require('../config/class')
const CALLBACK = require('../config/callback')
// @description: malumotni yaratish uchun
// @api: /api/faq/create
// @method: POST
exports.createData = async (req, res, next) => {
    const result = new MyClass(FaqModel, req, res, next)
    result.Create_New_Data()
}
// @description: hamma malumotlarni olish
// @api: /api/faq/all
// @method: GET
exports.getAll = async (req, res, next) => {
    const result = new MyClass(FaqModel, req, res, next)
    result.Find_All_Data()
}
// @description:  alohida id boyicha malumot olish
// @api: /api/faq/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    const result = new MyClass(FaqModel, req, res, next)
    result.Find_One_Data()
}
// @description: alohida id boyicha malumotni  tahrirlash
// @api: /api/faq/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await FaqModel.findByIdAndUpdate(req.params.id).exec(async (error, data) => {
        if (error) {
            res.json(CALLBACK.errorDATA(error))
        } else {
            data.answer = req.body.answer
            data.question = req.body.question
            await data.save()
                .then(() => {
                    res.json(CALLBACK.update_DATA(data))
                })
                .catch((error) => {
                    res.json(CALLBACK.errorDATA(error))
                })
        }
    })
}
// @description:  alohida id boyicha malumot o'chirish
// @api: /api/faq/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    const result = new MyClass(FaqModel, req, res, next)
    result.Delete_One_Data()
}
