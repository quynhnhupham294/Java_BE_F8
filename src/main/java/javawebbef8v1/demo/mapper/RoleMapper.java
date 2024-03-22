package javawebbef8v1.demo.mapper;

import javawebbef8v1.demo.entities.Role;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
@Mapper
public interface RoleMapper{
    List<Role> getAllRole();

    int postRole(Role role);

    int putRole(Role role);

    int deleteRole(Role role);

    int isExistsRole(@Param("role_id") int role_id);
}
