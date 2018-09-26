async function devices(parent,args,context,info) {
    return context.db.query.devices({},info)
}

async function device(parent,args,context,info) {
    return context.db.query.device({where: {id}},info)
}

async function messages(parent,args,context,info) {
    return context.db.query.messages({},info)
}

async function message(parent,args,context,info) {
    return context.db.query.message({where: {id}},info)
}

module.exports = {
    devices,
    device,
    messages,
    message
}