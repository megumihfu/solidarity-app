package com.example.solidarityapp.dto.info;

public record UpdateInfoRequestDTO(
        String title,
        String content,
        String link
) {}