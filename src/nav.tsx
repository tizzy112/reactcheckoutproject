import'./App.css'

const NavBar = () =>{
    return(
        <div>
        <nav className="navbar ">
            <div className="container-fluid">
            <h3>MyCheckout</h3>
            </div>
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Checkout</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">payment</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}
export default NavBar;