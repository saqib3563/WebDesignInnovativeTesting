import { useEffect, useState } from 'react';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loader-container ${!isVisible ? 'loader-hidden' : ''}`}>
      <div className="text-center">
        <div className="loader"></div>
        <div className="loader-text">LOADING</div>
      </div>
    </div>
  );
};

export default Loader;