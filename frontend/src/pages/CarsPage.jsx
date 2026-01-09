//
//import React, { useMemo, useState } from 'react';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
//import { Card } from '../components/ui/card';
//import { Button } from '../components/ui/button';
//import { Badge } from '../components/ui/badge';
//import { Input } from '../components/ui/input';
//import {
//  Car,
//  Search,
//  SlidersHorizontal,
//  Gauge,
//  Users,
//  Calendar,
//  MapPin,
//} from 'lucide-react';
//
//// Şimdilik örnek veri – backend bağlayınca burayı API'den doldurursun
//const carsData = [
//  {
//    id: '1',
//    marka: 'Mercedes-Benz',
//    model: 'E 220d AMG',
//    yil: 2023,
//    gunlukFiyat: 850,
//    yakit: 'Dizel',
//    vites: 'Otomatik',
//    koltuk: 5,
//    konum: 'İstanbul',
//    image:
//      'https://images.unsplash.com/photo-1617814076367-2f6c5c87c3c8?w=900&q=80',
//    uygunluk: 'müsait', // müsait / dolu
//  },
//  {
//    id: '2',
//    marka: 'BMW',
//    model: '520i M Sport',
//    yil: 2022,
//    gunlukFiyat: 900,
//    yakit: 'Benzin',
//    vites: 'Otomatik',
//    koltuk: 5,
//    konum: 'Ankara',
//    image:
//      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80',
//    uygunluk: 'müsait',
//  },
//  {
//    id: '3',
//    marka: 'Audi',
//    model: 'A6 40 TDI Quattro',
//    yil: 2024,
//    gunlukFiyat: 950,
//    yakit: 'Dizel',
//    vites: 'Otomatik',
//    koltuk: 5,
//    konum: 'İzmir',
//    image:
//      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80',
//    uygunluk: 'dolu',
//  },
//  {
//    id: '4',
//    marka: 'Volkswagen',
//    model: 'Passat 1.5 TSI',
//    yil: 2021,
//    gunlukFiyat: 600,
//    yakit: 'Benzin',
//    vites: 'Otomatik',
//    koltuk: 5,
//    konum: 'Bursa',
//    image:
//      'https://images.unsplash.com/photo-1549921296-3c6133c332cc?w=900&q=80',
//    uygunluk: 'müsait',
//  },
//];
//
//const CarsPage = () => {
//  const [search, setSearch] = useState('');
//  const [fuelFilter, setFuelFilter] = useState('all');
//  const [gearFilter, setGearFilter] = useState('all');
//  const [sortBy, setSortBy] = useState('priceAsc');
//
//  const filteredCars = useMemo(() => {
//    let result = [...carsData];
//
//    // Arama (marka + model + konum)
//    if (search.trim() !== '') {
//      const q = search.toLowerCase();
//      result = result.filter(
//        (c) =>
//          c.marka.toLowerCase().includes(q) ||
//          c.model.toLowerCase().includes(q) ||
//          c.konum.toLowerCase().includes(q)
//      );
//    }
//
//    if (fuelFilter !== 'all') {
//      result = result.filter((c) => c.yakit === fuelFilter);
//    }
//
//    if (gearFilter !== 'all') {
//      result = result.filter((c) => c.vites === gearFilter);
//    }
//
//    if (sortBy === 'priceAsc') {
//      result.sort((a, b) => a.gunlukFiyat - b.gunlukFiyat);
//    } else if (sortBy === 'priceDesc') {
//      result.sort((a, b) => b.gunlukFiyat - a.gunlukFiyat);
//    } else if (sortBy === 'yearDesc') {
//      result.sort((a, b) => b.yil - a.yil);
//    }
//
//    return result;
//  }, [search, fuelFilter, gearFilter, sortBy]);
//
//  return (
//    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//      <Navbar />
//
//      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
//        <div className="max-w-7xl mx-auto space-y-8">
//          {/* Başlık */}
//          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
//            <div className="space-y-2">
//              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-medium">
//                <Car className="h-4 w-4 mr-2" />
//                Araç Filomuz
//              </div>
//              <h1 className="text-3xl sm:text-4xl font-bold text-white">
//                Kiralanabilir Araçlar
//              </h1>
//              <p className="text-gray-400 max-w-2xl">
//                Geniş araç filomuzdan bütçenize ve ihtiyacınıza en uygun aracı
//                seçin. Anında online rezervasyon imkanı.
//              </p>
//            </div>
//          </div>
//
//          {/* Arama & Filtreler */}
//          <Card className="bg-slate-900/70 border-slate-800 backdrop-blur-sm">
//            <div className="p-4 sm:p-6 space-y-4">
//              <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
//                {/* Arama */}
//                <div className="w-full lg:max-w-md">
//                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
//                    Araç Ara
//                  </label>
//                  <div className="mt-1 relative">
//                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
//                    <Input
//                      placeholder="Marka, model veya şehir ara..."
//                      value={search}
//                      onChange={(e) => setSearch(e.target.value)}
//                      className="pl-9 bg-slate-950/60 border-slate-700 text-sm text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500"
//                    />
//                  </div>
//                </div>
//
//                {/* Filtreler */}
//                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
//                  {/* Yakıt */}
//                  <div>
//                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
//                      Yakıt Tipi
//                    </label>
//                    <select
//                      value={fuelFilter}
//                      onChange={(e) => setFuelFilter(e.target.value)}
//                      className="mt-1 block w-full rounded-md bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
//                    >
//                      <option value="all">Tümü</option>
//                      <option value="Benzin">Benzin</option>
//                      <option value="Dizel">Dizel</option>
//                      <option value="Hibrit">Hibrit</option>
//                    </select>
//                  </div>
//
//                  {/* Vites */}
//                  <div>
//                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
//                      Vites Tipi
//                    </label>
//                    <select
//                      value={gearFilter}
//                      onChange={(e) => setGearFilter(e.target.value)}
//                      className="mt-1 block w-full rounded-md bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
//                    >
//                      <option value="all">Tümü</option>
//                      <option value="Otomatik">Otomatik</option>
//                      <option value="Manuel">Manuel</option>
//                    </select>
//                  </div>
//
//                  {/* Sıralama */}
//                  <div>
//                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wide">
//                      Sırala
//                    </label>
//                    <div className="mt-1 flex items-center gap-2">
//                      <SlidersHorizontal className="h-4 w-4 text-gray-500" />
//                      <select
//                        value={sortBy}
//                        onChange={(e) => setSortBy(e.target.value)}
//                        className="block w-full rounded-md bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
//                      >
//                        <option value="priceAsc">Fiyat (Artan)</option>
//                        <option value="priceDesc">Fiyat (Azalan)</option>
//                        <option value="yearDesc">Model Yılı (Yeni)</option>
//                      </select>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </Card>
//
//          {/* Araç Listesi */}
//          <div className="space-y-4">
//            <div className="flex items-center justify-between">
//              <p className="text-sm text-gray-400">
//                Toplam{' '}
//                <span className="font-semibold text-amber-400">
//                  {filteredCars.length}
//                </span>{' '}
//                araç listeleniyor.
//              </p>
//            </div>
//
//            {filteredCars.length === 0 ? (
//              <Card className="bg-slate-900/60 border-slate-800">
//                <div className="p-8 text-center text-gray-400">
//                  Seçtiğiniz kriterlere uygun araç bulunamadı. Filtreleri
//                  değiştirerek tekrar deneyin.
//                </div>
//              </Card>
//            ) : (
//              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
//                {filteredCars.map((car) => (
//                  <Card
//                    key={car.id}
//                    className="group bg-slate-900/70 border-slate-800 hover:border-amber-500/60 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden flex flex-col"
//                  >
//                    {/* Görsel */}
//                    <div className="relative h-44 w-full overflow-hidden">
//                      <img
//                        src={car.image}
//                        alt={`${car.marka} ${car.model}`}
//                        className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                      />
//                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent pointer-events-none" />
//                      <div className="absolute top-3 left-3">
//                        <Badge className="bg-slate-900/80 border-slate-700 text-xs">
//                          {car.yil} • {car.vites}
//                        </Badge>
//                      </div>
//                      <div className="absolute top-3 right-3">
//                        <Badge
//                          className={
//                            car.uygunluk === 'müsait'
//                              ? 'bg-green-500/20 text-green-300 border-green-500/40 text-xs'
//                              : 'bg-red-500/20 text-red-300 border-red-500/40 text-xs'
//                          }
//                        >
//                          {car.uygunluk === 'müsait'
//                            ? 'Müsait'
//                            : 'Şu an dolu'}
//                        </Badge>
//                      </div>
//                    </div>
//
//                    {/* Bilgiler */}
//                    <div className="flex-1 p-5 space-y-4 flex flex-col">
//                      <div>
//                        <h3 className="text-lg font-semibold text-white">
//                          {car.marka}{' '}
//                          <span className="text-gray-300">{car.model}</span>
//                        </h3>
//                        <div className="mt-1 flex items-center text-xs text-gray-400 gap-2">
//                          <MapPin className="h-3 w-3 text-amber-400" />
//                          <span>{car.konum}</span>
//                        </div>
//                      </div>
//
//                      <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
//                        <div className="flex items-center gap-2">
//                          <Gauge className="h-4 w-4 text-amber-400" />
//                          <span>{car.yakit}</span>
//                        </div>
//                        <div className="flex items-center gap-2">
//                          <Users className="h-4 w-4 text-amber-400" />
//                          <span>{car.koltuk} Kişilik</span>
//                        </div>
//                        <div className="flex items-center gap-2">
//                          <Calendar className="h-4 w-4 text-amber-400" />
//                          <span>Günlük Kiralama</span>
//                        </div>
//                        <div className="flex items-center gap-2">
//                          <Car className="h-4 w-4 text-amber-400" />
//                          <span>{car.vites}</span>
//                        </div>
//                      </div>
//
//                      <div className="mt-auto pt-3 border-t border-slate-800 flex items-center justify-between">
//                        <div>
//                          <div className="text-xs text-gray-400">
//                            Günlük Fiyat
//                          </div>
//                          <div className="text-xl font-bold text-amber-400">
//                            ₺{car.gunlukFiyat}
//                            <span className="text-xs text-gray-400 font-normal ml-1">
//                              /gün
//                            </span>
//                          </div>
//                        </div>
//
//                        <Button
//                          size="sm"
//                          disabled={car.uygunluk !== 'müsait'}
//                          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
//                          onClick={() => {
//                            // İleride rezervasyon / detay sayfasına yönlendirme:
//                            // navigate(`/cars/${car.id}`)
//                          }}
//                        >
//                          Araç Detayı
//                        </Button>
//                      </div>
//                    </div>
//                  </Card>
//                ))}
//              </div>
//            )}
//          </div>
//        </div>
//      </main>
//
//      <Footer />
//    </div>
//  );
//};
//
//export default CarsPage;



