import fs from 'fs'
import __dirname from '../utils.js'
export async function ReadText(text){
    const txt = await fs.readFileSync(`${__dirname}/textos/${text}`,{ encoding: 'utf8', flag: 'r' })
    // console.log("el texto leido es...",txt)
    return txt
}
