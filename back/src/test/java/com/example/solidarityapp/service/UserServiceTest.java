package com.example.solidarityapp.service;

import com.example.solidarityapp.dto.user.CreateUserRequestDTO;
import com.example.solidarityapp.dto.user.LoginRequestDTO;
import com.example.solidarityapp.dto.user.UserResponseDTO;
import com.example.solidarityapp.entity.User;
import com.example.solidarityapp.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository repository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService service;

    @Test
    void testRegister() {
        CreateUserRequestDTO request = new CreateUserRequestDTO(
            "Paedyn",
            "paedyn.gray@gmail.com",
            "password123"
        );

        when(repository.findUserByEmail(request.email())).thenReturn(Optional.empty());

        User savedUser = new User();
        savedUser.setId(1L);
        savedUser.setUserName("Paedyn");
        savedUser.setEmail("paedyn.gray@gmail.com");
        savedUser.setPassword("password123");

        when(passwordEncoder.encode(request.password())).thenReturn("encodedPass");
        when(repository.save(any(User.class))).thenReturn(savedUser);

        UserResponseDTO response = service.register(request);

        assertEquals(1L, response.id());
        assertEquals("Paedyn", response.userName());
        assertEquals("paedyn.gray@gmail.com", response.email());
        verify(repository, times(1)).save(any(User.class));
    }

    @Test
    void testLoginSuccess() {
        LoginRequestDTO request = new LoginRequestDTO("paedyn.gray@gmail.com", "password123");

        User user = new User();
        user.setId(2L);
        user.setUserName("Paedyn");
        user.setEmail("paedyn.gray@gmail.com");
        user.setPassword("encodedPass");

        when(repository.findUserByEmail("paedyn.gray@gmail.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("password123", "encodedPass")).thenReturn(true);

        UserResponseDTO response = service.login(request);

        assertEquals(2L, response.id());
        assertEquals("Paedyn", response.userName());
        assertEquals("paedyn.gray@gmail.com", response.email());
    }

    @Test
    void testLoginFailWrongPassword() {
        LoginRequestDTO request = new LoginRequestDTO("paedyn.gray@gmail.com", "wrongPassword");

        User user = new User();
        user.setPassword("encodedPass");

        when(repository.findUserByEmail("paedyn.gray@gmail.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("wrongPassword", "encodedPass")).thenReturn(false);

        RuntimeException ex = assertThrows(RuntimeException.class, () -> service.login(request));
        assertEquals("Invalid credentials", ex.getMessage());
    }
}
