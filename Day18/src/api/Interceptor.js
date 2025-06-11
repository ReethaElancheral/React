import axiosInstance from "./Axios";


// Request Interceptor

axiosInstance.interceptors.request.use(
    (request)=>{
        request.headers.Authorization = "Bearer token123"; 
  console.log("Request Sent"); 
  return request;
    }
)

//Response Interceptor

axiosInstance.interceptors.response.use( 
  response => { 
    console.log("Response Received"); 
    return response; 
  }, 
  error => { 
    console.error("Error in Response:", error); 
    return Promise.reject(error); 
  } 
);

export default axiosInstance;



