const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const {APP_SECRET} = require('../const')
const {getUserId} = require('../utils/utils');

const getID =  `{ id }`

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

const queryUsers = `{
    id,
    email,
    password
}`

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

async function signup(parent,args,context,info) {
    const password = await bcrypt.hash(args.password,10)
    
    const users  = await context.db.mutation.createUsers(
       {data:{...args,password}},queryUsers)

    const token = await jsonwebtoken.sign({userId:users.id},APP_SECRET)
 
    return {
        token,
        users
    }
}

async function login(parent,args,context,info){


    const users = await context.db.query.users({
        where:{email:args.email}
    })

    if(!users) throw new Error("Not such user find");

    console.log(users.password,args.password)
    const validPassword =  await bcrypt.compare(args.password,users.password);
    console.log(validPassword)
    if(!validPassword) throw new Error("Invalid password")

    const token = await jsonwebtoken.sign({userId:users.id},APP_SECRET)
    console.log("----->",users)

    return {
        token,
        users
    }

}

module.exports = {
    signup,
    login
}