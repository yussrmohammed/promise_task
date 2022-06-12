 /*function getuser(id){
    console.log("reading")
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve("done"),3000
        })
    })
}
async function test(){
    const user =await getuser(3)
    console.log(user)
}*/

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



let id= prompt ("Inter Id ",1)
function getUser(uid){
        uid=id
        let Username
           for (let i = 0; i< user.length; i++) {
                 
               if(id==user[i].id){
                  id=user[i].id;
                Username=user[i].name
               
               }
           
               }
               return new Promise((resolve,reject)=>{
                   setTimeout(()=>{ resolve ({id:uid, username:Username})},2000)
                }) 
       
       
             
           
       }

       function getOrder(uid){
           uid=id
           let uorder =[{
               userorder:""
              }];
           for (let i = 0; i < orders.length; i++) {
               if(id==orders[i].customerId){
                   uorder[i]=orders[i].order
               }
               
           }
           return new Promise((resolve,reject)=>{
               setTimeout(()=>{ resolve ({id:id ,userorder:uorder})},2000)
            }) 
       
       
       }

      async function test(){
        const user =await getUser(id)
        let res=await getOrder(user.id)
        console.log(res)
    }