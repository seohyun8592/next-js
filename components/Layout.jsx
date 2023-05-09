import React from 'react';
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="wrap">
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
