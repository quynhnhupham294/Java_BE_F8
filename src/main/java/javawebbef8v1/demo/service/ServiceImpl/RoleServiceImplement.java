package javawebbef8v1.demo.service.ServiceImpl;

import javawebbef8v1.demo.entities.Role;
import javawebbef8v1.demo.entities.User;
import javawebbef8v1.demo.mapper.RoleMapper;
import javawebbef8v1.demo.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImplement implements RoleService {
    @Autowired
    RoleMapper mapperRole;

    @Override
    public List<Role> getAllRole(){
        return mapperRole.getAllRole();
    }

    @Override
    public int postRole(Role role){
        // checkUser
        int isExistsRole = mapperRole.isExistsRole(role.getRole_id());
        System.out.println("isExistsRole ="+ isExistsRole);
        if (isExistsRole == 1){
            // update
            return mapperRole.putRole(role);
        } else{
            // insert
            return mapperRole.postRole(role);
        }
    }

    @Override
    public int putRole(Role role) {
        return mapperRole.putRole(role);
    }

    @Override
    public int deleteRole(Role role) {
        return mapperRole.deleteRole(role);
    }
}
