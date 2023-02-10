import {useState, useEffect} from "react"
 
export const useFetch = (url) => {
   const [users, setUsers] = useState([])
   
   const fetchUser = async() => {
      const response =await fetch(url)
      const userr = await response.json()
      setUsers(userr)
   }
  
   useEffect(()=> {
      fetchUser()
   },[])

   return {users}
}