import express from 'express'
import { Names, s_name, a_name, d_name, u_name } from './databases.js'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(express.json())  


app.get('/userName', async (req, res)=>{
    const name = await Names() 
    res.json({names: name})

    // res.send(name[0])
})

app.get('/userName/:id', async (req, res)=>{
    const id = req.params.id
    const names = await s_name(id) 
    res.send(names)
}) 

app.post('/userName/add', async (req, res)=>{
    console.log(req.body)
    const {name} = req.body
    const  name_h = await a_name(name) 
    res.status(201).send(name_h)
})
app.delete('/userName/d', async (req, res)=>{
    console.log(req.body)
    const {id} = req.body     
     await d_name(id)
    // res.status(201).send(name_h)  
})
app.post('/userName/upd', async (req, res)=>{
    console.log(req.body) 
    const {id, tulbur} = req.body
    const s=await s_name(id)
    console.log(s.tulbur)
    await u_name(id,tulbur+s.tulbur) 
    // res.status(201).send(name_h)
})
app.use((err, req, res, next)=>{
    console.error(err.stack) 
    res.status(500).send('something  broke')
})

app.listen(8080, ()=>{ 
    console.log("server aslaa")
})  