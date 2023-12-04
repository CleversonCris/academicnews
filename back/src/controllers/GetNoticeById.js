const jwt = require('jsonwebtoken')
import { client } from '../../db/conn'

export const getnoticesbyid = ('/getnoticesbyid', async(req, res) => {
    const {id, token} = req.body
    console.log(id)
    let newId = id[0]
    if(id.length === 2){
        newId = id[0] + ' ' + id[1]
        console.log(newId)
    }
    if(id.length === 3){
        newId = id[0] + ' ' + id[1] + ' ' + id[2] 
        console.log(newId)
    }
    if(id.length === 4){
        newId = id[0] + ' ' + id[1] + ' ' +  id[2] + ' ' + id[3]
        console.log(newId)
    }
    if(id.length === 5){
        newId = id[0] + ' ' + id[1] + ' ' + id[2] + ' ' + id[3] + ' ' + id[4]
        console.log(newId)
    }

    if(token === null || token === undefined) return

    const verifyToken = jwt.verify(token, '32da')

    if(verifyToken) {
        const query = `SELECT * FROM notice WHERE school = '${newId}'`
        const result = await client.query(query)
        if(result.rows){
            const notices = result.rows
            res.json({notices})
        }
    }
    
})