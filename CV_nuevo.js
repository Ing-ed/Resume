import express from 'express'
import { Router } from 'express';
import Handlebars from 'express-handlebars'
import __dirname from './utils.js';
import path from 'path';
import { ReadText } from './functions/text.js';
import { KeyObject } from 'crypto';
import { text } from 'stream/consumers';
import { title } from 'process';

const app = express();
const router = Router()
app.engine('handlebars',Handlebars.engine())
app.use(express.static(path.join(__dirname,'public')))
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
app.use("/",router)





router.get("/:clase&:lang",async (req, res) =>{
    const clase = req.params.clase
    console.log(clase, "clase")
    const lang = req.params.lang
    console.log(lang, "Lang")
    console.log("aca")
    const texts = await JSON.parse((await ReadText('text.json')))
    console.log(texts['spanish']['professional']['title']['engineer'])
    console.log(texts['spanish']['skills']['engineer'])
    
    res.render('CV_nuevo',{
        clase: (clase === 'eng'? true : false),
        skills:texts[`${lang === "en"?'english':"spanish"}`]['skills'],
        presentation:texts[`${lang === "en"?'english':"spanish"}`]['presentation'],
        about:texts[`${lang === "en"?'english':"spanish"}`]['about'],
        prof:texts[`${lang === "en"?'english':"spanish"}`]['professional'],
        education:texts[`${lang === "en"?'english':"spanish"}`]['education'],
        background:texts[`${lang === "en"?'english':"spanish"}`]['background']
        })
})

app.listen(8080);
console.log("Hola mundo")