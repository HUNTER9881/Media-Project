const GenreModel = require('../model/genreModel')
const MyClass = require('../config/class')
const CALLBACK = require('../config/callback')
// @description: malumotni yaratish uchun
// @api: /api/genre/create
// @method: POST
exports.createData = async (req, res, next) => {
    const result = new MyClass(GenreModel, req, res, next)
    result.Create_New_Data()
}
// @description: hamma malumotlarni olish
// @api: /api/genre/all
// @method: GET
exports.getAll = async (req, res, next) => {
    const result = new MyClass(GenreModel, req, res, next)
    result.Find_All_Data()
}
// @description:  alohida id boyicha malumot olish
// @api: /api/genre/:id
// @method: GET
exports.getOne = async (req, res, next) => {
    const result = new MyClass(GenreModel, req, res, next)
    result.Find_One_Data()
}
// @description: alohida id boyicha malumotni  tahrirlash
// @api: /api/genre/:id
// @method: PUT
exports.updateOne = async (req, res, next) => {
    await GenreModel.findByIdAndUpdate(req.params.id).exec(async (error, data) => {
        if (error) {
            res.json(CALLBACK.errorDATA(error))
        } else {
            data.name.uz = req.body.nameuz
            data.name.ru = req.body.nameru
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
// @api: /api/genre/:id
// @method: DELETE
exports.deleteOne = async (req, res, next) => {
    const result = new MyClass(GenreModel, req, res, next)
    result.Delete_One_Data()
}
