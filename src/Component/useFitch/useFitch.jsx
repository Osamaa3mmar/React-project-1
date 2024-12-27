import React, { useEffect ,useState} from 'react'
import axios from 'axios';

export default function useFitch(url) {
    const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [erorr,setErorr]=useState(null);
 const getData=async ()=>{
  try{
    const {data}=await axios.get(url);
    setData(data);
    setErorr(null);
  }
  catch(e){
    setErorr(e.message);
  }
  finally{
    setIsLoading(false);
  }
  
 }
useEffect(()=>{
  getData();
 
},[])
  return{ 
   data,isLoading,erorr
  }
}
