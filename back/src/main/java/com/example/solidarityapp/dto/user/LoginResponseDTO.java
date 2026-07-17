package com.example.solidarityapp.dto.user;

public record LoginResponseDTO (
        String token,
        UserResponseDTO user
) {}