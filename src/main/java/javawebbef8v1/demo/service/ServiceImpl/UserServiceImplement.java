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
    UserMapper mapper;

    @Override
    public List<User> getAllUsers() {
        return mapper.getAllUser();
    }
}

//    public List<User> getAllUsers() {
//        User user01 = User.builder()
//                .userId(1)
//                .userName("Quynh")
//                .age(19)
//                .gmail("quynh209@gmail.com")
//                .description("F8")
//                .build();
//        User user02 = User.builder()
//                .userId(2)
//                .userName("Quốc Đạt")
//                .age(23)
//                .gmail("datbui185@gmail.com")
//                .description("Mentor F8")
//                .build();
//        User user03 = User.builder()
//                .userId(3)
//                .userName("Huu Thuc")
//                .age(18).description("")
//                .gmail("huynhhuuthuc321@gmail.com")
//                .build();
//        User user04 = User.builder()
//                .userId(4)
//                .userName("Nguyễn Huy")
//                .age(22)
//                .gmail("nguyenhuy96877@gmail.com")
//                .description("1")
//                .build();
//        User user05 = User.builder()
//                .userId(5)
//                .userName("Nam")
//                .age(19)
//                .gmail("minhnam1810@gmail.com")
//                .description(".")
//                .build();
//        List<User> listUser = Arrays.asList(user01,
//                user02,
//                user03,
//                user04,
//                user05);
//        return listUser;
//    }

