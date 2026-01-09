package com.bitirme.arabakirala.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "cars")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marka;
    private String model;

    private Integer yil;

    @Column(name = "gunluk_fiyat", precision = 10, scale = 2)
    private BigDecimal gunlukFiyat;

    private String yakit;  
    private String vites; 
    private Integer koltuk;

    @Column(name = "image_url")
    private String imageUrl;

   
    @Column(columnDefinition = "text")
    private String ozellikler;

    private boolean aktif = true;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = this.createdAt;
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
