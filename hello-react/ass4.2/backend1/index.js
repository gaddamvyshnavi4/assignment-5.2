const express=require('express');
const cors=require('cors');


const app=express();
const port=8000;//443 if we want to use http


app.use(cors({
  'origin':"http://localhost:3000"
}))
app.listen(port,()=> {
    console.log("server started...");
});


app.get("/status", (req, res) => {
    res.json({
      'status': "Active"
    });
  });

