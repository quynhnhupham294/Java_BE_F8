package javawebbef8v1.demo.service;

import javawebbef8v1.demo.entities.Role;
import javawebbef8v1.demo.entities.User;

import java.util.List;

public interface RoleService {
    List<Role> getAllRole();

    int postRole(Role role);

    int putRole(Role role);

    int deleteRole(Role role);
}
