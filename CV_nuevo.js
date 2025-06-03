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
    const about = await ReadText('professional/descript.txt')
    // console.log(about)
    const descript = await ReadText('professional/descript.txt')
    const pythonProj = await (await ReadText('professional/python.txt')).split('\r\n')
    const jsProj = await (await ReadText('professional/js.txt')).split('\r\n')
    const fsProj = await (await ReadText('professional/fullstack.txt')).split('\r\n')
    const ingKnow = await (await ReadText('education/ingknow.txt')).split('\r\n');
    const reactKnow = await (await ReadText('education/reactknow.txt')).split('\r\n');
    const nodeKnow = await (await ReadText('education/nodeknow.txt')).split('\r\n');
    const bio = await ReadText('background/bio.txt')
    const cdr = await ReadText('background/cdr.txt')
    const csl = await ReadText('background/csl.txt')
    
    res.render('CV_nuevo',{about:about,
        descript:descript,
        pythonProj:pythonProj,
        jsProj:jsProj,
        fsProj:fsProj,
        ingKnow:ingKnow,
        reactKnow:reactKnow,
        nodeKnow:nodeKnow,
        bio:bio,
        cdr:cdr,
        csl:csl
    })
})

app.listen(8080);
console.log("Hola mundo")