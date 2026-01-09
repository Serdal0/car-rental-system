import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import { authAPI } from '../services/api';
import { Car, Mail, ArrowLeft, CheckCircle } from 'lucide-react';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setError('Email adresi gerekli');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Geçerli bir email adresi girin');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail()) return;
    
    setLoading(true);
    
    try {
      const result = await authAPI.resetPassword(email);
      
      if (result.success) {
        setSuccess(true);
        toast({
          title: 'Başarılı!',
          description: result.message,
          variant: 'default'
        });
      } else {
        toast({
          title: 'Hata!',
          description: result.message,
          variant: 'destructive'
        });
      }
    } catch (error) {
      const errorMessage = error.response?.message || error.message || 'Şifre sıfırlama isteği gönderilirken bir hata oluştu';
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
    setEmail(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Back Button */}
      <Button
        onClick={() => navigate('/login')}
        variant="ghost"
        className="absolute top-6 left-6 text-gray-400 hover:text-amber-400 z-50"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Giriş Sayfası
      </Button>

      <Card className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border-slate-800 shadow-2xl relative z-10">
        <div className="p-8 space-y-6">
          {/* Logo */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg shadow-amber-500/50">
                <Car className="h-8 w-8 text-slate-900" strokeWidth={2.5} />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white">Şifremi Unuttum</h1>
            <p className="text-gray-400">
              {success
                ? 'Email adresinizi kontrol edin'
                : 'Email adresinizi girin, şifre sıfırlama bağlantısı gönderelim'}
            </p>
          </div>

          {success ? (
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="p-4 bg-green-500/10 rounded-full border-2 border-green-500/30">
                  <CheckCircle className="h-16 w-16 text-green-400" />
                </div>
              </div>
              <div className="text-center space-y-3">
                <p className="text-gray-300">
                  Şifre sıfırlama bağlantısı <span className="text-amber-400 font-semibold">{email}</span> adresine gönderildi.
                </p>
                <p className="text-gray-400 text-sm">
                  Email gelmedi mi? Spam klasörünüzü kontrol edin.
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/login')}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-6"
                >
                  Giriş Sayfasına Dön
                </Button>
                <Button
                  onClick={() => setSuccess(false)}
                  variant="ghost"
                  className="w-full text-gray-400 hover:text-amber-400"
                >
                  Tekrar Dene
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email Adresi</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={handleChange}
                    className={`pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500 ${
                      error ? 'border-red-500' : ''
                    }`}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold text-lg py-6 shadow-lg shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loading ? 'Gönderiliyor...' : 'Sıfırlama Bağlantısı Gönder'}
              </Button>

              {/* Back to Login */}
              <div className="text-center">
                <Link to="/login" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                  Giriş sayfasına geri dön
                </Link>
              </div>
            </form>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
