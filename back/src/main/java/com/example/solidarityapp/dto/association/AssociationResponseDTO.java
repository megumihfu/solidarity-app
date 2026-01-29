package com.example.solidarityapp.dto.association;

import com.example.solidarityapp.domain.Tag;

public record AssociationResponseDTO(
        Long id,
        String name,
        String description,
        String link,
        Tag tag,
        String city,
        String contact
) {}