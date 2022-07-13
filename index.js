const express = require('express')
const app = express()


//object.method(routename,cbfn)  // OOPs
app.get('/', function (req, res) {
    //object.method().method().method()...
  res.status(202).json({'msg':'Hello World'})
})

app.get('/hello', function (req, res) {

    console.log(req.query.name); //object.method() or object.property
    console.log(req.query.surname); //object.method() or object.property
    //object.method().method().method()...
  res.status(202).json({
                        'msg':'Hello World again',
                        'data':req.query
                      })
})


app.listen(3000)