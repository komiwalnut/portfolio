import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
      <p>© {new Date().getFullYear()} komiwalnut. All rights reserved.</p>
    </footer>
  );
};

export default Footer;