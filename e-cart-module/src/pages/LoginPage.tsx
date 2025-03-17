import { useDispatch, useSelector } from "react-redux";
import { appState } from "../store/Store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import { setUser } from "../reducers/Reducer";

/*
  LoginPage component for the autentication
*/
function LoginPage() {
  const userData = useSelector((state: appState) => state.userData);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    let validUser=false;
    for(let index=0;index<userData.length;index++){
      if(userData[index].userName===userName){
        validUser=true;
        if(userData[index].password===password){
          dispatch(setUser({index:index,logged:true}));
          navigate("/products");
        }
        else{
          alert("Incorrect Password");
          break;
        }
      }
  }
  if(!validUser)
    alert("username not found");
  };
  return (
    <div className="loginPage">
      <div className="loginPage__card">
        <h2>Sign In</h2>
        <div>Welcome user, please sign in to continue</div>
        <div className="loginPage__card-input">
          <input
            type="text"
            placeholder="Enter username"
            required
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="loginPage__card-input">
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="loginPage__card-login">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="loginPage-signUp">
          <span>Not a user? Sign up</span>
          <button onClick={() => navigate("/signup")}>SignUp</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
