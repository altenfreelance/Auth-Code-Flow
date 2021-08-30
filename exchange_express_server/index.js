var express = require('express');
var cors = require('cors')
var axios = require('axios');
var port = process.env.PORT || 3001;
var oAuth = require("./middleware/oAuth")
var morgan = require('morgan')

var app = express();
const pocAPIEndpoint = "http://localhost:8080/poc"

app.use(morgan('combined'))
app.use(cors({origin:true,credentials: true}));
app.use(oAuth);

app.get('/poc', async (req, res) => {
    try {
        const {access_token} = req.oauth;

        const response = await axios({
            method: "get", 
            url: pocAPIEndpoint,
            headers: {Authorization: `Bearer ${access_token}`}
        })

        res.json(response.data)
    }
    catch (error) {
        if (error.response.status === 401){
            res.status(401).json("Unauthorized to access data")
        }
        else if (error.response.status === 403){
            res.status(403).json("Permission Denied")
        }
        else {
            res.status(500).json("Something went wrong")
        }
    }

});

app.listen(port, () => console.log("Started Exchange Server"));