package com.example.solidarityapp.service;

import com.example.solidarityapp.dto.info.CreateInfoRequestDTO;
import com.example.solidarityapp.dto.info.InfoResponseDTO;
import com.example.solidarityapp.dto.info.UpdateInfoRequestDTO;
import com.example.solidarityapp.entity.Info;
import com.example.solidarityapp.repository.InfoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InfoService {

    private final InfoRepository repository;

    public InfoService(InfoRepository repository) {
        this.repository = repository;
    }

    public List<InfoResponseDTO> getAllInfos() {
        return repository.findAll()
                .stream()
                .map(this::toResponseDTO)
                .toList();
    }

    public InfoResponseDTO getInfoById(Long id) {
        Info info = repository.findById(id).orElseThrow(() -> new RuntimeException("Information not found"));

        return toResponseDTO(info);
    }

    @Transactional
    public InfoResponseDTO createInfo(CreateInfoRequestDTO request) {
        Info entity = toEntity(request);
        Info newInfo = repository.save(entity);
        return toResponseDTO(newInfo);
    }

    @Transactional
    public InfoResponseDTO updateInfo(Long id, UpdateInfoRequestDTO request) {
        Info currentInfo = repository.findById(id).orElseThrow(() -> new RuntimeException("Info not found"));

        if (request.title() != null) currentInfo.setTitle(request.title());
        if (request.content() != null) currentInfo.setContent(request.content());
        if (request.link() != null) currentInfo.setLink(request.link());

        Info saved = repository.save(currentInfo);

        return toResponseDTO(saved);
    }

    @Transactional
    public void deleteInfo(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Information not found");
        }

        repository.deleteById(id);
    }

    //region mapper
    private InfoResponseDTO toResponseDTO(Info entity) {
        return new InfoResponseDTO(
                entity.getId(),
                entity.getTitle(),
                entity.getContent(),
                entity.getLink()
        );
    }

    private Info toEntity(CreateInfoRequestDTO dto) {
        Info info = new Info();
        info.setTitle(dto.title());
        info.setContent(dto.content());
        info.setLink(dto.link());
        return info;
    }
    //endregion
}
