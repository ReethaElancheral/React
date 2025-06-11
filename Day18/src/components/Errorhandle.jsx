
import axios from "axios";

const ErrorHandling=()=>{
axios.get(`https://jsonplaceholder.typicode.com/users`) 
  .then(response => console.log(response.data)) 
  .catch(error => { 
    if (error.response) { 
      console.error("Server responded with:", error.response.status); 
    } else if (error.request) { 
      console.error("No response received:", error.request); 
    } else { 
      console.error("Error:", error.message); 
    } 
  }); 
}


export default ErrorHandling;
