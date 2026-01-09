package com.bitirme.arabakirala.service.Impl;

import java.util.ArrayList;
import java.util.List;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bitirme.arabakirala.dto.LoginRequest;
import com.bitirme.arabakirala.dto.LoginResponse;
import com.bitirme.arabakirala.dto.RegisterRequest;
import com.bitirme.arabakirala.dto.UserInfo;
import com.bitirme.arabakirala.entity.User;
import com.bitirme.arabakirala.entity.User.Role;
import com.bitirme.arabakirala.repository.UserRepository;
import com.bitirme.arabakirala.service.IUserService;
import com.bitirme.arabakirala.util.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService{
	
	
    private final UserRepository userRepository ;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

	
	@Override
	public LoginResponse login(LoginRequest request) {
			
		
        User user = userRepository.findByEmailAndAktifTrue(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Email veya şifre hatalı!"));
       
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Email veya şifre hatalı!");
        }
        
       
        String token = jwtUtil.generateToken(user.getEmail(), user.getId());
        
        
        UserInfo userInfo = new UserInfo(
                user.getId(),
                user.getAdSoyad(),
                user.getEmail(),
                user.getTelefon(),
                user.getEhliyetNo(),
                user.getRole().name()
        );
        
        return new LoginResponse(
                true,
                "Giriş başarılı!",
                token,
                userInfo
        );
    }

	@Override
	public List<UserInfo> getAllKullanici() {
		
		
		List<User> dbUser= userRepository.findAll();
		
		List<UserInfo> userInfo=new ArrayList<>();
		
		for (User user : dbUser) {
			UserInfo yedek = new UserInfo();
			yedek.setAdSoyad(user.getAdSoyad());
			yedek.setEhliyetNo(user.getEhliyetNo());
			yedek.setEmail(user.getEmail());
			yedek.setId(user.getId());
			yedek.setRole(user.getRole().name());
			yedek.setTelefon(user.getTelefon());
			
			userInfo.add(yedek);
		}
		
		
		
		return userInfo;
	}

	
	
	
	@Override
	public LoginResponse UserRegister(RegisterRequest request) {
		
        if (userRepository.findByEmailAndAktifTrue(request.getEmail()).isPresent()) {
            throw new RuntimeException("Bu email ile kayıtlı bir kullanıcı zaten var!");
        }
		
        User user = new User();
        
        user.setAdSoyad(request.getAdSoyad());
        user.setEmail(request.getEmail());
        user.setEhliyetNo(request.getEhliyetNo());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setTelefon(request.getTelefon());
        user.setEhliyetTarihi(request.getEhliyetTarihi());
        user.setAktif(true);
        
        
        // Role
        if (request.getRole() != null) {
            user.setRole(Role.valueOf(request.getRole())); // enum ise
        } else {
            user.setRole(Role.USER); // default USER
        }
        
        
        
        
        User dbUser= userRepository.save(user);
        String token = jwtUtil.generateToken(dbUser.getEmail(), dbUser.getId());
        
        UserInfo userInfo=new UserInfo();
        
        userInfo.setAdSoyad(dbUser.getAdSoyad());
        userInfo.setEhliyetNo(dbUser.getEhliyetNo());
        userInfo.setEmail(dbUser.getEmail());
        userInfo.setId(dbUser.getId());
        userInfo.setRole(dbUser.getRole().name());
        userInfo.setTelefon(dbUser.getTelefon());
        
        
        
        
        
        
		return new LoginResponse(
				true,
				"Kayıt Başarılı",
				token,
				userInfo);
	}
}
	
	

