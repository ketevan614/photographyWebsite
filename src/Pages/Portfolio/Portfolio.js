import Portcover from '../../Components/PortCover/Portcover';
import './portfolio.css';

// Import images directly
import natCover from '../../images/natCover.jpg';
import portraitCover from '../../images/portraitCover.JPG';
import urbanCover from '../../images/urbanCover.jpg';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Portcover image={natCover} title='NATURE' />
            <Portcover image={portraitCover} title='PORTRAITS' />
            <Portcover image={urbanCover} title='URBAN' />
        </div>
    );
};

export default Portfolio;
