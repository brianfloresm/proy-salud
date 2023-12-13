import { Outlet,Link } from "react-router-dom";
const Layaut = ()=>{
    return<di>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/servicios">Historia</Link>
                </li>
                <li>
                    <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                    <Link to="*">Default</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </di>
}
export default Layaut;