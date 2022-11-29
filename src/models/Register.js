import { Schema, model} from 'mongoose';

const orderRegister = new Schema({
    nombres: String,
    usuario: String,
    contra: String,
    correo: String

},{
    timestamps : true,
    versionKey: false
})

export default model('Register', orderRegister)