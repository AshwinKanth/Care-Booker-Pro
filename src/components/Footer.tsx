import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-info text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Care Booker Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
