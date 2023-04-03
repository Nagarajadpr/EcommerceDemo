import { useRef } from 'react';
import { useState } from 'react';
import '../../Styles/Genric/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import Customerhome from '../Customer/Customerhome';

const Login = () => {
    let [user, setUser] = useState(null);
    let [userDetails,setUserDetails]=useState(null);
    let Username = useRef();
    let password = useRef();
    let navigate =useNavigate();


    useEffect(()=>{
        if(sessionStorage.getItem("userdetails")!=null)
        {
         let userdetails=sessionStorage.getItem("userdetails");
            userdetails=JSON.parse(userdetails);
            setUserDetails(userdetails);
        }
    },[])
    


    let handleCustomerLogin = (e) => {
        e.preventDefault();

        axios.get("http://localhost:4000/customers")
            .then((res)=>{
                console.log(res.data);
                let user=res.data.find((user)=>{return user.username===Username.current.value});

                if(user===undefined)
                {
                    alert("user does not exist,please signup to continue");
                    navigate('/');
                }
                else if(user.password===password.current.value)
                {
                    alert("login successful");
                    setUserDetails(user);
                    sessionStorage.setItem("userdetails",JSON.stringify(user))
                }
            })
    }

    let handleSellerLogin = (e) => {
        e.preventDefault();
        axios.get("http://localhost:4000/sellerss")
        .then((res)=>{
            console.log(res.data);
            let user=res.data.find((user)=>{return user.Username===Username.current.value});

            if(user===undefined)
            {
                alert("user does not exist,please signup to continue");
                navigate('/');
            }
            else if(user.password===password.current.value)
            {
                alert("login successful");
                setUserDetails(user);
                sessionStorage.setItem("userdetails",JSON.stringify(user))

            }
        })
    }

    return (
        <div>
  {userDetails==null &&      <div className="login-page">
            <div className="login-container">
                <h1>Login</h1>
                <hr />
                {user == null && <div className="btns">
                    <button className="btn-customer" onClick={() => { setUser("Customer") }}>Customer</button>
                    <button className="btn-seller" onClick={() => { setUser("Seller") }}>Seller</button>
                    <Link to="/"> go to Signup-page</Link>
                </div>}

               {user=="Customer" && <div className="customer-login">
                <form onSubmit={handleCustomerLogin}>
                    <input type="text" placeholder="Username"  ref={Username} />
                    <input type="password" placeholder="Password" ref={password} />
                    <input type="submit" value="login" />
                </form>
               </div> }

               {user=="Seller" && <div className="seller-login">
                <form onSubmit={handleSellerLogin}>
                    <input type="text" placeholder="Username"  ref={Username} />
                    <input type="password" placeholder="Password" ref={password} />
                    <input type="submit" value="login" />
                </form>
               </div> 
               }
          
            </div>
        </div>}
         {userDetails!=null&&<Customerhome userDetails={userDetails} setUserDetails={setUserDetails}/> }</div>
        );
}

export default Login;