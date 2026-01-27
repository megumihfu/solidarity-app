package com.example.solidarityapp.service;

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

    public List<Info> getAllInfos() {
        return repository.findAll();
    }

    public Info getInfoById(Long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Information not found"));
    }

    @Transactional
    public Info createInfo(Info info) {
        return repository.save(info);
    }

    @Transactional
    public Info updateInfo(Long id, Info updatedInfo) {
        Info currentInfo = getInfoById(id);

        currentInfo.setTitle(updatedInfo.getTitle());
        currentInfo.setContent(updatedInfo.getContent());
        currentInfo.setLink(updatedInfo.getLink());

        return repository.save(currentInfo);
    }

    @Transactional
    public void deleteInfo(Long id) {
        if (!repository.existsById(id)) {
            throw new RuntimeException("Information not found");
        }

        repository.deleteById(id);
    }
}
