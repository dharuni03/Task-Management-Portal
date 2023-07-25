package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iamneo.security.entity.User;

@Repository
public interface Repos extends JpaRepository<User, Integer> {

}
