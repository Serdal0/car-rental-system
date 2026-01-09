//import React from 'react';
//import { useNavigate } from 'react-router-dom';
//import { Button } from '../components/ui/button';
//import { Card } from '../components/ui/card';
//import { Badge } from '../components/ui/badge';
//import Navbar from '../components/Navbar';
//import Footer from '../components/Footer';
//// Mock data kaldırıldı - Backend'den gelecek
//const mockCars = []; // Geçici olarak boş, backend servisi eklendiğinde doldurulacak
//const mockTestimonials = []; // Geçici olarak boş, backend servisi eklendiğinde doldurulacak
//import {
//  Car,
//  Shield,
//  Clock,
//  CreditCard,
//  Star,
//  CheckCircle,
//  ArrowRight,
//  Fuel,
//  Users,
//  Settings,
//  Sparkles
//} from 'lucide-react';
//
//const HomePage = () => {
//  const navigate = useNavigate();
//
//  return (
//    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
//      <Navbar />
//
//      {/* Hero Section */}
//      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//        {/* Background Pattern */}
//        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
//        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
//        
//        {/* Ambient Light Effect */}
//        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
//        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
//
//        <div className="max-w-7xl mx-auto relative z-10">
//          <div className="grid lg:grid-cols-2 gap-12 items-center">
//            {/* Sol - İçerik */}
//            <div className="space-y-8">
//              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 border border-amber-500/30 rounded-full backdrop-blur-sm">
//                <Sparkles className="h-4 w-4 text-amber-400" />
//                <span className="text-sm text-amber-400 font-medium">Premium Araç Kiralama</span>
//              </div>
//              
//              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
//                <span className="text-white">Lüks Arabanızı</span>
//                <br />
//                <span className="gradient-text">Hemen Bulun</span>
//              </h1>
//              
//              <p className="text-xl text-gray-400 leading-relaxed">
//                Premium araç filosu ile konforlu ve güvenli yolculuklar. En iyi fiyatlarla, en kaliteli hizmet.
//              </p>
//              
//              <div className="flex flex-col sm:flex-row gap-4">
//                <Button
//                  onClick={() => navigate('/register')}
//                  size="lg"
//                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg px-8 py-6 shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105"
//                >
//                  Hemen Başla
//                  <ArrowRight className="ml-2 h-5 w-5" />
//                </Button>
//                <Button
//                  onClick={() => navigate('/login')}
//                  size="lg"
//                  variant="outline"
//                  className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
//                >
//                  Giriş Yap
//                </Button>
//              </div>
//
//              {/* Stats */}
//              <div className="grid grid-cols-3 gap-6 pt-8">
//                <div className="space-y-1">
//                  <div className="text-3xl font-bold text-white">500+</div>
//                  <div className="text-sm text-gray-400">Araç</div>
//                </div>
//                <div className="space-y-1">
//                  <div className="text-3xl font-bold text-white">10K+</div>
//                  <div className="text-sm text-gray-400">Mutlu Müşteri</div>
//                </div>
//                <div className="space-y-1">
//                  <div className="text-3xl font-bold text-white">4.9</div>
//                  <div className="text-sm text-gray-400">Ortalama Puan</div>
//                </div>
//              </div>
//            </div>
//
//            {/* Sağ - Hero Image (Mock Car Images) */}
//            <div className="relative lg:h-[600px] flex items-center justify-center">
//              <div className="relative w-full h-full">
//                {/* Main Car Image */}
//                <div className="absolute inset-0 flex items-center justify-center">
//                  <div className="relative w-full max-w-lg transform hover:scale-105 transition-transform duration-500">
//                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-transparent rounded-3xl blur-3xl" />
//                    <img
//                      src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
//                      alt="Lüks Araç"
//                      className="relative rounded-3xl shadow-2xl border border-amber-500/20"
//                    />
//                  </div>
//                </div>
//                
//                {/* Floating Badge */}
//                <div className="absolute top-10 right-10 glass-effect rounded-2xl p-4 shadow-xl float-animation">
//                  <div className="flex items-center space-x-2">
//                    <div className="p-2 bg-amber-500 rounded-lg">
//                      <Star className="h-5 w-5 text-slate-900" fill="currentColor" />
//                    </div>
//                    <div>
//                      <div className="text-lg font-bold text-white">4.9</div>
//                      <div className="text-xs text-gray-400">Müşteri Puanı</div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </section>
//
//      {/* Features Section */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
//        <div className="max-w-7xl mx-auto">
//          <div className="text-center mb-16">
//            <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">Özellikler</Badge>
//            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Neden Bizi Seçmelisiniz?</h2>
//            <p className="text-xl text-gray-400">Müşteri memnuniyeti odaklı hizmet anlayışımız</p>
//          </div>
//
//          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//            {[
//              {
//                icon: Shield,
//                title: 'Güvenli Kiralama',
//                description: 'Tam kapsamlı sigorta ve 7/24 yol yardımı',
//                gradient: 'from-blue-500 to-blue-600'
//              },
//              {
//                icon: Clock,
//                title: 'Hızlı Teslimat',
//                description: '30 dakika içinde aracınız hazır',
//                gradient: 'from-amber-500 to-amber-600'
//              },
//              {
//                icon: CreditCard,
//                title: 'Esnek Ödeme',
//                description: 'Tüm kredi kartlarına taksit imkanı',
//                gradient: 'from-green-500 to-green-600'
//              },
//              {
//                icon: Star,
//                title: 'Premium Araçlar',
//                description: '2023-2024 model lüks araç filosu',
//                gradient: 'from-purple-500 to-purple-600'
//              }
//            ].map((feature, index) => (
//              <Card
//                key={index}
//                className="bg-slate-900/50 border-slate-800 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 backdrop-blur-sm group"
//              >
//                <div className="p-6 space-y-4">
//                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                    <feature.icon className="h-7 w-7 text-white" strokeWidth={2} />
//                  </div>
//                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">{feature.title}</h3>
//                  <p className="text-gray-400">{feature.description}</p>
//                </div>
//              </Card>
//            ))}
//          </div>
//        </div>
//      </section>
//
//      {/* Cars Section */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
//        <div className="max-w-7xl mx-auto">
//          <div className="text-center mb-16">
//            <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">Araçlar</Badge>
//            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Premium Araç Filomuz</h2>
//            <p className="text-xl text-gray-400">En yeni ve en lüks modeller</p>
//          </div>
//
//          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//            {mockCars.length === 0 ? (
//              <div className="col-span-3 text-center text-gray-400 py-12">
//                <p className="text-lg">Henüz araç bulunmamaktadır.</p>
//                <p className="text-sm mt-2">Yakında eklenmeye başlayacaktır.</p>
//              </div>
//            ) : (
//              mockCars.map((car) => (
//              <Card
//                key={car.id}
//                className="bg-slate-900 border-slate-800 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 overflow-hidden group"
//              >
//                <div className="relative overflow-hidden">
//                  <img
//                    src={car.image}
//                    alt={`${car.marka} ${car.model}`}
//                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
//                  />
//                  <div className="absolute top-4 right-4">
//                    <Badge className="bg-amber-500 text-slate-900 font-bold">{car.yil}</Badge>
//                  </div>
//                </div>
//                <div className="p-6 space-y-4">
//                  <div>
//                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
//                      {car.marka}
//                    </h3>
//                    <p className="text-gray-400">{car.model}</p>
//                  </div>
//
//                  <div className="grid grid-cols-3 gap-2">
//                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
//                      <Fuel className="h-4 w-4" />
//                      <span>{car.yakit}</span>
//                    </div>
//                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
//                      <Settings className="h-4 w-4" />
//                      <span>{car.vites}</span>
//                    </div>
//                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
//                      <Users className="h-4 w-4" />
//                      <span>{car.koltuk} Kişi</span>
//                    </div>
//                  </div>
//
//                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
//                    <div>
//                      <div className="text-3xl font-bold text-amber-400">₺{car.gunlukFiyat}</div>
//                      <div className="text-xs text-gray-500">günlük</div>
//                    </div>
//                    <Button
//                      onClick={() => navigate('/register')}
//                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold"
//                    >
//                      Kirala
//                    </Button>
//                  </div>
//                </div>
//              </Card>
//              ))
//            )}
//          </div>
//
//          <div className="text-center mt-12">
//            <Button
//              onClick={() => navigate('/register')}
//              variant="outline"
//              size="lg"
//              className="border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 font-semibold px-8"
//            >
//              Tüm Araçları Görüntüle
//              <ArrowRight className="ml-2 h-5 w-5" />
//            </Button>
//          </div>
//        </div>
//      </section>
//
//      {/* How It Works */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8">
//        <div className="max-w-7xl mx-auto">
//          <div className="text-center mb-16">
//            <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">Süreç</Badge>
//            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Nasıl Çalışır?</h2>
//            <p className="text-xl text-gray-400">3 basit adımda araç kiralama</p>
//          </div>
//
//          <div className="grid md:grid-cols-3 gap-8">
//            {[
//              {
//                step: '01',
//                title: 'Kayıt Olun',
//                description: 'Hızlı ve kolay kayıt formu ile üyeliğinizi oluşturun',
//                icon: CheckCircle
//              },
//              {
//                step: '02',
//                title: 'Araç Seçin',
//                description: 'Geniş filomuzdan size uygun aracı seçin',
//                icon: Car
//              },
//              {
//                step: '03',
//                title: 'Yola Çıkın',
//                description: 'Aracınızı teslim alın ve yolculuğun tadını çıkarın',
//                icon: Star
//              }
//            ].map((step, index) => (
//              <div key={index} className="relative">
//                {index < 2 && (
//                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-amber-500/50 to-transparent -z-10" />
//                )}
//                <Card className="bg-slate-900/50 border-slate-800 hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm group">
//                  <div className="p-8 space-y-4 text-center">
//                    <div className="text-6xl font-bold text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300">
//                      {step.step}
//                    </div>
//                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50 group-hover:scale-110 transition-transform duration-300">
//                      <step.icon className="h-8 w-8 text-slate-900" strokeWidth={2} />
//                    </div>
//                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">{step.title}</h3>
//                    <p className="text-gray-400">{step.description}</p>
//                  </div>
//                </Card>
//              </div>
//            ))}
//          </div>
//        </div>
//      </section>
//
//      {/* Testimonials */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
//        <div className="max-w-7xl mx-auto">
//          <div className="text-center mb-16">
//            <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">Yorumlar</Badge>
//            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Müşterilerimiz Ne Diyor?</h2>
//            <p className="text-xl text-gray-400">Binlerce memnun müşterimizden bazı yorumlar</p>
//          </div>
//
//          <div className="grid md:grid-cols-3 gap-8">
//            {mockTestimonials.length === 0 ? (
//              <div className="col-span-3 text-center text-gray-400 py-12">
//                <p className="text-lg">Henüz yorum bulunmamaktadır.</p>
//                <p className="text-sm mt-2">İlk yorumu siz yapın!</p>
//              </div>
//            ) : (
//              mockTestimonials.map((testimonial) => (
//              <Card
//                key={testimonial.id}
//                className="bg-slate-900 border-slate-800 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 group"
//              >
//                <div className="p-6 space-y-4">
//                  <div className="flex items-center space-x-1">
//                    {[...Array(testimonial.puan)].map((_, i) => (
//                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
//                    ))}
//                  </div>
//                  <p className="text-gray-300 leading-relaxed italic">"{testimonial.yorum}"</p>
//                  <div className="pt-4 border-t border-slate-800">
//                    <div className="font-semibold text-white group-hover:text-amber-400 transition-colors duration-300">{testimonial.ad}</div>
//                    <div className="text-sm text-gray-500">{new Date(testimonial.tarih).toLocaleDateString('tr-TR')}</div>
//                  </div>
//                </div>
//              </Card>
//              ))
//            )}
//          </div>
//        </div>
//      </section>
//
//      {/* CTA Section */}
//      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
//        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
//        <div className="max-w-4xl mx-auto text-center relative z-10">
//          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//            Hayalinizdeki Aracı
//            <br />
//            <span className="gradient-text">Hemen Kiralayın</span>
//          </h2>
//          <p className="text-xl text-gray-400 mb-8">
//            Ücretsiz üye olun ve özel kampanyalardan yararlanın
//          </p>
//          <Button
//            onClick={() => navigate('/register')}
//            size="lg"
//            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg px-12 py-6 shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105"
//          >
//            Şimdi Kayıt Ol
//            <ArrowRight className="ml-2 h-6 w-6" />
//          </Button>
//        </div>
//      </section>
//
//      <Footer />
//    </div>
//  );
//};
//
//export default HomePage;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Mock data kaldırıldı - Backend'den gelecek
const mockCars = []; // Geçici olarak boş, backend servisi eklendiğinde doldurulacak
const mockTestimonials = []; // Geçici olarak boş, backend servisi eklendiğinde doldurulacak

