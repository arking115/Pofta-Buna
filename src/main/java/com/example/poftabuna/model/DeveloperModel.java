package com.example.poftabuna.model;

import jakarta.persistence.*;

@Entity
@Table(name = "devs")
public class DeveloperModel {
    @Id
    @SequenceGenerator(name = "dev_sequence",
            sequenceName = "dev_sequence",
            allocationSize = 1)
    @GeneratedValue ( strategy = GenerationType.SEQUENCE,
            generator = "dev_sequence")
    private Long id;
    @Column(nullable = false, unique = true, length = 45)
    private String email;
    @Column(nullable = false, length = 45)
    private String password;

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
