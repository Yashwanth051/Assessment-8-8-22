import React from "react";
import "./PendingTicket.css"
class PendingTicket extends React.Component{
 constructor(props){
 super(props)
 }
 render(){
  const {pentask,ctask}=this.props
 return(
 <div>
 <div className="container">
 <div className="row">
<h2>Pending Tickets</h2>
 {

 pentask.map((item)=>(
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
export default PendingTicket