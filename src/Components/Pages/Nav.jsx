import { Link } from "react-router-dom"

const Nav =()=>{
    return(
        <div>
            
            <div className="logo">
          <img
            src="https://donpeppe.qodeinteractive.com/wp-content/uploads/2019/11/h5-logo-divided-header-dark.png"
            width={100}
            height={70}
            alt="logo"
          />
        </div>

        <div className="flx home_menu flx_dir_cl">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            HOME
          </Link>
          <Link to="/pages" style={{ textDecoration: "none", color: "black" }}>
            PAGES
          </Link>
          <Link to="/menu" style={{ textDecoration: "none", color: "black" }}>
            MENU
          </Link>
          <Link to="/events" style={{ textDecoration: "none", color: "black" }}>
            EVENTS
          </Link>
          <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
            BLOG
          </Link>
          <Link
            to="/landing"
            style={{ textDecoration: "none", color: "black" }}
          >
            LANDING
          </Link>
        </div>
        
        </div>
    )
}
export default Nav;