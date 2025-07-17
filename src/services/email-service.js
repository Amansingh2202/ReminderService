const sender=require('../config/emailConfig')
const TicketRepository=require('../repository/ticket-repository')

const repo= new TicketRepository()

const sendBasicEmail=async (mailfrom,mailto,mailSubject,mailBody)=>{
     try{      
     const response =await sender.sendMail({
        from:mailfrom,
        to:mailto,
        subject:mailSubject,
        text:mailBody
     })}
     catch(error){
   console.log(error)
   throw error
     }
}


const fetchPendingEmails= async (timestamp)=>{
  try{
       
         const response =await repo.get({status:"PENDING"});
         return response;  
  }
  catch(error)
  {
      console.log(error)
      throw error
  }
}      


     const createNotificatoin=async (data)=>{
          try{
                  const response = await repo.create(data)
                  return response 
          }
          catch(error){
            console.log(error)
            throw error

          }
     }
  const updateTicket=async (ticketId,data)=>{
    try{
            const response=await repo.update(ticketId,data)
    }catch(error){
             console.log(error)
    }
  }





module.exports={
  sendBasicEmail,
  fetchPendingEmails,
  createNotificatoin,
  updateTicket
}



/**
 * 
 * SMPT 
 *  
 */
