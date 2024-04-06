package com.example.poftabuna.model;

import jakarta.persistence.*;

@Entity
@Table(name = "apps")
public class AppModel {
    @Id
    @SequenceGenerator(name = "app_sequence",
            sequenceName = "app_sequence",
            allocationSize = 1)
    @GeneratedValue( strategy = GenerationType.SEQUENCE,
            generator = "app_sequence")
    private Long id;

    //TODO: finish
}
