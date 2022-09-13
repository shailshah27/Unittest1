package com.example.demo.model;

import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Builder
public class PatientRecord {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Integer age;
    private String address;

    public PatientRecord(long l, String rayven_yor, int i, String cebu_philippines) {

    }

    public PatientRecord() {

    }

    public static <E extends Enum<E>> Enum<E> builder() {
        return null;
    }

    public Long getPatientId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}
