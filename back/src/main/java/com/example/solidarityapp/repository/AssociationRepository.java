package com.example.solidarityapp.repository;

import com.example.solidarityapp.domain.Tag;
import com.example.solidarityapp.entity.Association;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssociationRepository extends JpaRepository<Association, Long> {

    @Query("SELECT asso FROM Association asso " +
            "WHERE (:city IS NULL OR LOWER(asso.city) LIKE LOWER(CONCAT('%', :city, '%'))) " +
            "AND (:name IS NULL OR LOWER(asso.name) LIKE LOWER(CONCAT('%', :name, '%'))) " +
            "AND (:tag IS NULL OR asso.tag = :tag)")

    List<Association> searchAssociations(@Param("city") String city,
                                         @Param("name") String name,
                                         @Param("tas") Tag tag);

}
