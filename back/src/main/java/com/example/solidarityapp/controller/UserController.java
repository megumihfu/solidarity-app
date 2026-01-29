package com.example.solidarityapp.controller;

import com.example.solidarityapp.dto.user.CreateUserRequestDTO;
import com.example.solidarityapp.dto.user.LoginRequestDTO;
import com.example.solidarityapp.dto.user.UserResponseDTO;
import com.example.solidarityapp.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(path = "{email}")
    public ResponseEntity<UserResponseDTO> getByEmail(@PathVariable String email) {
        return ResponseEntity.ok(service.getUserByEmail(email));
    }

    //region POST request
    @PostMapping(path = "/register")
    public ResponseEntity<UserResponseDTO> register(
            @Valid
            @RequestBody CreateUserRequestDTO request
    ) {
        UserResponseDTO user = service.register(request);
        return ResponseEntity.ok(user);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<UserResponseDTO> login(
            @Valid
            @RequestBody LoginRequestDTO request
    ) {
        UserResponseDTO user = service.login(request);
        return ResponseEntity.ok(user);
    }

    //endregion
}
