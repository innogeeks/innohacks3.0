import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Your component content */}

      {/* Back to top button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          <i className="fa fa-angle-up"></i>
        </button>
      )}
    </div>
  );
}

export default MyComponent;
