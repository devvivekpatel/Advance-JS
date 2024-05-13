// 4. Write a function fetchData that takes a URL parameter and returns a promise that fetches data from that URL using fetch API.


// function fetchData(a){

//     let z = new Promise((resolve,reject)=>{

//         fetch(a)
//       .then(response => response.json())
//       .then(json => console.log(json))

//     })

//     //without return keyword it will print whole data 👍
//     return z;
 
// }
// console.log(fetchData('https://jsonplaceholder.typicode.com/users'));

function fetchData(a){

    let z = new Promise((resolve,reject)=>{

        fetch(a).then((response)=>{
            if(response.ok){
                resolve(response.json());
            }
            else{
                reject(new Error("IT is not responding "));
            }
        });
     

    })

    //without return keyword it will print whole data 👍
    return z;
 
}

//if you will give the value of user is 57 then it will return else condition 👍
fetchData('https://jsonplaceholder.typicode.com/users/5').then((data)=>{
    console.log("Here is your data",data);
}).catch((error)=>{
    console.error(error.message);
})