package com.example.solidarityapp.controller;

import com.example.solidarityapp.domain.Tag;
import com.example.solidarityapp.dto.association.AssociationResponseDTO;
import com.example.solidarityapp.dto.association.CreateAssociationRequestDTO;
import com.example.solidarityapp.dto.association.UpdateAssociationRequestDTO;
import com.example.solidarityapp.service.AssociationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/associations")
public class AssociationController {
    private final AssociationService service;

    public AssociationController(AssociationService service) {
        this.service = service;
    }

    //region GTE request
    @GetMapping
    public ResponseEntity<List<AssociationResponseDTO>> getAll() {
        return ResponseEntity.ok(service.getAllAssociations());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<AssociationResponseDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getAssociationById(id));
    }

    @GetMapping(path = "/search")
    public ResponseEntity<List<AssociationResponseDTO>> search(
            @RequestParam(required = false) String city,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String tag
    ) {
        return ResponseEntity.ok(service.search(city, name, tag));
    }
    //endregion

    @PostMapping
    public ResponseEntity<AssociationResponseDTO> create(
            @Valid
            @RequestBody CreateAssociationRequestDTO request
    ) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(service.createAssociation(request));
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<AssociationResponseDTO> update(
            @PathVariable Long id,
            @RequestBody UpdateAssociationRequestDTO request
    ) {
        return ResponseEntity.ok(service.updateAssociation(id, request));
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<AssociationResponseDTO> delete(@PathVariable Long id) {
        service.deleteAssociation(id);
        return ResponseEntity.noContent().build();
    }
}
