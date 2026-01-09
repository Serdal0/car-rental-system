import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { authAPI } from '../services/api';
import {
  User,
  Mail,
  Phone,
  CreditCard,
  Calendar,
  Clock,
  Car,
} from 'lucide-react';

const DashboardPage = () => {
  const navigate = useNavigate();

  // 🔹 TÜM HOOK'LAR EN ÜSTE
  const [user, setUser] = useState(null);
  const [rentals, setRentals] = useState([]); // <-- BURAYA ÇEKTİM

  useEffect(() => {
    const currentUser = authAPI.getCurrentUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
  }, [navigate]);

  // İstersen burada loading view gösterebilirsin
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  // TODO: Kiralama geçmişi için backend çağrısı
  // useEffect(() => {
  //   if (!user) return;
  //   rentalAPI.getRentalsByUser(user.id).then(setRentals);
  // }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Header */}
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              Hoş Geldiniz, <span className="gradient-text">{user.adSoyad}</span>
            </h1>
            <p className="text-xl text-gray-400">
              Hesap bilgileriniz ve kiralama geçmişiniz
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Profile Card */}
            <div className="lg:col-span-1">
              <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50">
                      <User className="h-12 w-12 text-slate-900" strokeWidth={2} />
                    </div>
                  </div>

                  <div className="text-center space-y-1">
                    <h2 className="text-2xl font-bold text-white">{user.adSoyad}</h2>
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/30">
                      Aktif Üye
                    </Badge>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-800">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Mail className="h-5 w-5 text-amber-400" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Phone className="h-5 w-5 text-amber-400" />
                      <span className="text-sm">{user.telefon}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <CreditCard className="h-5 w-5 text-amber-400" />
                      <span className="text-sm">{user.ehliyetNo}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Calendar className="h-5 w-5 text-amber-400" />
                      <span className="text-sm">
                        {new Date(user.ehliyetTarihi).toLocaleDateString('tr-TR')}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                  >
                    Profili Düzenle
                  </Button>
                </div>
              </Card>

              {/* Stats Cards */}
              <div className="mt-6 space-y-4">
                <Card className="bg-slate-900/50 border-slate-800">
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">2</div>
                      <div className="text-sm text-gray-400">Toplam Kiralama</div>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Car className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                </Card>
                <Card className="bg-slate-900/50 border-slate-800">
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">15</div>
                      <div className="text-sm text-gray-400">Toplam Gün</div>
                    </div>
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <Clock className="h-6 w-6 text-green-400" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Rental History */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Kiralama Geçmişi</h2>
                <div className="space-y-4">
                  {rentals.length === 0 ? (
                    <Card className="bg-slate-900/50 border-slate-800">
                      <div className="p-6 text-center text-gray-400">
                        Henüz kiralama geçmişiniz bulunmamaktadır.
                      </div>
                    </Card>
                  ) : (
                    rentals.map((rental) => (
                      <Card
                        key={rental.id}
                        className="bg-slate-900/50 border-slate-800 hover:border-amber-500/50 transition-all duration-300"
                      >
                        {/* ... aynı içeriğin geri kalanı ... */}
                      </Card>
                    ))
                  )}
                </div>
              </div>

              {/* Quick Actions vs... (senin kod aynen devam edebilir) */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardPage;
