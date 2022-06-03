//<YOUR_HOSTED_URL>/fibonacci?n=XX.
const express=require('express');
const cors=require('cors');

const app=express();
const port=8080;//443 if we want to use http


app.listen(port,()=> {
    console.log("Server started");
});


app.get("/status", (req, res) => {
    res.json({
      'status': "Active"
    });
  });
