import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return <footer>
        <p>© 2035 by NINO KHIKHADZE. powered by Ketevan Arevadze.</p>
        <nav>
            <Link>Facebook</Link>
            <Link>Instagram</Link>
            <Link>Twiter</Link>
        </nav>
    </footer>
}
export default Footer;