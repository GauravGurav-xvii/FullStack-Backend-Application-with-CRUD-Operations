package com.backendprct.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backendprct.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
