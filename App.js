import React from "react";
import Ticket from "./Ticket";
import data from "./TicketData";

class App extends React.Component{
    render(){
        return(
            <div>
            <Ticket data={data}></Ticket>
            </div>
        )
    }
}
export default App
  