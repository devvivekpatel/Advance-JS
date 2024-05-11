// Creating a promise
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
      const isSuccess = true; 
  
      if (isSuccess) {
        
        resolve('Data fetched successfully');
      } else {
     
        reject(new Error('Failed to fetch data'));
      }
    }, 1000); 
  });
  

  myPromise.then((a) => {
    
    console.log('Resolved:', a);
  }).catch((error) => {
    console.error('Rejected:', error.message);
  });


  // const myPromise = new Promise((resolve, reject) => {
  //   // Simulating an asynchronous operation (e.g., fetching data from an API)
  //   setTimeout(() => {
  //     const isSuccess = true; // Simulating success
  
  //     if (isSuccess) {
  //       // Resolve the promise if the operation is successful
  //       resolve('Data fetched successfully');
  //     } else {
  //       // Reject the promise if the operation fails
  //       reject(new Error('Failed to fetch data'));
  //     }
  //   }, 1000); // Simulating a delay of 1 second
  // });
  
  // // Consuming the promise
  // myPromise.then((result) => {
  //   // Handle the resolved value (result) if the promise is fulfilled
  //   console.log('Resolved:', result);
  // }).catch((error) => {
  //   // Handle the rejected value (error) if the promise is rejected
  //   console.error('Rejected:', error.message);
  // });