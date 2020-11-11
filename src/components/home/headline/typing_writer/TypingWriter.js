import React,{useRef,useEffect,useState} from 'react'
import './typingWriter.css'

const TypingWriter = ({text:textProps,onAnimationEnd ,typingSpeed = 115,beforeNextLineDelay = 500,startingDelay = 0,infinite }) => {


    const [textOutput,setTextOutput] = useState('');


    const textAnimation = (text,typingSpeed,delay,setText) => {
        const animationend = new Promise((resolve,reject) => {
            let chars = text.split('');
            let charsIndex = 0;
            let currentChars = [];//store   
    
            const timer = setInterval(() => {
       
                if(charsIndex > chars.length){
                    setTimeout(() => {
                    
                    
                        const deleteText = setInterval(() => {
                        
                            if(currentChars.length == 0){

                                
                  
                                resolve();
                    
                                clearInterval(deleteText);
                            }
                            currentChars.pop();
                            setText(currentChars.join(''));
                        },typingSpeed / 2)

                    },delay);

                    clearInterval(timer);

                    
                    return
                }//stop it when the animation is finished
       
                currentChars.push(chars[charsIndex]);
                setText(currentChars.join(''));
                charsIndex++;
                
            }, typingSpeed);//every 115ms push a word into currentChars then combine to string and output
        })
        return animationend
      
    }


    const [currentTextIndex,setCurrentTextIndex] = useState(0);

    useEffect(() => {
        
        let currentText = Array.isArray(textProps) ? textProps[currentTextIndex] : textProps; 

 

        setTimeout(() => {
            textAnimation(currentText,typingSpeed,beforeNextLineDelay,setTextOutput).then(() => {
                if(currentTextIndex < textProps.length - 1 && Array.isArray(textProps) ){    
                    
                    setCurrentTextIndex(currentTextIndex + 1);
                }
                if(currentTextIndex === textProps.length - 1){
                    if(infinite){
                        setCurrentTextIndex(0);
                    }
                    if(onAnimationEnd){
                        
                        onAnimationEnd();

                    }
                    
                }
            });
        })




    },[currentTextIndex]);




    return(
    <div className="typing-writer">{textOutput}</div>
        
    )
}



export default TypingWriter