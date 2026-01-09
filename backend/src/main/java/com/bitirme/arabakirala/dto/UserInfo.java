package com.bitirme.arabakirala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {
    private Long id;
    private String adSoyad;
    private String email;
    private String telefon;
    private String ehliyetNo;
    private String role;
}