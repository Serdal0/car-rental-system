package com.bitirme.arabakirala.controller.Impl;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bitirme.arabakirala.controller.ICarController;
import com.bitirme.arabakirala.dto.CarResponse;
import com.bitirme.arabakirala.service.ICarService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CarControllerImpl implements ICarController{
	private final ICarService carService;

    @GetMapping("/list")
    public ResponseEntity<List<CarResponse>> getAllAktifCars() {
        List<CarResponse> cars = carService.getAllAktifCars();
        return ResponseEntity.ok(cars);
    }

}
