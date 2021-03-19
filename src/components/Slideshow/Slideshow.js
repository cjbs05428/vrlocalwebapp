import React from 'react';
import './slideshow.css';
import ImgComp from './Imagecomponent';

import Affordable_services from '../../images/Affordable_services.jpg';
import All_household from '../../images/All_household.jpg';
import interiors from '../../images/interiors.jpg';

let colors = [<ImgComp src={Affordable_services}/>, <ImgComp src={All_household}/>, <ImgComp src={interiors}/>];
const delay = 2500;

const Slideshow = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            >{backgroundColor}</div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
