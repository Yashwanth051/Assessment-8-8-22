import React from "react"
import CompletedTicket from "./CompletedTicket"
import PendingTicket from "./PendingTicket"

class Ticket extends React.Component{
 constructor(props){
 super(props)
 this.state={
 ticket:this.props.data,
 summary:""
 }
 }
 getcomp=()=>{
 const result= this.state.ticket.filter((item)=>item.priority>=3&&item.status===true)
 return result
 }
 getpen=()=>{
 const result= this.state.ticket.filter((item)=>item.priority<3)
 return result
 }
 getclose=()=>{
 const result= this.state.ticket.filter((item)=>item.status===false)
 return result
 }
 ctask=(itemid)=>{
 const temp=[...this.state.ticket]
 const obj=temp.find((item)=>item.id===itemid)
 obj.status=!obj.status
 this.setState({ticket:temp})
 }
 handleChange=(e,key)=>{
 if(key==='summ')
 this.setState({summary:e.target.value})
 console.log(this.state.summary)
 }
 des=(e)=>{
 e.preventDefault()
 const obj={
 summary:this.state.summary
 }
 let newData=[...this.state.ticket,obj]
 this.setState({ticket:newData})
 }
 render(){
 console.log(this.state.ticket.id)
 return(
 <div>
 <CompletedTicket comptask={this.getcomp()} ctask={this.ctask}></CompletedTicket>
 <PendingTicket pentask={this.getpen()} ctask={this.ctask}></PendingTicket>
 </div>
 )
 }
}
export default Ticket