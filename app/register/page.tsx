'use client';
import Link from 'next/link';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      // Validasi password
      if (formData.password !== formData.confirmPassword) {
        setError('Password tidak cocok');
        return;
      }

      if (formData.password.length < 6) {
        setError('Password minimal 6 karakter');
        return;
      }

      // Simulasi registrasi berhasil
      console.log('Register:', formData);
      router.push('/login'); // Redirect ke login setelah register
    } catch (err) {
      setError('Terjadi kesalahan saat mendaftar');
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-amber-900 mb-6 text-center">
          Daftar Akun Baru
        </h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-amber-900 mb-1">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-800 text-amber-50 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Daftar
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-amber-900">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-amber-800 hover:underline font-medium">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
} 