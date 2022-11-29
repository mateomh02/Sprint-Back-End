import express from "express"
import ordersRoutes from './routes/order.router'
import registerRoutes from './routes/register.router'

const app = express()

app.set('port', 3000)

app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: ""})
})

app.post('/', (req, res)=>{
    res.json({message: ""})
});

app.use('/api/orders', ordersRoutes)

app.use('/api/register', registerRoutes)





export default app