const express=require('express');

const bodyParser=require('body-parser')
const {PORT}=require('./config/configServer')
const {sendBasicEmail}=require('./services/email-service')
const  TicketController= require('./controllers/ticket-controller.js')

const setupJobs=require('./utils/job')

const setupStartServer=()=>{
       const app=express();
       app.use(bodyParser.json())
       app.use(bodyParser.urlencoded({extended:true}));


       app.listen(PORT,()=>{
          console.log(`Server started at PORT:${PORT}`)
          setupJobs()

          app.post('/api/v1/tickets',TicketController.create) 

        //   sendBasicEmail(
        //     'support@admin.com',
        //     'amansingnh420@gmail.com',
        //     'this is a testing email',
        //     'hey, howb are you , i hope you like the support'
        //   )

       })
}

setupStartServer()