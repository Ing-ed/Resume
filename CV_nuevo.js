import express from 'express'
import { Router } from 'express';
import handlebars from 'express-handlebars'
import __dirname from './utils.js';
import path from 'path';
import { ReadText } from './functions/text.js';
import { KeyObject } from 'crypto';

const app = express();
const router = Router()
app.engine('handlebars',handlebars.engine())
app.use(express.static(path.join(__dirname,'public')))
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
app.use("/",router)


router.get("/",async (req, res) =>{
    console.log("aca")
    const about = await ReadText('about.txt')
    const prof = await JSON.parse((await ReadText('professional/professional.json')))
    const education = await JSON.parse(await ReadText('education/education.json'))
    const background = await JSON.parse(await ReadText('background/background.json'))
    
    res.render('CV_nuevo',{
        about:about,
        prof:prof,
        education:education,
        background:background,
        })
})

app.listen(8080);
console.log("Hola mundo")