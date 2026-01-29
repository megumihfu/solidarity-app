package com.example.solidarityapp.dto.user;

public record UserResponseDTO(
        Long id,
        String userName,
        String email
) {}