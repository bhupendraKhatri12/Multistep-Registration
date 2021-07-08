import express from 'express'

var app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('hello')
    
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


