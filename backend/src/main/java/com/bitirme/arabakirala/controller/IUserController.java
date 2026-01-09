package com.bitirme.arabakirala.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.bitirme.arabakirala.dto.LoginRequest;
import com.bitirme.arabakirala.dto.LoginResponse;
import com.bitirme.arabakirala.dto.RegisterRequest;
import com.bitirme.arabakirala.dto.UserInfo;

import jakarta.validation.Valid;

public interface IUserController {
	
	public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request);
	
	public List<UserInfo> getAllKullanici();
	
	public LoginResponse UserRegister(RegisterRequest request);
}
