const { getUserId } = require('../utils/utils')

async function users(parent,args,context,info) {
    return context.db.query.userses({},info)
}

async function me(parent,args,context,info){
    let id = getUserId(context)
    return context.db.query.user({where: {id}},info)
}

async function devices(parent,args,context,info) {
    return context.db.query.devices({},info)
}

async function device(parent,args,context,info) {
    return context.db.query.device({where: {id}},info)
}

async function messages(parent,args,context,info) {
    return context.db.query.messageses({},info)
}

async function message(parent,args,context,info) {
    return context.db.query.messages({where: {id}},info)
}

module.exports = {
    users,
    me,
    devices,
    device,
    messages,
    message
}