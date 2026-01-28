package com.example.solidarityapp.service;

import com.example.solidarityapp.domain.Tag;
import com.example.solidarityapp.dto.association.AssociationResponseDTO;
import com.example.solidarityapp.dto.association.CreateAssociationRequestDTO;
import com.example.solidarityapp.dto.association.UpdateAssociationRequestDTO;
import com.example.solidarityapp.entity.Association;
import com.example.solidarityapp.repository.AssociationRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssociationService {

    private final AssociationRepository repository;

    public AssociationService(AssociationRepository repository) {
        this.repository = repository;
    }

    public AssociationResponseDTO getAssociationById(Long id) {
        Association asso = repository.findById(id).orElseThrow(() -> new RuntimeException("Association not found"));

        return toResponseDTO(asso);
    }

    public List<AssociationResponseDTO> getAllAssociations() {
        return repository.findAll()
                .stream()
                .map(this::toResponseDTO)
                .toList();
    }

    public List<AssociationResponseDTO> search(String city, String name, Tag tag) {
        return repository.searchAssociations(city, name, tag)
                .stream()
                .map(this::toResponseDTO)
                .toList();
    }

    @Transactional
    public AssociationResponseDTO createAssociation(CreateAssociationRequestDTO request) {
        Association entity = toEntity(request);
        Association saved = repository.save(entity);

        return toResponseDTO(saved);
    }

    @Transactional
    public AssociationResponseDTO updateAssociation(Long id, UpdateAssociationRequestDTO request) {
        Association currentAsso = repository.findById(id).orElseThrow(() -> new RuntimeException("Association not found"));

        if (request.name() != null) currentAsso.setName(request.name());
        if (request.description() != null) currentAsso.setDescription(request.description());
        if (request.link() != null) currentAsso.setLink(request.link());
        if (request.tag() != null) currentAsso.setTag(request.tag());
        if (request.city() != null) currentAsso.setCity(request.city());
        if (request.contact() != null) currentAsso.setContact(request.contact());

        Association updated = repository.save(currentAsso);

        return toResponseDTO(updated);
    }

    @Transactional
    public void deleteAssociation(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Association not found");
        }

        repository.deleteById(id);
    }


    //region mapper
    private AssociationResponseDTO toResponseDTO(Association entity) {
        return new AssociationResponseDTO(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getLink(),
                entity.getTag(),
                entity.getCity(),
                entity.getContact()
        );
    }

    private Association toEntity(CreateAssociationRequestDTO dto) {
        Association entity = new Association();
        entity.setName(dto.name());
        entity.setDescription(dto.description());
        entity.setLink(dto.link());
        entity.setTag(dto.tag());
        entity.setCity(dto.city());
        entity.setContact(dto.contact());
        return entity;
    }

    //endregion
}
