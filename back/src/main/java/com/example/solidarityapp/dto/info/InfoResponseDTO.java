package com.example.solidarityapp.dto.info;

public record InfoResponseDTO(
    Long id,
    String title,
    String content,
    String link
) {}