package com.example.solidarityapp.entity;

import com.example.solidarityapp.domain.Tag;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "associations")
public class Association {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String link;

    @Enumerated(EnumType.STRING)
    private List<Tag> tags;

    @Column(nullable = false)
    @NotNull
    private String city;

    @Column
    private String contact;


}
