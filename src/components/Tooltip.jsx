import React from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm rounded-lg whitespace-nowrap z-50">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;