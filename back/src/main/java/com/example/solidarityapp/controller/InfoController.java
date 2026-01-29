package com.example.solidarityapp.controller;

import com.example.solidarityapp.dto.info.CreateInfoRequestDTO;
import com.example.solidarityapp.dto.info.InfoResponseDTO;
import com.example.solidarityapp.dto.info.UpdateInfoRequestDTO;
import com.example.solidarityapp.service.InfoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/infos")
public class InfoController {
    private final InfoService service;

    public InfoController(InfoService service) {
        this.service = service;
    }

    //region GET request
    @GetMapping
    public ResponseEntity<List<InfoResponseDTO>> getAll() {
        return ResponseEntity.ok(service.getAllInfos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<InfoResponseDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getInfoById(id));
    }

    //endregion

    @PostMapping
    public ResponseEntity<InfoResponseDTO> create(
            @Valid
            @RequestBody CreateInfoRequestDTO request
    ) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(service.createInfo(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<InfoResponseDTO> update(
            @PathVariable Long id,
            @RequestBody UpdateInfoRequestDTO request
    ) {
        return ResponseEntity.ok(service.updateInfo(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.deleteInfo(id);
        return ResponseEntity.noContent().build();
    }
}
