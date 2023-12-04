import { client } from "../../db/conn"
const jwt = require('jsonwebtoken')

export const authenticateUser = async(req, res) => {
  
    try {
        const { token } = req.body;
    
        if (!token) {
          return res.json({ msg: 'Token not provided' });
        }
    
        const verifyToken = jwt.verify(token, '32da');
    
        if (verifyToken) {
          const decodeToken = jwt.decode(token, '32da');
          const { admin } = decodeToken;
    
          if (admin) {
            res.json({ authenticate: true, admin });
          } else {
            res.json({ authenticate: true });
          }
        } else {
          res.json({ authenticate: false });
        }
      } catch (error) {
        console.error('Error:', error.message);
        res.json({ msg: 'Failed to authenticate'});
      }

}