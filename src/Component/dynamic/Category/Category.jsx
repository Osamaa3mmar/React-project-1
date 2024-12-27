import React, { useEffect ,useState} from 'react'
import useFitch from '../../useFitch/useFitch'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './catigory.module.css';
export default function Category() {
 const {data,isLoading,erorr}=useFitch('https://dummyjson.com/products/categories');
 console.log(data)
 if(isLoading){
  return <div>Loading...</div>;
 }
 if(erorr){
  return <div className="alert-danger alert">{erorr}</div>
 }
  return (
  
    <div className='container'>
      <div className="row gx-4 gy-4">
    {data.map(category=>
      <div className={`col-lg-4 col-md-6 col-sm-10 ${styles.category_card}`} key={category.slug} >
        <h2>{category.name}</h2>
        <Link ><p>Go To</p></Link>
        
      </div>
      
)}
    </div>
    </div>
  )

}
