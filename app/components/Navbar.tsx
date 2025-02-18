'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <nav className="bg-amber-900 text-amber-50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Galeri Seni Indonesia
          </Link>
          
          <div className="flex gap-4 items-center">
            {!isLoggedIn ? (
              <>
                <Link 
                  href="/login"
                  className="px-4 py-2 text-amber-200 hover:text-amber-100"
                >
                  Masuk
                </Link>
                <Link 
                  href="/register"
                  className="px-4 py-2 bg-amber-700 hover:bg-amber-600 rounded-full text-sm font-medium transition-colors"
                >
                  Daftar
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/profile" className="text-amber-200 hover:text-amber-100">
                  Profil Saya
                </Link>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="px-4 py-2 text-amber-200 hover:text-amber-100"
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 