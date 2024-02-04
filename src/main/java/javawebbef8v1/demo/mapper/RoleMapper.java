package javawebbef8v1.demo.mapper;

import javawebbef8v1.demo.entities.Role;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface RoleMapper{
    List<Role> getAllRole();
}
