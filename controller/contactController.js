const ContactModel = require('../model/ContactModel')
const MyClass = require('../config/class')
const CALLBACK = require('../config/callback')
// @description: malumotni yaratish uchun
// @api: /api/contact/create
// @method: POST
exports.createData = async (req, res, next) => {
    const result = new MyClass(ContactModel, req, res, next)
    result.Create_New_Data()
}
// @description: hamma malumotlarni olish
// @api: /api/contact/all
// @method: GET
exports.getAll = async (req, res, next) => {
    const {
        status
    } = req.body
    if (status == 1) {
        await ContactModel.find({
            status: {
                $eq: '1'
            }
        }).exec((error, data) => {
            if (error) { res.json(error) }
            else { res.json(data) }
        })
    } else if (status == 2) {
        await ContactModel.find({
            status: {
                $eq: '2'
            }
        }).exec((error, data) => {
            if (error) { res.json(error) }
            else { res.json(data) }
        })
    } else if (status == 3) {
        await ContactModel.find({
            status: {
                $eq: '3'
            }
        }).exec((error, data) => {
            if (error) { res.json(error) }
            else { res.json(data) }
        })
    }
}
// @description:  alohida id boyicha malumot olish
// @api: /api/contact/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    const result = new MyClass(ContactModel, req, res, next)
    result.Find_One_Data()
}
// @description: alohida id boyicha malumotni  tahrirlash
// @api: /api/contact/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await ContactModel.findByIdAndUpdate(req.params.id).exec(async (error, data) => {
        if (error) {
            res.json(CALLBACK.errorDATA(error))
        } else {
            const {
                status
            } = req.body
            if (status == 1) {
                data.status = "1"
                await data.save()
                    .then(() => {
                        res.json(CALLBACK.update_DATA(data))
                    })
                    .catch((error) => {
                        res.json(CALLBACK.errorDATA(error))
                    })
            } else if (status == 2) {
                data.status = "2"
                await data.save()
                    .then(() => {
                        res.json(CALLBACK.update_DATA(data))
                    })
                    .catch((error) => {
                        res.json(CALLBACK.errorDATA(error))
                    })
            } else if (status == 3) {
                data.status = "3"
                await data.save()
                    .then(() => {
                        res.json(CALLBACK.update_DATA(data))
                    })
                    .catch((error) => {
                        res.json(CALLBACK.errorDATA(error))
                    })
            }
        }
    })
}
// @description:  alohida id boyicha malumot o'chirish
// @api: /api/contact/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    const result = new MyClass(ContactModel, req, res, next)
    result.Delete_One_Data()
}
