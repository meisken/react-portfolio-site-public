import React,{useEffect,useState,useRef} from 'react'

export default function ScrollingAnimationTrigger({children,beforeActivateClassName,leavingReset}) {

    const el = useRef(null);
    const [activation,setActivation] = useState(false);

    const checkPosition = (element) => {
        
        let result = new Promise((resolve,reject) => {
  
            let {top,height} = element.getBoundingClientRect();
            let {offsetTop} = element;
        
          
           // if(top - window.innerHeight  <= 0 - height/2 && top > 0 ){
            
            if((top - window.innerHeight  <= 0 - height/2 && top > 0 ) || (offsetTop <= window.innerHeight && window.pageYOffset < window.innerHeight)){
                resolve();
                console.log(top,offsetTop,element);
              
            }else{
                reject();
            }
        })
        return result

    }

    let eventHandler = async () => {
        try{
            let result = await checkPosition(el.current);
            setActivation(true)
     
        }catch(err){

            if(leavingReset){

                setActivation(false)
            }
        }
    }
    useEffect(() => {
        eventHandler()
        window.addEventListener("scroll",eventHandler);
        return  () => {
            window.removeEventListener("scroll",eventHandler);
        };
    },[])


    return (
        <span ref={el} className={beforeActivateClassName + (activation ? " activated" : "")}>
            {children}
        </span>
    )
}
