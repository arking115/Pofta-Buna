package com.example.poftabuna.service;

import com.example.poftabuna.model.DeveloperModel;
import com.example.poftabuna.repository.DeveloperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeveloperService {
    private final DeveloperRepository developerRepository;

    @Autowired
    public DeveloperService(DeveloperRepository developerRepository) {
        this.developerRepository = developerRepository;
    }
    public List<DeveloperModel> getDevs() {
        return developerRepository.findAll();
    }

    public void addNewDev(DeveloperModel model) {
        Optional<DeveloperModel> optionalDeveloperModel = developerRepository.findDeveloperModelByEmail(model.getEmail());
        if (optionalDeveloperModel.isPresent()) {
            throw new IllegalArgumentException("email exists");
        }
        developerRepository.save(model);
    }
}
