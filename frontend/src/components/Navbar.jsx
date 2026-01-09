import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Car, Menu, X, LogOut, User } from 'lucide-react';
import { authAPI } from '../services/api';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setUser(authAPI.getCurrentUser());
  }, [location]);

  const handleLogout = () => {
    authAPI.logout();
    setUser(null);
    navigate('/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-amber-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/50">
              <Car className="h-6 w-6 text-slate-900" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-xl font-bold text-white tracking-tight">Kiralık Arabanı</div>
              <div className="text-xs text-amber-400 font-medium tracking-wider">BUL</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Ana Sayfa
            </Link>
			
			
            <Link
              to="/cars"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Araçlar
            </Link>
			
			
			
            <Link
              to="/"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              Hakkımızda
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300 font-medium"
            >
              İletişim
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800 rounded-lg border border-amber-500/20">
                  <User className="h-4 w-4 text-amber-400" />
                  <span className="text-sm text-white font-medium">{user.adSoyad}</span>
                </div>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Çıkış
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => navigate('/login')}
                  variant="ghost"
                  className="text-gray-300 hover:text-amber-400 hover:bg-slate-800 transition-all duration-300"
                >
                  Giriş Yap
                </Button>
                <Button
                  onClick={() => navigate('/register')}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105"
                >
                  Kayıt Ol
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700 transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-amber-500/10">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              to="/"
              className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              to="/"
              className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Araçlar
            </Link>
            <Link
              to="/"
              className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              to="/"
              className="block px-4 py-3 text-gray-300 hover:text-amber-400 hover:bg-slate-800 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
            {user ? (
              <>
                <div className="px-4 py-3 bg-slate-800 rounded-lg border border-amber-500/20">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-white font-medium">{user.adSoyad}</span>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Çıkış
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => {
                    navigate('/login');
                    setIsOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                >
                  Giriş Yap
                </Button>
                <Button
                  onClick={() => {
                    navigate('/register');
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold shadow-lg shadow-amber-500/50 transition-all duration-300"
                >
                  Kayıt Ol
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;