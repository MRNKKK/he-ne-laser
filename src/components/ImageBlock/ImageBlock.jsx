import { useContext } from 'react';
import LanguageContext from '../../providers/LanguageContext';
import DistanceContext from '../../providers/DistanceContext';
import TurnedContext from '../../providers/TurnedContext';

import lazerOff from '../../assets/lazerOff.jpg';
import lazerOn from '../../assets/lazerOn.jpg';
import './ImageBlock.css';

const ImageBlock = () => {
  const { isEnglish } = useContext(LanguageContext);
  const { distance, setDistance } = useContext(DistanceContext);
  const { isTurned } = useContext(TurnedContext);

  const maxDistance = 15;
  const minDistance = 3;  

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setDistance(value);  
  };

  return (
    <div className="container">
      <div className="image-block">
        <div>
          <img src={isTurned ? lazerOn : lazerOff} className="image" />
        </div>

        <div className="under-image-block">
          <div className="under-image-text">
            <p>
              {isEnglish
                ? 'Distance of the diffraction grating from the screen: '
                : 'Відстань дифракційної решітки від екрану:'}
            </p>
            <p>
              {distance}
              {isEnglish ? '(cm)' : '(см)'}
            </p>
          </div>
          <input
            type="number"
            value={distance}
            className="input-range"
            min={minDistance}
            max={maxDistance}
            step="0.1"
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <input
          type="range"
          value={distance}
          className="input-slider custom-slider"
          min={minDistance}
          max={maxDistance}
          step="0.1"
          onChange={handleSliderChange}
          style={{ direction: 'rtl' }} 
        />
      </div>
    </div>
  );
};

export default ImageBlock;
