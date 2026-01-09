package com.bitirme.arabakirala.dto;


import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterRequest {

    @NotBlank
    private String adSoyad;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String telefon;

    @NotBlank
    private String password;

    @NotBlank
    private String ehliyetNo;

    private LocalDate ehliyetTarihi; 

    
    private String role;
}
