const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const {APP_SECRET} = require('../const')

const queryDevice = `{
    id,
    sigfox,
    name,
    marcaVehicle,
    modeloVehicle,
    placaVehicle,
    image_url_fvehicle,
    image_url_lvehicle,
    image_url_rvehicle,
    image_url_bvehicle,
    image_url_conductor,
    conductorFullName,
    conductorAddress,
    conductorDistrict,
    conductorNumExt,
    conductorNumInt,
    conductorTel,
    lastLocation,
    contTravel,
    contTime,
    contKm,
    contEfectivo,
    create_at,
    updated_at
}`

async function addDevice(parent,args,context,info) {
/*     let newDevice = await context.db.mutation.addDevice(
        {data:{...args:{
            create:
        }}
    }) */
}