const baseUrl = 'https://reqres.in/api';
 

// ( async () =>{
//         try { 
//            body = {user: 'name', job: 'new_job'}
//                 const response = await fetch(`${baseUrl}/users`, {
//                     method:'POST',
//                     headers:{
//                         'Content-Type': 'application/json' ,
//                     },
//                     body: JSON.stringify(body),
//                 });

//                 const data = await response.json();
//                 console.log( 'status' , response.status) 
//                 console.log( 'data' , data) 
//             } 
//             catch  (error)  {
//                 console.log('Не получилось получить список юзеров', error)
//             }
//     }) ()


// ;( async () =>{
//     try { 
//             const response = await fetch(`${baseUrl}/users`);
//             const data = await response.json();
//             console.log( 'status' , response.status) 
//             console.log( 'data' , data) 
//         } 
//         catch  (error)
//         {
//             console.log('Не получилось получить список юзеров', error)
//         }
// }) ()

(async () => {
    try {
    const body = {
    name: 'Иван Иванов',
    email: 'ivan.ivanov@example.com',
    password: 'securepassword',
    };
    const response = await fetch(`${baseUrl}/api/users`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    });
   
    const data = await response.json();
    console.log('status', response.status);
    console.log('data', data);
    } catch (error) {
    console.error('Не получилось создать нового пользователя', error);
    }
   })();