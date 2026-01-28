package com.example.solidarityapp.dto.association;

import com.example.solidarityapp.domain.Tag;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record CreateAssociationRequestDTO(
        @NotBlank(message = "Association's name is required")
        String name,

        String description,
        String link,

        @NotNull(message = "Association's tag is required")
        Tag tag,

        @NotBlank(message = "Association's city is required")
        String city,

        String contact
) {}