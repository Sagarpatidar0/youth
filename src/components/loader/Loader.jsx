import  { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 
import "./Loader.css"

const Loader = ({ onLoadComplete }) => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete();
      setIsLoaderVisible(false);
    }, 7000); 

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return isLoaderVisible ? (
    <div className="loader"  >
      <img   src="./images/LOADER.gif" alt="" />
    </div>
  ) : null;
};

// Add prop types validation
Loader.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};

export default Loader;
