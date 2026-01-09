package com.bitirme.arabakirala.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarResponse {

    private Long id;
    private String marka;
    private String model;
    private Integer yil;
    private BigDecimal gunlukFiyat;
    private String yakit;
    private String vites;
    private Integer koltuk;
    private String imageUrl;
    private List<String> ozellikler;
}
