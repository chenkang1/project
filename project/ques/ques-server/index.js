const express = require('express')
const cors = require('cors')
const session = require('express-session')
const bodyParse = require('body-parser')
const Sequelize = require('sequelize');
const router = require('./router')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())

app.use(bodyParse.urlencoded({ extended: false }))
app.use(express.static('static'))
const sequelize = new Sequelize('qita', 'root', '', {
  host: '47.100.115.231',
  dialect: 'mysql',
  operatorsAliases: false
});

app.use((req, res, next) => {
  req.db = sequelize
  next()
})


/* session */
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

/* 允许跨域 */
app.use(cors({
  credentials: true,
  origin: 'http://47.100.115.231:8081', // web前端服务器地址
}))

app.use(router) //加载路由

app.listen(3000, () => {
  console.log('http://47.100.115.231:3000')
})