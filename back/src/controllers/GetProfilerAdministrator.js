const jwt = require('jsonwebtoken')

export const getProfilerAdministrator = (req, res) => {
    const {token} = req.body

    const verifyToken = jwt.verify(token, '32da')

    if(verifyToken){
        const decodeVerify = jwt.decode(token, '32da')
        const {name, typeuser} = decodeVerify
        res.json({user: {
            name,
            typeuser
        }})
    }
}