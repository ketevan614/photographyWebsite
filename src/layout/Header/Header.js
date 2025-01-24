import './header.css'
import {Link} from "react-router-dom"
const Header = () => {
    return <header>
        <h1><Link to = '/'>NINO KHIKHADZE</Link></h1>
        <nav>
            <Link to = '/urban'>Urban</Link>
            <Link to = "/portraits">Portraits</Link>
            <Link to = "/nature">Nature</Link>
            <Link to = "/portfolio">Portfolio</Link>
        </nav>
    </header>
}
export default Header;