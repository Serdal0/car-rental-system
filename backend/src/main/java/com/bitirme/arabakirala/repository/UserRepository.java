package com.bitirme.arabakirala.repository;

import com.bitirme.arabakirala.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
    boolean existsByEmail(String email);
    
    boolean existsByEhliyetNo(String ehliyetNo);
    
    Optional<User> findByEmailAndAktifTrue(String email);
}

