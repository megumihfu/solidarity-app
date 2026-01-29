package com.example.solidarityapp.service;

import com.example.solidarityapp.dto.user.CreateUserRequestDTO;
import com.example.solidarityapp.dto.user.LoginRequestDTO;
import com.example.solidarityapp.dto.user.UserResponseDTO;
import com.example.solidarityapp.entity.User;
import com.example.solidarityapp.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    // @todo JWT auth

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponseDTO getUserByEmail(String email) {
        User user = repository.findUserByEmail(email).orElseThrow(() -> new RuntimeException("User not found for: " + email));
        return toResponseDTO(user);
    }


    @Transactional
    public UserResponseDTO register(CreateUserRequestDTO request) {
        if (repository.findUserByEmail(request.email()).isPresent()) {
            throw new RuntimeException("Email already in use");
        }

        User user = new User();
        user.setUserName(request.userName());
        user.setEmail(request.email());
        user.setPassword(passwordEncoder.encode(request.password()));

        User saved = repository.save(user);

        return toResponseDTO(saved);
    }

    public UserResponseDTO login(LoginRequestDTO request) {
        User user = repository.findUserByEmail(request.email()).orElseThrow(() -> new RuntimeException("Invalid credentials"));

        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        return toResponseDTO(user);
    }

    private UserResponseDTO toResponseDTO(User user) {
        return new UserResponseDTO(
                user.getId(),
                user.getUserName(),
                user.getEmail()
        );
    }
}
