'use client';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      // Validasi dasar
      if (!email || !password) {
        setError('Email dan password harus diisi');
        return;
      }

      // Simulasi login berhasil
      console.log('Login:', { email, password });
      router.push('/'); // Redirect ke home setelah login
    } catch (err) {
      setError('Terjadi kesalahan saat login');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-amber-900 mb-6 text-center">
          Masuk ke Akun Anda
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-amber-900 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-800 text-amber-50 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Masuk
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-amber-900">
          Belum punya akun?{' '}
          <Link href="/register" className="text-amber-800 hover:underline font-medium">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
} 