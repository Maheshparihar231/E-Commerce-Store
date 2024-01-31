package com.paridhanvibes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class Welcome {
    @GetMapping("/greet")
    public String greet(){
        return "Welcome";
    }
}
