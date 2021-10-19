import React from "react";
import Side from "./Side";
import Main from "./Main";
import "../styles/App.css";
import DeleteIcon from '@mui/icons-material/Delete';

function App(){
    return(
        <div className="App">
            <div className="App-body">
            <Side/>
               
               <Main/>

            </div>
            
               

            
        </div>
    );

}
export default App;