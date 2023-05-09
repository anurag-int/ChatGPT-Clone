const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-bmJdSn56sWOw1SjcWSAMbekY",
    apiKey:
    "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",
});
const openai = new OpenAIApi(configuration);
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
const port = 3080;
app.use(express.urlencoded({extended : true}));

app.post('/', async(req, res)=>{
    const {message} = req.body;
    
    const response = await openai.createCompletion({
        model : "text-davinci-003",
        prompt : `${message}`,
        max_tokens : 100,
        temperature: 0.5,
    });
    // console.log(response.data.choices[0].text);
    res.json({
        // data: response.data
        message: response.data.choices[0].text
    })
})

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`);
})