package com.example.solidarityapp.service;

import com.example.solidarityapp.entity.User;
import com.example.solidarityapp.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    // @todo JWT auth

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User getUserByEmail(String email) {
        return repository.findUserByEmail(email).orElseThrow(() -> new RuntimeException("User not found for: " + email));
    }


    @Transactional
    public User register(User user) {
        if (repository.findUserByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("Email already in use");
        }

        return repository.save(user);
    }
}
