import React from 'react'
import { useState } from 'react'

export default function TextForm() {

    const [text, setText] = useState(null);

    const handleUpperCase = ()=>{ 

        let newText = text.toUpperCase();
        console.log("handleUpperCase() is clicked");
    
        setText(newText);
    
    };
    const handleLowerCase = ()=>{ 

        let newText = text.toLowerCase();
        console.log("handleLowerCase() is clicked");
    
        setText(newText);
    
    };

    const handleOnChange = (event)=>{
        console.log("handleOnCHange() is clicked");
        setText(event.target.value);

    }
        
    
    return (
        <>

            <div className="container my-3 mx-3">


                <h2>Enter Your Text </h2>

                <div className="input-group ">
                    <span className="input-group-text"></span>
                    <textarea className="form-control" aria-label="With textarea" rows="8" value={text} onChange={handleOnChange} ></textarea>
                </div>







            </div>

            <button type="button" className="btn btn-primary mx-3 " onClick={handleUpperCase}>UpperCase</button>
            <button type="button" className="btn btn-primary mx-3 " onClick={handleLowerCase}>LowerCase</button>
            
            {/* <div className="container" my-3 mx-3>
                <h2>Your Text Summary</h2>
                <h2>Preview</h2>
                <p> No. of Words are : {text.spli(" ").length}
                
                    No. of Characters are: {text.length}

                    Estimated Reading Time : {0.008*text.split(" ").length}
                
                </p>
                <p>{text}</p>
            </div> */}





        </>
    );
}
