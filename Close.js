import React from "react";

class Close extends React.Component{
    constructor(props){
        super(props)
        
    }

    handleChange=(e,key)=>{
        if(key==='summ')
        this.setState({summary:e.target.value})
        console.log(this.state.summary)
    }

    

    render(){
        const {ctask,closetask,des}=this.props
        return(
            <div>
            <div className="container">
                <div className="row">
                    <h2>Closed tickets</h2>
            
           
            {
                ctask.map((item)=>( 
                    <div>
                        <form>
                            <input type="text" onChange={(e)=>this.handleChange(e,'summ')} placeholder="Type here..."/>
                            <button className="btn2" onClick={(e)=>des(e,item.id)}>add desc</button>
                        </form>
                    <div className="card">
                        <div className="card-body">
                        <h5>{item.timestamp}</h5>
                        <p>{item.priority}</p>
                        <p>{item.tdesc}</p>
                        <p>{item.tstatus}</p>
                        <p>{item.summary}</p>
                       
                        <button className='btn1' onClick={()=>closetask(item.id)}>re-open</button> 
                    </div>
                    </div>
                    </div>
                ))
               
                }
            </div></div></div>
        )

            }}
export default Close