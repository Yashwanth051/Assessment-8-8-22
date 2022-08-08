import React from "react";
import "./CompletedTicket.css"
class CompletedTicket extends React.Component{
 constructor(props){
 super(props)
 }
 render(){

 const {comptask,ctask}=this.props
 return(
 <div>
 <div className="container">
 <div className="row">
 <h2>Opened tickets</h2>

 {

 comptask.map((item)=>(
 <div className="card">
 <div className="card-body">
 <h5>{item.timestamp}</h5>
 <p>{item.priority}</p>
 <p>{item.tdesc}</p>
 <p>{item.tstatus}</p>
 <p>{item.summary}</p>
 <button className='btn1'onClick={()=>ctask(item.id)}>close</button>
 </div>
 </div>
 ))

 }
 </div>
 </div>
 </div>
 )
 }
}
export default CompletedTicket
