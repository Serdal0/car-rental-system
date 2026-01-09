package com.bitirme.arabakirala.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.bitirme.arabakirala.dto.CarResponse;

public interface ICarController {
	public ResponseEntity<List<CarResponse>> getAllAktifCars();
}
