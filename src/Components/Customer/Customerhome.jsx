import '../../Styles/Customer/Customerhome.css';
import logo from "../../Flipcart.jpg";
import men from "../../Components/men.jpg";
import women from "../../Components/women.jpg";
import baby from "../../Components/baby.jpg";
import cart from "../../Components/shopping-cart.png";
import person from "../../Components/gender-neutral-user.png";
import logout from "../../Components/logout-rounded-left.png";
import mensfashion from "../../Components/menfashion.jpg";
import foot from "../../Components/men-sandals.jpg";
import womenfashion from "../../Components/women-fashion.jpg";
import sandals from "../../Components/women-sandals.jpg";
import kidsfashion from "../../Components/kidsfashion.jpg";
import kidssandal from "../../Components/kidssandal.jpg"

const CustomerHome = ({ setUserDetails,userDetails }) => {


    let handleLogout = () => {
        setUserDetails(null);
        sessionStorage.clear();
    }
  

    return (
        <div className="Homepage">

            <div className="navbar">

                <div className="logo"><img src={logo} alt="pic" /></div>

                <div className="search"> <input type="search" placeholder="Search your products" />
                    <input type="button" value="search" /></div>

                <div className="user">
                    <img src={person} alt="p" />
                    <h5>{ userDetails.username}</h5> 
                    
                </div>

                <div className="cart">  
                    <button> <img src={cart} alt="c" />Cart()</button>
                    </div>

                <div className="logout">
                    
                    <button className="btn-logout" onClick={handleLogout}><img src={logout} alt="l" />logout</button>

                </div>
            </div>

            <div className="components">
                <div className="child1">
                    <img src={men} alt="m" />
                    <h1>mens</h1>
                </div>
                <div className="child2">
                    <img src={women} alt="f" />
                    <h1>women</h1>
                </div>

                <div className="child3">
                    <img src={baby} alt="b" />
                    <h1>baby</h1>
                </div>
                <div className="child4">
                   <div> <h1 >Top Offers</h1></div>

                  <div className="offers-list">
                  <div className="offers">
                        <h1>Men</h1>
                        <img src={mensfashion} alt="" />
                        <h3>Clothing</h3>
                        <img src={foot} alt="" />
                        <h4>Footwear</h4>
                    </div>
                    <div className="offers">
                        <h1>Women</h1>
                        <img src={womenfashion} alt="w" />
                        <h3>Clothing</h3>
                        <img src={sandals} alt="s" />
                        <h4>Footwear</h4>
                    </div>
                    <div className="offers">
                    <h1>Kids</h1>
                        <img src={kidsfashion} alt="w" />
                        <h3>Clothing</h3>
                        <img src={kidssandal} alt="s"/>
                        <h4>Footwear</h4>
                        
                    </div>
                  </div>

                </div>

            </div>


        </div>

    );
}

export default CustomerHome;