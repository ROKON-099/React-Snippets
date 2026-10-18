import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/footer';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
      
      
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 md:px-6 lg:px-8">
    
        <Outlet />
      </main>
      <Footer />
      
    </div>
  );
}
