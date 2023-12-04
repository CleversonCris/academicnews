import { client } from "../../db/conn"
const jwt = require('jsonwebtoken')
export const loginUserStudent = async(req, res) => {
    const {email, password} = req.body

    const query = `SELECT * FROM students WHERE email = '${email}'`
    const result = await client.query(query)
    
    if(result.rows[0]){
        const query = `SELECT * FROM students WHERE password = '${password}'`
        const result = await client.query(query)
        if(result.rows[0]){
            const token = jwt.sign({uuid: result.rows[0].id, typeUser: 'student'}, '32da')
            res.json({token, msg: 'Login feito com sucesso!'})
        } else {
            res.json({msg: 'A senha está incorreta'})
        }
    } else {
        res.json({msg: 'Essa conta não existe'})
    }

}