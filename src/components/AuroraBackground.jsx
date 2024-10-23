// In AuroraBackground.jsx or wherever it is defined
const AuroraBackground = ({ children }) => {
    return (
      <div className="background-container">
        {children}
      </div>
    );
  };
  
  // CSS
  <style jsx>{`
    .background-container {
      background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Change to your desired gradient */
      height: 100vh; /* Full height */
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}</style>
  