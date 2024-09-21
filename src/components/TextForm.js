import React,{useState} from 'react'



export default function TextForm(props) {
  const handleupclick=()=>{
    console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handlelwclick=()=>{
    console.log("Upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclearclick=()=>{
    console.log("Upper case was clicked" + text);
    let newText ='';
    setText(newText);
  }
  const handleonchange=(event)=>{
    console.log("On change");
    setText(event.target.value)
  }
  const notext=()=>{
    console.log("You have just clicked on the text area.")
    setText("")
  }
  const handlecopy = () =>
  {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraspaces = () =>
  {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  }
  const [text, setText] = useState('');
  return (
    <>
      <div style={{color : props.mode==='light'?'black':'white'}}>
        <h1 style={{color : props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleonchange} onClick={notext} rows="8" style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleupclick}>Convert to Upper case</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handlelwclick}>Convert to Lower case</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleclearclick}>Clear Text</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handlecopy}>Copy Text</button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1`} onClick={handleExtraspaces}>Remove Extra spaces</button>
    </div>
    <div className='container my-3' style={{color : props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length-0.008} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    
    </div>
    </>
  )
}
