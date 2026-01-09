package com.bitirme.arabakirala.service.Impl;

import com.bitirme.arabakirala.dto.CarResponse;
import com.bitirme.arabakirala.entity.Car;
import com.bitirme.arabakirala.repository.CarRepository;
import com.bitirme.arabakirala.service.ICarService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class CarServiceImpl implements ICarService {

    private final CarRepository carRepository;

    public CarServiceImpl(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @Override
    public List<CarResponse> getAllAktifCars() {
        List<Car> cars = carRepository.findByAktifTrue();

        return cars.stream()
                .map(this::convertToDto)
                .toList();
    }

    private CarResponse convertToDto(Car car) {
        List<String> ozelliklerList;
        if (car.getOzellikler() != null && !car.getOzellikler().isBlank()) {
            ozelliklerList = Arrays.stream(car.getOzellikler().split(","))
                    .map(String::trim)
                    .filter(s -> !s.isBlank())
                    .toList();
        } else {
            ozelliklerList = Collections.emptyList();
        }

        return new CarResponse(
                car.getId(),
                car.getMarka(),
                car.getModel(),
                car.getYil(),
                car.getGunlukFiyat(),
                car.getYakit(),
                car.getVites(),
                car.getKoltuk(),
                car.getImageUrl(),
                ozelliklerList
        );
    }
}
