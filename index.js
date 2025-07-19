import express from "express"
const app=express()
const port = 3000
let id=1
let list=[]
app.use(express.json())

app.post('/add',(req,res)=>{
    const {name,email}=req.body
    const data ={id:id++,name,email}
    list.push(data)
    res.status(200).send(data)
})

app.get('/viewall',(req,res)=>{
    res.status(201).send(list)
})

app.get('/view/:id',(req,res)=>{
    const key = list.find(x=>x.id===parseInt(req.params.id))
    if (!key) {
        return res.status(404).send("Id not found")
    }
    res.status(200).send(key)
})

app.put('/update/:id',(req,res)=>{
    const key = list.find(x=>x.id===parseInt(req.params.id))
    if (!key) {
        return res.status(404).send("Id not found")
    }
    const {name,email}=req.body
    key.name=name
    key.email=email
    res.status(201).send(key)
})

app.delete('/delete/:id',(req,res)=>{
    const key = list.findIndex(x=>x.id===parseInt(req.params.id))
    if (!key) {
        return res.status(404).send("Id not found")
    }
    list.splice(key,1)
    res.status(200).send('Deleted successfully')
})


app.listen(port,()=>{
    console.log(`Server is running at port:${port}`);
})