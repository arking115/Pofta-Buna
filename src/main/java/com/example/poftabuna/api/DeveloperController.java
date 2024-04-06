package com.example.poftabuna.api;

import com.example.poftabuna.model.DeveloperModel;
import com.example.poftabuna.service.DeveloperService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DeveloperController {
    private DeveloperService developerService;


    public DeveloperController(DeveloperService developerService) {
        this.developerService = developerService;
    }

    @GetMapping
    public List<DeveloperModel> getDevelopers() {
        return developerService.getDevs();
    }

    @PostMapping
    public void registerNewDev(@RequestBody DeveloperModel model) {
        developerService.addNewDev(model);
    }
}
