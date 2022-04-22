package com.agents.TA.com.agents.TA.Controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/User")
public class UserController {

    @GetMapping("/{userId}")
    public Integer getUserDetails(@PathVariable Integer userId){
        return 0;
    }

}
