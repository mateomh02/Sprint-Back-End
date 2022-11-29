import Orders from '../models/Orders'

export const newOrder = async (req, res)=>{
    if(!req.body.nombreDestinatario){
        return res.status(400).send({message: "El campo del nombre del destinatario esta vacio"})
    }
    try {
        const newOrder = new Orders({
            nombreDestinatario: req.body.nombreDestinatario,
            largo: req.body.largo,
            ancho: req.body.ancho,
            alto: req.body.alto,
            peso: req.body.peso,
            estado: req.body.estado,
            dirRecogida: req.body.dirRecogida,
            ciuRecogida: req.body.ciuRecogida,
            cedula: req.body.cedula,
            dirEntrega: req.body.dirEntrega,
            ciuEntrega: req.body.ciuEntrega
        })
        await newOrder.save()
        console.log(newOrder)
        res.json({message: 'Orden registrada'})
    } catch (error) {
        res.status(500).json({message: error.message || "Algo fallo al intentar guardar la orden de recogida del paquete"})
    } 
}

export const findAllOrders = async (req, res)=>{
    try {
        const orders = await Orders.find()
        res.json(orders)
    } catch (error) {
        res.status(500).json({message:"Algo fallo al intentar buscar tu orden de recogida de pedido"})
    }
    
}

export const findOneOrder= async (req, res)=>{
    try {
        const order = await Orders.find(req.params.id)
        res.json(order)
    } catch (error) {
        console.warn(error)
    }
}

export const deleteOrder = async (req, res)=>{
    try {
        const id = req.params.id
        await Orders.findByIdAndDelete(id)
        res.json({message: `La orden de recogida del paquete con id: ${id}, ha sido eliminada`})
    } catch (error) {
        console.warn(error)
    }
}

export const updateOrder = async (req, res)=>{
    try {
        const{ id } = req.params
        await Orders.findByIdAndUpdate(id, req.body)
        res.json({message: `La orden de recogida del paquete con id: ${id}, ha sido actualizada`})
    } catch (error) {
        console.warn(error)
    }
}

