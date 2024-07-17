import { LOGO_URL } from "../utils/constant";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
                <h3>e-Food</h3>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Blog</a>
                <a href="/">Contact Us</a>
                <a href="/">Cart</a>
            </div>
        </div>
    );
};

export default Header;