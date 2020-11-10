import React,{useEffect,useState,useRef} from 'react'

export default function ScrollingAnimationTrigger({children}) {

    const el = useRef(null);


    const checkPosition = (element) => {
        
        let result = new Promise((resolve,reject) => {
  
            let {top,height} = element.getBoundingClientRect();
        
        
            if(top - window.innerHeight  <= 0 - height/2 && top > 0 ){
      
     
                resolve();
              
            }else{
                reject();
            }
        })
        return result

    }

    let eventHandler = async () => {
        try{
            let result = await checkPosition(el.current);
          
            console.log('a');
        }catch(err){

            /*if(leavingReset){

               setScrollClass('')
            }*/
        }
    }
    useEffect(() => {
        eventHandler()
        window.addEventListener("scroll",eventHandler);
        return function cleanup() {
            window.removeEventListener("scroll",eventHandler);
        };
    },[])


    return (
        <div>
            {children}
        </div>
    )
}
