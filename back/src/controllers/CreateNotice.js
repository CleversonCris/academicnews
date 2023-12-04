import { client } from "../../db/conn"
const jwt = require('jsonwebtoken')
export const CreateNotice = async(req, res) => {
    
    const {token, document, lead, body, title, reference} = req.body

    if(token === null || token === undefined) return

    const verifyToken = jwt.verify(token, '32da')

    if(!verifyToken) return

    if(verifyToken){
        const decodeToken =  jwt.decode(token, '32da')
        const {uuid, accounts_id, typeuser, name} = decodeToken
        console.log(uuid)
        const queryUser = `SELECT * FROM schools_accounts WHERE accounts_id = '${accounts_id}' AND id = '${uuid}'`
        const resultUser = await client.query(queryUser)

        if(resultUser){
            const query = `SELECT * FROM schools WHERE accounts_id = '${accounts_id}'`
            const resultSchool = await client.query(query)

            if(resultSchool.rows[0]) {

                if(resultSchool.rows[0].accounts_id === accounts_id){

                    if(resultUser.rows[0].permissions.permissionCreateNotice === true){

                        const date = new Date()
                        const formattedDate = date.toISOString()
                        const categories = {
                            education: true
                        }
                        
                        const query =
                         `INSERT INTO notice (author, image, dates, lead, body, categories, reference, typeuser, school, title)
                         values('${name}','${document}','${formattedDate}','${lead}','${body}','${JSON.stringify(categories)}','${reference}','${typeuser}','${resultSchool.rows[0].name}', '${title}')
                         `
                         const result = await client.query(query)

                         if(result){
                            res.json({msg: 'Nóticia inserida no banco de dados com sucesso', error: false})
                         }
                    } else {
                        res.json({msg: 'Você não possui autorização para criação de notícia', error:true})
                    }
                }
            }
        }
    }

}