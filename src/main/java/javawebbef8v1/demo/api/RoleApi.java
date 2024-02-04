package javawebbef8v1.demo.api;

import javawebbef8v1.demo.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v2/role")
public class RoleApi {
    @Autowired
    RoleService roleService;

    @RequestMapping("getAllRole")
    public ResponseEntity<?> doGetAllRole(){
        return ResponseEntity.ok(roleService.getAllRole());
    }
}
