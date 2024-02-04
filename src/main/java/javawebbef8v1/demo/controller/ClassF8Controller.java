package javawebbef8v1.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/form-class")
public class ClassF8Controller {

    @GetMapping("/form-entry")
    public String doGetFormEntry(){
        return "layoutF8/FormClassF8";
    }

    @GetMapping("/index")
    public String doGetIndexForm(){
        return "formEntry/HelloScreen";
    }

    @GetMapping("/RoleEntry")
    public String doGetRoleEntryForm(){
        return "formEntry/RoleEntry";
    }

    @GetMapping("/UserEntry")
    public String doGetUserEntryForm(){
        return "formEntry/UserEntry";
    }

}
