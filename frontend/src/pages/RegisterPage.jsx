import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import { authAPI } from '../services/api';
import { Car, User, Mail, Lock, Phone, CreditCard, Calendar, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    adSoyad: '',
    email: '',
    telefon: '',
    password: '',
    confirmPassword: '',
    ehliyetNo: '',
    ehliyetTarihi: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.adSoyad) {
      newErrors.adSoyad = 'Ad Soyad gerekli';
    } else if (formData.adSoyad.length < 3) {
      newErrors.adSoyad = 'Ad Soyad en az 3 karakter olmalı';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email adresi gerekli';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir email adresi girin';
    }
    
    if (!formData.telefon) {
      newErrors.telefon = 'Telefon numarası gerekli';
    } else if (!/^[0-9\s]{10,}$/.test(formData.telefon.replace(/\s/g, ''))) {
      newErrors.telefon = 'Geçerli bir telefon numarası girin';
    }
    
    if (!formData.password) {
      newErrors.password = 'Şifre gerekli';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Şifre en az 6 karakter olmalı';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifre tekrarı gerekli';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Şifreler eşleşmiyor';
    }
    
    if (!formData.ehliyetNo) {
      newErrors.ehliyetNo = 'Ehliyet numarası gerekli';
    }
    
    if (!formData.ehliyetTarihi) {
      newErrors.ehliyetTarihi = 'Ehliyet tarihi gerekli';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    try {
      const { confirmPassword, ...userData } = formData;
      const result = await authAPI.register(userData);
      
      if (result.success) {
        toast({
          title: 'Başarılı!',
          description: result.message,
          variant: 'default'
        });
        setTimeout(() => navigate('/login'), 1500);
      } else {
        toast({
          title: 'Hata!',
          description: result.message,
          variant: 'destructive'
        });
      }
    } catch (error) {
      const errorMessage = error.response?.message || error.message || 'Kayıt yapılırken bir hata oluştu';
      toast({
        title: 'Hata!',
        description: errorMessage,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Back Button */}
      <Button
        onClick={() => navigate('/')}
        variant="ghost"
        className="absolute top-6 left-6 text-gray-400 hover:text-amber-400 z-50"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Ana Sayfa
      </Button>

      <Card className="w-full max-w-2xl bg-slate-900/80 backdrop-blur-xl border-slate-800 shadow-2xl relative z-10">
        <div className="p-8 space-y-6">
          {/* Logo */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg shadow-amber-500/50">
                <Car className="h-8 w-8 text-slate-900" strokeWidth={2.5} />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white">Kayıt Olun</h1>
            <p className="text-gray-400">Hemen üyelik oluşturun ve araç kiralayın</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Ad Soyad */}
            <div className="space-y-2">
              <Label htmlFor="adSoyad" className="text-gray-300">Ad Soyad</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  id="adSoyad"
                  name="adSoyad"
                  type="text"
                  placeholder="Ahmet Yılmaz"
                  value={formData.adSoyad}
                  onChange={handleChange}
                  className={`pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                    errors.adSoyad ? 'border-red-500' : ''
                  }`}
                />
              </div>
              {errors.adSoyad && <p className="text-sm text-red-500">{errors.adSoyad}</p>}
            </div>

            {/* Email & Telefon */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email Adresi</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefon" className="text-gray-300">Telefon</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    placeholder="0532 123 4567"
                    value={formData.telefon}
                    onChange={handleChange}
                    className={`pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                      errors.telefon ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {errors.telefon && <p className="text-sm text-red-500">{errors.telefon}</p>}
              </div>
            </div>

            {/* Password & Confirm Password */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-300">Şifre</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className={`pl-10 pr-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-300">Şifre Tekrar</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`pl-10 pr-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                      errors.confirmPassword ? 'border-red-500' : ''
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-400 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>
            </div>

            {/* Ehliyet Bilgileri */}
            <div className="pt-4 border-t border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-4">Ehliyet Bilgileri</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ehliyetNo" className="text-gray-300">Ehliyet Numarası</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <Input
                      id="ehliyetNo"
                      name="ehliyetNo"
                      type="text"
                      placeholder="K12345678"
                      value={formData.ehliyetNo}
                      onChange={handleChange}
                      className={`pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                        errors.ehliyetNo ? 'border-red-500' : ''
                      }`}
                    />
                  </div>
                  {errors.ehliyetNo && <p className="text-sm text-red-500">{errors.ehliyetNo}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ehliyetTarihi" className="text-gray-300">Ehliyet Alış Tarihi</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <Input
                      id="ehliyetTarihi"
                      name="ehliyetTarihi"
                      type="date"
                      value={formData.ehliyetTarihi}
                      onChange={handleChange}
                      className={`pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                        errors.ehliyetTarihi ? 'border-red-500' : ''
                      }`}
                    />
                  </div>
                  {errors.ehliyetTarihi && <p className="text-sm text-red-500">{errors.ehliyetTarihi}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg py-6 shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol'}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-900 text-gray-500">veya</span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Zaten hesabınız var mı?{' '}
              <Link to="/login" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                Giriş Yapın
              </Link>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;

