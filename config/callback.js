module.exports = {
    createDATA: function (value) {
        return new Object({
            message: "Successfully Created",
            data: value
        })
    },
    errorDATA: function (error) {
        return new Object({
            message: "Failed",
            data: error
        })
    },
    getALL_DATA: function (value) {
        return new Object({
            message: "Successfully ",
            count: value.length,
            data: value
        })
    },
    update_DATA: function (value) {
        return new Object({
            message: "Successfully Updated",
            data: value
        })
    },
    delete_DATA: function () {
        return new Object({
            message: "Successfully Deleted",
            data: []
        })
    },


}