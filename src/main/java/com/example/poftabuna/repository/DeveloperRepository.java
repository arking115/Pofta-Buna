package com.example.poftabuna.repository;

import com.example.poftabuna.model.DeveloperModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DeveloperRepository extends JpaRepository<DeveloperModel, Long> {

    Optional<DeveloperModel> findDeveloperModelByEmail(String email);
}
