import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavBar() {
  const router = useRouter();

  return (
    <header>
      <img src="vercel.svg" alt="logo" />

      <nav>
        <Link legacyBehavior href="/">
          <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link
          legacyBehavior
          href="/about"
          className={router.pathname === '/about' ? 'active' : ''}
        >
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
      </nav>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }

        nav {
          display: flex;
          width: 100%;
          gap: 10px;
          justify-content: center;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -12px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }

        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        nav .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </header>
  );
}
