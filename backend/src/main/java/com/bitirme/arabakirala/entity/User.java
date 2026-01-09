package com.bitirme.arabakirala.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "ad_soyad", nullable = false, length = 100)
    private String adSoyad;
    
    @Column(name = "email", nullable = false, unique = true, length = 100)
    private String email;
    
    @Column(name = "telefon", nullable = false, length = 20)
    private String telefon;
    
    @Column(name = "password", nullable = false)
    private String password;
    
    @Column(name = "ehliyet_no", nullable = false, unique = true, length = 20)
    private String ehliyetNo;
    
    @Column(name = "ehliyet_tarihi", nullable = false)
    private LocalDate ehliyetTarihi;
    
    @Column(name = "role", length = 20)
    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;
    
    @Column(name = "aktif")
    private Boolean aktif = true;
    
    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    public enum Role {
        USER, ADMIN
    }
}

