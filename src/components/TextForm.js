import React , {useState} from 'react'
// import Highlight from "react-highlight";

export default function TextForm(props) {

  const [text, setText] = useState('')
  // const [searchTerm, setTerm] = useState('');

  
  
  // const findWordIndexes = (searchTerm, text) => {
  //   const indexes = [];
  //   let index = text.indexOf(searchTerm);
  //   while (index !== -1) {
  //     indexes.push({ start: index, end: index + searchTerm.length });
  //     index = text.indexOf(searchTerm, index + 1);
  //   }
    
  //   return indexes;
    
  // };

  // const handlefind = (indexes) => {

  //   console.log(indexes)



  // }
  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   let index=[];
  //   index=findWordIndexes(searchTerm,text);
  //   handlefind(index);
  // }

  const handleupClick =()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleloClick =(event)=>{
    // console.log("On change")
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleclearClick =(event)=>{
    
    setText("");
  }
  
  const handleonChange =(event)=>{

    setText(event.target.value)
  }

  // const handleonchangeFIND =(event)=>{
  //   setTerm(event.target.value)
  // }
  // const handleonchangeREPLACE =(event)=>{
  //   setTerm(event.target.value)
  // }

return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" data-spy="scroll" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="4"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
            {/* <div className="d-flex form-group my-2 mb-4" role="search">
              <input class="form inputsm me-2 mx-3 rounded" value={searchTerm} onChange={handleonchangeFIND} onClick={handlefind} type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-primary" type="submit">Find</button>
            </div>
            <div className="d-flex form-group my-2 mb-4" role="search">
              <input class="form inputsm me-2 mx-3 rounded" onChange={handleonchangeREPLACE} onClick={handleSubmit} type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-primary" type="submit">Search</button>
            </div> */}
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        
        </div>
        </>
  )
}


