import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
     document.title =`${title} - volanter-network`
    },[title])
};
export default useTitle;