package com.bitirme.arabakirala.service;

import java.util.List;

import com.bitirme.arabakirala.dto.LoginRequest;
import com.bitirme.arabakirala.dto.LoginResponse;
import com.bitirme.arabakirala.dto.RegisterRequest;
import com.bitirme.arabakirala.dto.UserInfo;

public interface IUserService {
	
	public LoginResponse login(LoginRequest request);
	
	public List<UserInfo> getAllKullanici();
	
	LoginResponse UserRegister(RegisterRequest request);
}
