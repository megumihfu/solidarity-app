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

    @Query(value = "SELECT * FROM associations " +
            "WHERE (:name IS NULL OR :name = '' OR LOWER(name) LIKE LOWER(CONCAT('%', :name, '%'))) " +
            "AND (:city IS NULL OR :city = '' OR LOWER(city) LIKE LOWER(CONCAT('%', :city, '%'))) " +
            "AND (:tag IS NULL OR :tag = '' OR tag = :tag)",
            nativeQuery = true)

    List<Association> searchAssociations(@Param("city") String city,
                                         @Param("name") String name,
                                         @Param("tag") String tag);

}
