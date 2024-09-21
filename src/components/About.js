import React from "react"

export default function About(props) {
  
  return (
    <div className='conatiner ' style={{color : props.mode==='light'?'black':'white'}} >
      <h1 className='my-3'>About Us</h1>
      <div className="accordion margino" id="accordionExample" style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}}  >
        <div className="accordion-item" style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}}>
         <h2 className="accordion-header" >
         <button className="accordion-button" type="button"   data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}}>
          Application Used for :
         </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
            <div className="accordion-body" >
              <strong>The Application has two major workings : </strong> 1. The Text Utilities option is used to perform operations on the text.            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}}>
          <h2 className="accordion-header">
          <button className="accordion-button collapsed" style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Developer of the Application :
          </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" >
              <strong>The Application was developed by Shashank Talekar. </strong> This application was created by shashank talekar for his college project of S.Y.BCA using react JS language. 
            </div>
          </div>
        </div>
      <div className="accordion-item" style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed"  style={{backgroundColor : props.mode==='light'?'white':'#545d65',color : props.mode==='light'?'black':'white'}} type="button"   data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Contact Info :
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
          <div className="accordion-body" >
            <strong>Mobile No :</strong> 8668902342 
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
