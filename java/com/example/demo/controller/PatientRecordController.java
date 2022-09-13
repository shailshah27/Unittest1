package com.example.demo.controller;

import com.example.demo.errors.InvalidRequestException;
import com.example.demo.model.PatientRecord;
import com.example.demo.repository.PatientRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PatientRecordController {

    @Autowired
    private PatientRecordRepository patientRecordRepository;

    @GetMapping("/patient")
    List<PatientRecord> getAllPatientsRecord() {
        return patientRecordRepository.findAll();
    }

    @GetMapping("/patient/{id}")
    PatientRecord getPatientRecord(@PathVariable Long id) {
        return patientRecordRepository.findById(id)
                .orElseThrow(()->new InvalidRequestException(id));
    }

    @PostMapping("/patient")
    PatientRecord newPatientRecord(@RequestBody PatientRecord newPatientRecord) {
        return patientRecordRepository.save(newPatientRecord);
    }

    @PutMapping("/patient/{id}")
    PatientRecord updatePatientRecord(@RequestBody PatientRecord newPatientRecord, @PathVariable Long id) {
        return patientRecordRepository.findById(id)
                .map(patientRecord -> {
                    patientRecord.setName(newPatientRecord.getName());
                    patientRecord.setAge(newPatientRecord.getAge());
                    patientRecord.setAddress(newPatientRecord.getAddress());
                    return patientRecordRepository.save(patientRecord);
                }).orElseThrow(()->new InvalidRequestException(id));
    }

    @DeleteMapping("/patient/{id}")
    String deletePatientRecord(@PathVariable Long id) {
        if(!patientRecordRepository.existsById(id)) {
            throw new InvalidRequestException(id);
        }
        patientRecordRepository.deleteById(id);
        return "Patient with id "+id+" has been deleted successfully";
    }
}
