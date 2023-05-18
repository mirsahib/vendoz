import { useEffect, useState } from "react"

const useDelayUnMount = (state:boolean,delay:number)=>{
    const [showAnimate,setShowAnimate] = useState(false)

    useEffect(()=>{
        let timeId:any

        if(state && !showAnimate){
            setShowAnimate(true)
        }else if(!state && showAnimate){
            timeId = setTimeout(()=>{
                setShowAnimate(false)
            },delay)
        }
        return ()=>clearTimeout(timeId)

    },[state,showAnimate,delay])
    
    return showAnimate
}

export default useDelayUnMount