package javawebbef8v1.demo.service.ServiceImpl;

import javawebbef8v1.demo.data.DataPayload;
import javawebbef8v1.demo.entities.User;
import javawebbef8v1.demo.mapper.UserMapper;
import javawebbef8v1.demo.service.UserService;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class UserServiceImplement implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public List<User> getAllUser() {
        return userMapper.getAllUser();
    }

    @Override
    public int postUser(User user) {
        // checkUser
        int isExistsUser = userMapper.isExistsUser(user.getUserId());
        System.out.println("isExistsUser ="+ isExistsUser);
        if (isExistsUser == 1){
            // update
            return userMapper.putUser(user);
        } else{
            // insert
            return userMapper.postUser(user);
        }
    }

    @Override
    public int putUser(User user) {
        return userMapper.putUser(user);
    }

    @Override
    public int deleteUser(User user) {
        return userMapper.deleteUser(user);
    }

}


