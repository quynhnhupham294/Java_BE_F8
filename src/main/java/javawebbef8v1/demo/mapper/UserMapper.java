package javawebbef8v1.demo.mapper;

import javawebbef8v1.demo.entities.Role;
import javawebbef8v1.demo.entities.User;
import org.apache.ibatis.annotations.Mapper; //Interface
import org.apache.ibatis.annotations.Param;

import javax.swing.*;
import java.util.List;

@Mapper
public interface UserMapper {
    List<User> getAllUser();

    int postUser(User user);

    int putUser(User user);

    int deleteUser(User user);

    int isExistsUser(@Param("userId") int userId);
}

