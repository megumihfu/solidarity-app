package com.example.solidarityapp.service;

import com.example.solidarityapp.domain.Tag;
import com.example.solidarityapp.entity.Association;
import com.example.solidarityapp.repository.AssociationRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssociationService {

    private final AssociationRepository repository;

    public AssociationService(AssociationRepository repository) {
        this.repository = repository;
    }

    public Association getAssociationById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Association not found"));
    }

    public List<Association> getAllAssociations() {
        return repository.findAll();
    }

    public List<Association> search(String city, String name, Tag tag) {
        return repository.searchAssociations(city, name, tag);
    }

    @Transactional
    public Association createAssociation(Association asso) {
        return repository.save(asso);
    }

    @Transactional
    public Association updateAssociation(Long id, Association updatedAsso) {
        Association currentAsso = getAssociationById(id);

        currentAsso.setName(updatedAsso.getName());
        currentAsso.setCity(updatedAsso.getCity());
        currentAsso.setDescription(updatedAsso.getDescription());
        currentAsso.setLink(updatedAsso.getLink());
        currentAsso.setTag(updatedAsso.getTag());
        currentAsso.setContact(updatedAsso.getContact());

        return repository.save(currentAsso);
    }

    @Transactional
    public void deleteAssociation(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Association not found");
        }

        repository.deleteById(id);
    }
}
