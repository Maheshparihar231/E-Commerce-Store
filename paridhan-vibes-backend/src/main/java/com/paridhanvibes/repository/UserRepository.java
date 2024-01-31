package com.paridhanvibes.repository;

import com.paridhanvibes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User,Long> {
    public User findByEmail(String email);

    public List<User> findAllByOrderByCreatedAtDesc();

}
