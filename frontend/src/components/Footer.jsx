import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/50">
                <Car className="h-5 w-5 text-slate-900" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">Kiralık Arabanı</div>
                <div className="text-xs text-amber-400 font-medium tracking-wider">BUL</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lüks ve konforlu araçlarla yolculuğunuza değer katın. Güvenli, hızlı ve ekonomik araç kiralama hizmeti.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Araçlar
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Müşteri Hizmetleri */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Kiralama Koşulları
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  İptal ve İade
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  İnönü Üniversitesi<br />BATTALGAZİ/MALATYA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+905001234567" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  +90 533 049 78 92
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:kolparserdal0@gmail.com" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  kolparserdal0@gmail.com
                </a>
              </li>
            </ul>

            {/* Sosyal Medya */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3 text-sm">Bizi Takip Edin</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-2 bg-slate-900 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-slate-800 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-900 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-slate-800 transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-900 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-slate-800 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="linkedin.com/in/serdal-kolpar-0a8a3b245/"
                  className="p-2 bg-slate-900 rounded-lg text-gray-400 hover:text-amber-400 hover:bg-slate-800 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Kiralık Arabanı Bul. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm">
                Gizlilik
              </Link>
              <Link to="/" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm">
                Koşullar
              </Link>
              <Link to="/" className="text-gray-500 hover:text-amber-400 transition-colors duration-300 text-sm">
                Çerezler
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