import {
  Car,
  Shield,
  Clock,
  CreditCard,
  Star,
  CheckCircle,
  ArrowRight,
  Fuel,
  Users,
  Settings,
  Sparkles
} from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        {/* Ambient Light Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol - İçerik */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900/60 border border-emerald-400/40 rounded-full backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                <span className="text-sm text-emerald-300 font-medium">
                  Akıllı Araç Kiralama Platformu
                </span>
              </div>

			  <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
			    {/* Üst satır: Kiralık Arabanızı */}
			    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-sky-300 to-emerald-500 drop-shadow-[0_0_22px_rgba(16,185,129,0.45)]">
			      Kiralık Arabanızı
			    </span>

			    {/* Alt satır: Hemen Bulun + iki yanda çizgi */}
			    <span className="mt-3 inline-flex items-center gap-3">
			      {/* Sol çizgi */}
			      <span className="hidden sm:inline-block h-[2px] w-10 rounded-full bg-emerald-400/80" />

			      {/* Metin */}
			      <span className="text-slate-50 drop-shadow-[0_0_14px_rgba(15,23,42,0.9)]">
			        Hemen Bulun
			      </span>

			      {/* Sağ çizgi */}
			      <span className="hidden sm:inline-block h-[2px] w-10 rounded-full bg-emerald-400/80" />
			    </span>
			  </h1>

              <p className="text-xl text-gray-400 leading-relaxed">
                Geniş premium araç filosu, şeffaf fiyatlandırma ve akıllı rezervasyon
                sistemiyle yolculuk deneyiminizi bir üst seviyeye taşıyın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate('/register')}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-lg px-8 py-6 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-400/60 transition-all duration-300 transform hover:scale-105"
                >
                  Hemen Başla
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => navigate('/login')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-400/60 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 font-semibold text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105"
                >
                  Giriş Yap
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Araç</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-white">10K+</div>
                  <div className="text-sm text-gray-400">Mutlu Müşteri</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-emerald-400">4.9</div>
                  <div className="text-sm text-gray-400">Ortalama Puan</div>
                </div>
              </div>
            </div>

            {/* Sağ - Hero Image (Mock Car Images) */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Main Car Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full max-w-lg transform hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-transparent rounded-3xl blur-3xl" />
                    <img
                      src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80"
                      alt="Lüks Araç"
                      className="relative rounded-3xl shadow-2xl border border-emerald-400/20"
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-10 right-10 glass-effect rounded-2xl p-4 shadow-xl float-animation">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-emerald-400 rounded-lg">
                      <Star className="h-5 w-5 text-slate-950" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">4.9</div>
                      <div className="text-xs text-gray-400">Müşteri Puanı</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-300 border-emerald-400/30">
              Özellikler
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-xl text-gray-400">
              Veri odaklı, hızlı ve güvenilir araç kiralama deneyimi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Güvenli Kiralama',
                description: 'Tam kapsamlı sigorta, akıllı sözleşmeler ve 7/24 yol yardımı',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                icon: Clock,
                title: 'Hızlı Teslimat',
                description: '30 dakika içinde hazır teslimat noktası veya adresinize teslim',
                gradient: 'from-sky-500 to-cyan-500'
              },
              {
                icon: CreditCard,
                title: 'Esnek Ödeme',
                description: 'Taksit, ertelenmiş ödeme ve dijital cüzdan desteği',
                gradient: 'from-indigo-500 to-violet-500'
              },
              {
                icon: Star,
                title: 'Seçili Modeller',
                description: '2023–2025 model, düşük kilometreli premium araçlar',
                gradient: 'from-fuchsia-500 to-rose-500'
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-900/60 border-slate-800 hover:border-emerald-400/70 transition-all duration-300 transform hover:translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-400/20 backdrop-blur-sm group"
              >
                <div className="p-6 space-y-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-7 w-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-300 border-emerald-400/30">
              Araçlar
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Premium Araç Filomuz
            </h2>
            <p className="text-xl text-gray-400">
              Şehir içi, uzun yol ve iş seyahatleri için seçilmiş modeller
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		  {mockCars.length === 0 ? (
		    <div className="col-span-3 text-center text-gray-400 py-12 space-y-4">
		      <p className="text-lg">
		        Kiralık aracını bulmak için hemen{' '}
		        <button
		          type="button"
		          onClick={() => navigate('/register')}
		          className="text-emerald-300 font-semibold underline underline-offset-4 hover:text-emerald-200 transition-colors"
		        >
		          kayıt ol
		        </button>
		      </p>

		      {/* İstersen altta ekstra buton da dursun */}
		      <Button
		        onClick={() => navigate('/register')}
		        className="mt-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-semibold px-6 py-3 shadow-lg shadow-emerald-500/30"
		      >
		        Hemen Kayıt Ol
		        <ArrowRight className="ml-2 h-4 w-4" />
		      </Button>
		    </div>
		  ) : (
              mockCars.map((car) => (
                <Card
                  key={car.id}
                  className="bg-slate-900 border-slate-800 hover:border-emerald-400/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/20 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={car.image}
                      alt={`${car.marka} ${car.model}`}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-emerald-400 text-slate-950 font-bold">
                        {car.yil}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                        {car.marka}
                      </h3>
                      <p className="text-gray-400">{car.model}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Fuel className="h-4 w-4" />
                        <span>{car.yakit}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Settings className="h-4 w-4" />
                        <span>{car.vites}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Users className="h-4 w-4" />
                        <span>{car.koltuk} Kişi</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <div>
                        <div className="text-3xl font-bold text-emerald-400">
                          ₺{car.gunlukFiyat}
                        </div>
                        <div className="text-xs text-gray-500">günlük</div>
                      </div>
                      <Button
                        onClick={() => navigate('/register')}
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-semibold"
                      >
                        Kirala
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/register')}
              variant="outline"
              size="lg"
              className="border-2 border-emerald-400/60 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 font-semibold px-8"
            >
              Tüm Araçları Görüntüle
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-300 border-emerald-400/30">
              Süreç
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-xl text-gray-400">3 basit adımda araç kiralama</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Kayıt Olun',
                description: 'Hızlı ve yalın kayıt formu ile dakikalar içinde üye olun.',
                icon: CheckCircle
              },
              {
                step: '02',
                title: 'Araç Seçin',
                description: 'Filtreler ile bütçenize ve ihtiyacınıza en uygun aracı seçin.',
                icon: Car
              },
              {
                step: '03',
                title: 'Yola Çıkın',
                description: 'Anahtar teslim aracınızla güvenle ve konforla yolculuğa başlayın.',
                icon: Star
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gradient-to-r from-emerald-400/60 to-transparent -z-10" />
                )}
                <Card className="bg-slate-900/60 border-slate-800 hover:border-emerald-400/70 transition-all duration-300 backdrop-blur-sm group">
                  <div className="p-8 space-y-4 text-center">
                    <div className="text-6xl font-bold text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors duration-300">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-400/50 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-slate-950" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/10 text-emerald-300 border-emerald-400/30">
              Yorumlar
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-xl text-gray-400">
              Deneyimini paylaşan binlerce kullanıcıdan seçilmiş yorumlar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockTestimonials.length === 0 ? (
              <div className="col-span-3 text-center text-gray-400 py-12">
                <p className="text-lg">Henüz yorum bulunmamaktadır.</p>
                <p className="text-sm mt-2">İlk yorumu siz bırakın.</p>
              </div>
            ) : (
              mockTestimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="bg-slate-900 border-slate-800 hover:border-emerald-400/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-400/20 group"
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.puan)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-emerald-400"
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.yorum}"
                    </p>
                    <div className="pt-4 border-t border-slate-800">
                      <div className="font-semibold text-white group-hover:text-emerald-300 transition-colors duration-300">
                        {testimonial.ad}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(testimonial.tarih).toLocaleDateString('tr-TR')}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Hayalinizdeki Aracı
            <br />
            <span className="gradient-text">Hemen Kiralayın</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Ücretsiz üye olun, kişiselleştirilmiş kampanyalar ve özel fiyatlardan
            ilk siz haberdar olun.
          </p>
          <Button
            onClick={() => navigate('/register')}
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-bold text-lg px-12 py-6 shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-400/60 transition-all duration-300 transform hover:scale-105"
          >
            Şimdi Kayıt Ol
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
