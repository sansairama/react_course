import {useState,useEffect} from 'react'

const useOnline = () => {
  const [ online,setOnline] = useState(true)
  useEffect(() => {
    const handleonline = () =>{
      setOnline(true);
}
    const handleoffline = () => {
      setOnline(false);
    }
    window.addEventListener("online",handleonline);
    window.addEventListener("offline",handleoffline);

    return () => {
    window.removeEventListener("online",handleonline);
    window.removeEventListener("offline",handleoffline);
    }
},[]);
return online;
}

export default useOnline