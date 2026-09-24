import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {

     const [user, setUser] = useState("");     
     const [pass, setPass] = useState("");
     const navigate = useNavigate();

     function handleuser(evt) 
     {
          setUser(evt.target.value);
     }

     function handlepass(evt) 
     {
          setPass(evt.target.value);
     }

     function check()
     {
          var logindetails = axios.post("http://localhost:5000/login",{"username": user, "password": pass})
          logindetails.then(function(data){
               if(data.data === true)
               {
                    navigate("/success");
               }
               else
               {
                    navigate("/fail");
               }
          })
     } 
    return (
   <div className="login-container">
     <input className="input-group" name="username" placeholder="Username" onChange={handleuser} />
     <input className="input-group" name="password" type="password" placeholder="Password" onChange={handlepass} />
     <button className="login-btn" onClick={check}>Login</button>
   </div>
  );
}

export default App;