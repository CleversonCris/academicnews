const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
export const app = express()
app.use(cors())

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
import { authenticateUser } from './controllers/AuthenticateUser'
import { loginUserAdministrator } from './controllers/LoginUserAdministrator'
import { loginUserStudent } from './controllers/LoginUserStudent'
import { loginUserAdministrator } from './controllers/LoginUserAdministrator'
import { getProfilerAdministrator } from './controllers/GetProfilerAdministrator'
import { CreateNotice } from './controllers/CreateNotice'
import { getnoticesbyid } from './controllers/GetNoticeById'
app.post('/authenticate', authenticateUser)
app.post('/loginstudent', loginUserStudent)
app.post('/loginadministrator', loginUserAdministrator)
app.post('/getprofileadministrator', getProfilerAdministrator)
app.post('/createnotice', CreateNotice)
app.post('/getnoticebyid', getnoticesbyid)


