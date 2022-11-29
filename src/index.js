import app from './app'
import './databese'

app.listen(app.get('port'), ()=>{
    console.log('Servidor levantado en el puerto', app.get('port'))
})



