import express from "express";
import cors from "cors"
import path from "path"
const __dirname = path.resolve()
const app = express()
app.use(cors())

// app.get('/',(req,res)=>{
//     res.send('Hello World')
// })
app.get('/weather/:cityName',(req,res)=>{
    let weatherData = {
        karachi:{
            name:"karachi",
            temperature:30,
            humidity:40,
            cloud:60
        },
        lahore:{
            name:"lahore",
            temperature:35,
            humidity:25,
            cloud:43
        }
    }


    let userInputCityName = req.params.cityName.toLowerCase()

    console.log(userInputCityName)
    let weatherDataSend = weatherData[userInputCityName]

    if(weatherDataSend){
        res.send(weatherDataSend)
    }else{
        res.status(404).send(`Weather Data Is not Available for ${req.params.cityName}`)
    }
})



app.use('/', express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running in this PORT:${PORT}`)
})