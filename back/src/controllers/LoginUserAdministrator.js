import { client } from "../../db/conn"
const jwt = require('jsonwebtoken')
export const loginUserAdministrator = async(req, res) => {
    const {email, password} = req.body

    const query = `SELECT * FROM schools_accounts WHERE email = '${email}'`
    const result = await client.query(query)
    
    if(result.rows[0]){
        const query = `SELECT * FROM schools_accounts WHERE password = '${password}'`
        const result = await client.query(query)
        if(result.rows[0]){
            const token = jwt.sign({uuid: result.rows[0].id, typeuser: result.rows[0].typeuser, name: result.rows[0].name, admin:true, accounts_id:result.rows[0].accounts_id}, '32da')
            res.json({token, msg: 'Login feito com sucesso!', authenticate: true})
        } else {
            res.json({msg: 'A senha está incorreta'})
        }
    } else {
        res.json({msg: 'Essa conta não existe'})
    }

}