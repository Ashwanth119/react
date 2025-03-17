import { useDispatch, useSelector } from "react-redux";
import { appState } from "../store/Store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import { addUser} from "../reducers/Reducer";
function SignUp() {
  const userData = useSelector((state: appState) => state.userData);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = () => {
    let validUser=true;
    for(const user of userData){
        if(user.userName===userName){
            alert("Username already exists, please try another!!");
            validUser=false;
            break;
        }
    }
    if(validUser){
        dispatch(addUser({userName:userName, password:password, logged:false}));
        navigate('/login');
    }
  };
  return (
    <div className="signUp">
      <div className="signUp__card">
        <h2>Sign Up</h2>
        <div className="signUp__card-input">
          <input
            type="text"
            placeholder="Enter username"
            required
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="signUp__card-input">
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="signUp__card-login">
          <button onClick={handleRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
