package com.paridhanvibes.service;

import com.paridhanvibes.exception.UserException;
import com.paridhanvibes.model.User;
import com.paridhanvibes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface UserService {
    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;

    public List<User> findAllUsers();

}
