import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style"><strong>© Bilal Naeemuddin &nbsp; {new Date().getFullYear()}</strong></div>
    </div>
  );
};

export default FooterPanel;