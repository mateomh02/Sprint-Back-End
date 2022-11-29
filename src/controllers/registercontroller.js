import Register from '../models/Register'

export const newRegister = async (req, res)=>{
    try {
        const newRegister = new Register({
            nombres: req.body.nombres,
            usuario: req.body.usuario,
            contra: req.body.contra,
            correo: req.body.correo
        })
        await newRegister.save()
        console.log(newRegister)
        res.json({message: 'Usuario Registrado'})
    } catch (error) {
        res.status(500).json({message: error.message || "Algo fallo al intentar registrar tu usuario"})
    } 
}

export const findAllRegisters = async (req, res)=>{
    try {
        const registers = await Register.find()
        res.json(registers)
    } catch (error) {
        res.status(500).json({message:"Algo fallo al intentar buscar tu usuario"})
    }
}