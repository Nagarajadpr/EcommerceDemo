import { useRef } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../../Styles/Genric/Signup.css';
const Signup = () => {

    let [user, setUser] = useState(null);
    let navigate=useNavigate();


    let Username = useRef();
    let mail = useRef();
    let password = useRef();
    let rePassword = useRef();
    let mobile = useRef();
    let building = useRef();

    let street = useRef();
    let city = useRef();
    let pincode = useRef();
    let state =useRef();

    let handleCustomerSignup = (e) => {
        e.preventDefault();
       
        if(password.current.value==rePassword.current.value){
            let customer = {
                username: Username.current.value,
                mail: mail.current.value,
                password: password.current.value,
                mobile: mobile.current.value,
                address:{

                  houseNum: building.current.value,
                    street: street.current.value,
                    city:city.current.value,
                    state:state.current.value,
                    pincode:pincode.current.value
                    
                }
                
            }
            fetch("http://localhost:4000/customers",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(customer)
            })
            .then(()=>{
                alert("sucessful");
                navigate("/login")

            })

        }
        else{
          alert("password mismatch")

        }
    }
    let handleSellerSignup = (e) => {
        e.preventDefault();
       
        if(password.current.value==rePassword.current.value){
            let seller = {
                username: Username.current.value,
                mail: mail.current.value,
                password: password.current.value,
                mobile: mobile.current.value,
                address:{

                  shop:building.current.value,
                    street: street.current.value,
                    city:city.current.value,
                    state:state.current.value,
                    pincode:pincode.current.value
                    
                }
                
            }
            fetch("http://localhost:4000/sellers",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(seller)
            })
            .then(()=>{
                alert("sucessful");
                navigate("/login");
                

            })

        }
        else{
          alert("password mismatch")

        }
    }

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1>Signup & Shop</h1>
                      <hr />
                {user == null && <div className="btns">
                    <button className="btn-customer" onClick={() => { setUser("Customer") }}>Customer</button>
                    <button className="btn-seller" onClick={() => { setUser("Seller") }}>Seller</button>
                    <Link to="/login"> goto login-page</Link>
                </div>}

                {user == "Customer" && <div className="customer-signup">
                    <form onSubmit={handleCustomerSignup}>
                        <input type="text" placeholder="Username" ref={Username} />
                        <input type="email" placeholder="Email"  ref={mail}/>
                        <input type="tel" placeholder="Phone" ref={mobile} />
                        <input type="password" placeholder="Password"  ref={password}/>
                        <input type="text" placeholder="Re-Enter the password" ref={rePassword} />
                        <input type="number" placeholder="House-no" ref={building}/>
                        <input type="text" placeholder="Street" ref={street} />
                        <input type="text" placeholder="city" ref={city} />
                        <input type="number" placeholder="Pin-code" ref={pincode}/>
                        <input type="text" placeholder="State" ref={state} />
                        <input type="submit" value="Sign-up" />
                    </form>
                </div>}

                {user == "Seller" && <div className="seller-signup">
                    <form onSubmit={handleSellerSignup}>
                        <input type="text" placeholder="Username" ref={Username}/>
                        <input type="email" placeholder="Email" ref={mail}/>
                        <input type="tel" placeholder="Phone" ref={mobile}/>
                        <input type="password" placeholder="Password" ref={password} />
                        <input type="text" placeholder="Re-Enter the password" ref={rePassword}  />
                        <input type="number" placeholder="Shop-no" ref={building} />
                        <input type="text" placeholder="Street"ref={street}  />
                        <input type="text" placeholder="city" ref={city} />
                        <input type="text" placeholder="state" ref={state} />
                        <input type="text" placeholder="Pin-code" ref={pincode} />
                        <input type="submit" value="Sign-up" />
                    </form>
                </div>}
            </div>
        </div>);
}
export default Signup;