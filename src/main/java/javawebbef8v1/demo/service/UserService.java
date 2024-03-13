package javawebbef8v1.demo.service;

import javawebbef8v1.demo.entities.Role;
import javawebbef8v1.demo.entities.User;
import java.util.List;

public interface UserService {

    List<User> getAllUser();
//    throws SQLException
    int postUser(User user);

    int putUser(User user);

    int deleteUser(User user);

}

