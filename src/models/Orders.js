import { Schema, model} from 'mongoose';

const orderSchema = new Schema({
    nombreDestinatario:{
        type: String,
        required: true,
        trim: true
    },
    largo : Number,
    ancho : Number,
    alto : Number,
    peso : Number,
    estado: String,
    dirRecogida: String,
    ciuRecogida : String,
    cedula: Number,
    dirEntrega: String,
    ciuEntrega:  String
},{
    timestamps : true,
    versionKey: false
})

export default model('Orders', orderSchema)