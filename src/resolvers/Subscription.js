function newDeviceSubscribe(parent,args,context,info){
    return context.db.subscription.device(
        {where:
            {mutation_in:["CREATED"]}
        },info
    )
}

const newDevice = {
    subscribe:newDeviceSubscribe
}

module.exports={
    newDevice
}