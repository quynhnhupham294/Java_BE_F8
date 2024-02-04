package javawebbef8v1.demo.mapper;

import javawebbef8v1.demo.entities.Role;
import javawebbef8v1.demo.entities.User;
import org.apache.ibatis.annotations.Mapper; //Interface

import javax.swing.*;
import java.util.List;

@Mapper
public interface UserMapper {
    List<User> getAllUser();
}

