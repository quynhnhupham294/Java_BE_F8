package javawebbef8v1.demo.data;


import javawebbef8v1.demo.entities.User;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

public class DataPayload {

    public List<User> getAllUsers(){
        return Arrays.asList(
//                User.builder().userId(1).userName("ha huy tri").age(22).description("desciption").build(),
//                User.builder().userId(2).userName("huynh huu thuc").age(22).description("desciption").build(),
//                User.builder().userId(3).userName("pham nhu quynh").age(22).description("desciption").build()
        );
    }


}
