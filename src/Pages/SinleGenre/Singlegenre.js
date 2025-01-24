import './SingleGenre.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImages } from '../../redux/action';
import Modal from '../../Components/Modal/Modal';

const Singlegenre = ({ title }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);


    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => setIsModalOpen(false);


    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + array.length) % array.length);
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % array.length);
    };


    useEffect(() => {
        const requireImagesNat = require.context('../../images/nature', false, /\.(jpg|png|jpeg)$/);
        const natures = requireImagesNat.keys().map(requireImagesNat);
        dispatch(setImages('nature', natures));

        const requireImagesPor = require.context('../../images/portraits', false, /\.(jpg|png|jpeg)$/);
        const portraits = requireImagesPor.keys().map(requireImagesPor);
        dispatch(setImages('portrait', portraits));

        const requireImagesUr = require.context('../../images/urban', false, /\.(jpg|png|jpeg)$/);
        const urbans = requireImagesUr.keys().map(requireImagesUr);
        dispatch(setImages('urban', urbans));
    }, [dispatch]);

    const array = useSelector((state) => state[title]) || []; 
    return (
        <div className="single-genre">
            <p>{title.toUpperCase()}</p>
            <div className="container">
                {array.map((image, index) => (
                    <div className="image-container" key={index} onClick={() => handleImageClick(index)}>
                        <img
                            src={image}
                            alt={{title}}
                        className={index % 2 === 0 ? 'left' : 'right'}
            />
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                image={array[currentIndex]}
                onClose={handleCloseModal}
                onPrev={handlePrevImage}
                onNext={handleNextImage}
            />
        </div>
    );
};

export default Singlegenre;