package javawebbef8v1.demo.service.ServiceImpl;

import javawebbef8v1.demo.entities.Role;
import javawebbef8v1.demo.mapper.RoleMapper;
import javawebbef8v1.demo.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImplement implements RoleService {
    @Autowired
    RoleMapper mapper;

    @Override
    public List<Role> getAllRole(){
        return mapper.getAllRole();
    }
}
