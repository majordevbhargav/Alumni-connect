import { GraduationCap, Search, Bell, UserCircle } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">AlumniHub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search alumni..."
                className="w-64 px-4 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute right-3 top-1.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            
            <button 
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
              onClick={() => onNavigate('profile')}
            >
              <UserCircle className="h-6 w-6 text-gray-600" />
              <span className="text-gray-700">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}