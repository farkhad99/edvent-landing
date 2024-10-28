'use client';

import { useEffect, useState } from 'react';

import { ModalProvider } from '@/components/modal/EditWrapper';

// Authentication check function
async function checkAuth() {
  const token = localStorage.getItem('adminToken');

  if (token) {
    try {
      const response = await fetch('/api/auth', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        return true;
      }
      localStorage.removeItem('adminToken');
      await checkAuth(); // Re-authenticate
    } catch {
      localStorage.removeItem('adminToken');
      await checkAuth(); // Re-authenticate
    }
  }

  if (!token) {
    const login = prompt('Enter admin login:');
    const password = prompt('Enter admin password:');

    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login, password })
    });

    if (response.ok) {
      const res = await response.json();
      localStorage.setItem('adminToken', res.token);
      return true;
    }

    alert('Invalid credentials!');
    return checkAuth(); // Retry authentication
  }
  return true;
}

export default function AdminLayout(props: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth().then((authenticated) => {
      setIsAuthenticated(authenticated);
    });
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="flex h-[100vh] w-full items-center justify-center">
        <b>Authenticating...</b>
      </div>
    ); // Or loading state
  }

  return <ModalProvider>{props.children}</ModalProvider>;
}
