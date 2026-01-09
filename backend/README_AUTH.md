# Kullanıcı Giriş Servisi - Kurulum ve Kullanım

## 1. PostgreSQL Veritabanı Kurulumu

### Veritabanı Oluşturma
```sql
CREATE DATABASE arabakirala;
```

### Tablo Oluşturma
`backend/database/schema.sql` dosyasındaki SQL komutlarını çalıştırın:

```bash
psql -U postgres -d arabakirala -f backend/database/schema.sql
```

Veya PostgreSQL'e bağlanıp manuel olarak çalıştırabilirsiniz.

### Test Kullanıcısı Ekleme
`backend/database/insert-test-user.sql` dosyasındaki SQL komutunu çalıştırın:

```bash
psql -U postgres -d arabakirala -f backend/database/insert-test-user.sql
```

**Test Kullanıcı Bilgileri:**
- Email: `ahmet@example.com`
- Şifre: `123456`

## 2. Application Properties Ayarları

`backend/src/main/resources/application.properties` dosyasında veritabanı bilgilerinizi güncelleyin:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/arabakirala
spring.datasource.username=postgres
spring.datasource.password=postgres
```

## 3. Projeyi Çalıştırma

```bash
cd backend
mvn spring-boot:run
```

Veya IDE'den `ArabakiralaApplication.java` dosyasını çalıştırın.

## 4. API Kullanımı

### Giriş Yapma (Login)

**Endpoint:** `POST http://localhost:8080/api/auth/login`

**Request Body:**
```json
{
  "email": "ahmet@example.com",
  "password": "123456"
}
```

**Başarılı Response:**
```json
{
  "success": true,
  "message": "Giriş başarılı!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "adSoyad": "Ahmet Yılmaz",
    "email": "ahmet@example.com",
    "telefon": "0532 123 4567",
    "ehliyetNo": "K12345678",
    "role": "USER"
  }
}
```

**Hatalı Response:**
```json
{
  "success": false,
  "message": "Email veya şifre hatalı!",
  "token": null,
  "user": null
}
```

## 5. Oluşturulan Dosyalar

### Entity
- `User.java` - Kullanıcı entity sınıfı

### Repository
- `UserRepository.java` - Kullanıcı veritabanı işlemleri

### DTO
- `LoginRequest.java` - Giriş isteği DTO
- `LoginResponse.java` - Giriş yanıtı DTO

### Service
- `AuthService.java` - Kimlik doğrulama servisi

### Controller
- `AuthController.java` - REST API endpoint'leri

### Config
- `SecurityConfig.java` - Spring Security yapılandırması

### Util
- `JwtUtil.java` - JWT token işlemleri

## 6. Sonraki Adımlar

1. Kullanıcı kayıt (Register) servisi eklenebilir
2. JWT token doğrulama için filter eklenecek
3. Şifre sıfırlama servisi eklenecek
4. Kullanıcı profil güncelleme servisi eklenecek

