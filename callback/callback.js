const user = [{
    id: 1,
    name: "ahmed",
    email: "ahmed@gmail.com"
},
 {
    id: 2,
    name: "mohamed",
    email: "mohamed@gmail.com"
},
 {
    id: 3,
    name: "yossr",
    email: "yossr@gmail.com"
}]

orders =[
    {
        order: "mobile", customerId: 1, creationDate: "2022-02-02"
    },
    {order: "laptop", customerId: 1, creationDate: "2022-02-04"}
    ,
    {order: "mobile", customerId: 2, creationDate: "2022-03-02"}
    ,
    {order: "smart watch", customerId: 2, creationDate: "2022-02-02"}
    ,
    {order: "mobile", customerId: 3, creationDate: "2022-02-07"},
    {order: "mobile", customerId: 2, creationDate: "2022-02-07"}
]



const submit=document.querySelector("button")

/*function input(){
let email= document.getElementById("Email1").value;
for (let i = 0; i< user.length; i++) {
 
if(email==user[i].email){console.log(user[i].id,user[i].name)
userid=user[i].id
}
}
}*/
let username ;
function getuser(id, callback){
submit.addEventListener('click',()=>{
   let email= document.getElementById("Email1").value;
    for (let i = 0; i< user.length; i++) {
     
    if(email==user[i].email){
       id=user[i].id;
    username=user[i].name
    
    }

    }

setTimeout(()=>{
    callback({id:id, username:username})
},2000)

  
})

}

function getorders(id, callback){
    submit.addEventListener('click',()=>{
        let email= document.getElementById("Email1").value;
         for (let i = 0; i< user.length; i++) {
          
         if(email==user[i].email){
            id=user[i].id;

     
         }} 
           let uorder =[{
            userorder:""
           }];
         for (let j = 0; j < orders.length; j++) { 
         
            if(orders[j].customerId==id){
            
                uorder[j]=orders[j]
            }


            
         
         }
        
     setTimeout(()=>{
         callback({id:id, order:uorder})
     },2000)
     
       
     })
}

let text=document.querySelector("h2")
let text2=document.querySelector("p")

getuser(1,(user)=>{

    text.innerHTML="user id is : "+user.id  +" user name is :  "+user.username 
    console.log(user)

})
getorders(1,(Orders)=>{
   
    console.log(Orders)
})