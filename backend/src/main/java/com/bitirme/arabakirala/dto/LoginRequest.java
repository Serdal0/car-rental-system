package com.bitirme.arabakirala.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    
    @NotBlank(message = "Email adresi gerekli")
    @Email(message = "Geçerli bir email adresi girin")
    private String email;
    
    @NotBlank(message = "Şifre gerekli")
    private String password;
}

