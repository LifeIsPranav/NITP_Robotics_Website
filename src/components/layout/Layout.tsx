import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '@/components/ui/toaster';
import { CursorFollower } from '@/components/CursorFollower';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <CursorFollower />
      <Header />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
