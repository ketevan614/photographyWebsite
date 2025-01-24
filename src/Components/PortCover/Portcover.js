import './portcover.css'
import { useNavigate } from 'react-router-dom';
const Portcover = ({image,title}) => {
    const navigate = useNavigate();
    
    return <div className='single-port-cover' onClick={() => {
        navigate(`/${title.toLowerCase()}`);
    }}>
        <p>{title}</p>
        <img src = {image} alt = {title}></img>
    </div>
}
export default Portcover;