package com.bitirme.arabakirala.controller.Impl;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bitirme.arabakirala.controller.IUserController;
import com.bitirme.arabakirala.dto.LoginRequest;
import com.bitirme.arabakirala.dto.LoginResponse;
import com.bitirme.arabakirala.dto.RegisterRequest;
import com.bitirme.arabakirala.dto.UserInfo;
import com.bitirme.arabakirala.service.IUserService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserControllerImpl implements IUserController {
    
	
    private final IUserService userService;
    
	
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        try {
            LoginResponse response = userService.login(request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            LoginResponse errorResponse = new LoginResponse(
                    false,
                    e.getMessage(),
                    null,
                    null
            );
            return ResponseEntity.badRequest().body(errorResponse);
        }
    }
    
    
    
    @GetMapping("/list")
	@Override
	public List<UserInfo> getAllKullanici() {
		return userService.getAllKullanici();
	}


    
    


    @PostMapping("/register")
	@Override
	public LoginResponse UserRegister(@Valid @RequestBody RegisterRequest request) {
		
		return userService.UserRegister(request);
	}
    
    




    
    
}
