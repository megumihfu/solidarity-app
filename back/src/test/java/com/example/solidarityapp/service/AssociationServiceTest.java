package com.example.solidarityapp.service;

import com.example.solidarityapp.domain.Tag;
import com.example.solidarityapp.dto.association.AssociationResponseDTO;
import com.example.solidarityapp.dto.association.CreateAssociationRequestDTO;
import com.example.solidarityapp.entity.Association;
import com.example.solidarityapp.repository.AssociationRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AssociationServiceTest {

    @Mock
    private AssociationRepository repository;

    @InjectMocks
    private AssociationService service;

    @Test
    void testSearchAssociations() {
        Association asso = new Association();
        asso.setId(1L);
        asso.setName("Restos du Coeur");
        asso.setCity("Paris");
        asso.setTag(Tag.FOOD);

        when(repository.searchAssociations("Paris", "Restos", "FOOD"))
                .thenReturn(List.of(asso));

        List<AssociationResponseDTO> result = service.search("Paris", "Restos", "FOOD");

        assertEquals(1, result.size());
        assertEquals("Restos du Coeur", result.get(0).name());
        verify(repository, times(1)).searchAssociations("Paris", "Restos", "FOOD");
    }

    @Test
    void testCreateAssociation() {
        var request = new CreateAssociationRequestDTO(
            "Emmaus",
            "Solidarity Association",
            "",
            Tag.SHELTER,
            "Toulon",
            "+3336663333"
        );

        Association saved = new Association();
        saved.setId(10L);
        saved.setName("Emmaus");
        saved.setCity("Toulon");
        saved.setTag(Tag.SHELTER);
        saved.setContact("+3336663333");

        when(repository.save(any(Association.class))).thenReturn(saved);

        var response = service.createAssociation(request);

        assertEquals(10L, response.id());
        assertEquals("Emmaus", response.name());
        verify(repository, times(1)).save(any(Association.class));
    }


}