// src/pages/CarsPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { carAPI } from '../services/api';

import {
  Car,
  Fuel,
  Gauge,
  Users,
  Calendar,
  AlertCircle,
} from 'lucide-react';

const CarsPage = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fiyat formatlayıcı (₺850 gibi)
  const formatPrice = (value) => {
    if (value == null) return '-';
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      maximumFractionDigits: 0,
    }).format(value);
  };

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await carAPI.getAll(); // GET /api/cars/list
        setCars(data || []);
      } catch (err) {
        console.error('Araçlar yüklenirken hata:', err);
        setError(err.message || 'Araçlar yüklenirken bir hata oluştu.');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Başlık */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                Araç Filomuz
              </h1>
              <p className="mt-2 text-lg text-gray-400">
                Tüm araçlarımızı inceleyin, size en uygun olanı seçin.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30">
                {cars.length} araç listelendi
              </Badge>
              <Button
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                onClick={() => navigate('/')}
              >
                Ana Sayfaya Dön
              </Button>
            </div>
          </div>

          {/* Yükleniyor */}
          {loading && (
            <div className="mt-10 flex justify-center">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                <span>Araçlar yükleniyor...</span>
              </div>
            </div>
          )}

          {/* Hata */}
          {!loading && error && (
            <Card className="mt-10 bg-red-950/40 border-red-800">
              <div className="p-6 flex items-center gap-3 text-red-200">
                <AlertCircle className="h-5 w-5" />
                <span>{error}</span>
              </div>
            </Card>
          )}

          {/* Araç Listesi */}
          {!loading && !error && (
            <>
              {cars.length === 0 ? (
                <Card className="mt-10 bg-slate-900/60 border-slate-800">
                  <div className="p-8 text-center text-gray-400">
                    Şu anda listelenecek aktif araç bulunmamaktadır.
                  </div>
                </Card>
              ) : (
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {cars.map((car) => (
                    <Card
                      key={car.id}
                      className="group bg-slate-900/60 border-slate-800 hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      {/* Görsel */}
                      <div className="relative h-52 w-full overflow-hidden">
                        <img
                          src={
                            car.imageUrl ||
                            'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80'
                          }
                          alt={`${car.marka} ${car.model}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-black/40 backdrop-blur text-amber-400 border-amber-500/40">
                            {car.yil || 'Yıl bilgisi yok'}
                          </Badge>
                        </div>
                      </div>

                      {/* İçerik */}
                      <div className="flex-1 p-5 flex flex-col gap-4">
                        {/* Başlık + fiyat */}
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <Car className="h-5 w-5 text-amber-400" />
                              <h2 className="text-lg font-semibold text-white">
                                {car.marka} {car.model}
                              </h2>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                              {car.yakit} · {car.vites}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-400">Günlük</div>
                            <div className="text-2xl font-bold text-amber-400">
                              {formatPrice(car.gunlukFiyat)}
                            </div>
                          </div>
                        </div>

                        {/* Özellik satırı */}
                        <div className="grid grid-cols-3 gap-3 text-xs text-gray-300">
                          <div className="flex items-center gap-2">
                            <Fuel className="h-4 w-4 text-amber-400" />
                            <span>{car.yakit || '-'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Gauge className="h-4 w-4 text-amber-400" />
                            <span>{car.vites || '-'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-amber-400" />
                            <span>{car.koltuk || '-'} kişilik</span>
                          </div>
                        </div>

                        {/* Özellik etiketleri */}
                        {car.ozellikler && car.ozellikler.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {car.ozellikler.slice(0, 4).map((ozellik, index) => (
                              <Badge
                                key={index}
                                className="bg-slate-800/80 text-gray-200 border-slate-700 text-[11px] px-2 py-1"
                              >
                                {ozellik}
                              </Badge>
                            ))}
                            {car.ozellikler.length > 4 && (
                              <Badge className="bg-slate-800/80 text-gray-300 border-slate-700 text-[11px] px-2 py-1">
                                +{car.ozellikler.length - 4} daha
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Alt kısım / buton */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-800 mt-auto">
                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Calendar className="h-4 w-4 text-amber-400" />
                            <span>Esnek kiralama seçenekleri</span>
                          </div>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold text-xs px-4"
                            onClick={() => {
                              // İleride detay sayfasına yönlendirmek için:
                              // navigate(`/cars/${car.id}`);
                              console.log('Kiralama / detay tıklandı, id:', car.id);
                            }}
                          >
                            Kirala
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarsPage;
