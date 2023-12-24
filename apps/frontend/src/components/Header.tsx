// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg">Video Encoding</h1>
        <nav>
          <Link className="px-2" to="/">Upload Video</Link>
          <Link className="px-2" to="/display">Display Video</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
