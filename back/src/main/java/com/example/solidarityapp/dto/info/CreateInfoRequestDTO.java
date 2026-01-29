package com.example.solidarityapp.dto.info;

import jakarta.validation.constraints.NotBlank;

public record CreateInfoRequestDTO(
        @NotBlank(message = "Title is required")
        String title,

        @NotBlank(message = "Content is required")
        String content,

        String link
) {}