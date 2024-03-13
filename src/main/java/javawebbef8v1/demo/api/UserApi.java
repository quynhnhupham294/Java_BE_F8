package javawebbef8v1.demo.api;

import javawebbef8v1.demo.entities.User;
import javawebbef8v1.demo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("api/v1/users")
public class UserApi {

    @Autowired
    UserService userService;

    @GetMapping("/getAllUser")
    public ResponseEntity<?> doGetAllUser() {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","success");
            result.put("data",userService.getAllUser());
        }catch (Exception e){
            result.put("status",false);
            result.put("message","Fail");
            result.put("data",null);
            log.error("Fail When Call API : ", e);
        }
        return ResponseEntity.ok(result);
    }

    @PostMapping("/postUser")
    public ResponseEntity<?> postUser(@RequestBody User user) {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","Lưu Thông Tin Người Dùng Thành Công");
            result.put("data",userService.postUser(user));
        }catch (Exception e){
            result.put("status",false);
            result.put("message","Fail");
            result.put("data",null);
            log.error("Fail When Call API Create User", e);
        }
            return ResponseEntity.ok(result);
    }

    @PutMapping("/putUser")
    public ResponseEntity<?> putUser(@RequestBody User user) {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","Cập Nhật Thông Tin Người Dùng Thành Công");
            result.put("data",userService.putUser(user));
        }catch (Exception e){
            result.put("status",false);
            result.put("message","Fail");
            result.put("data",null);
            log.error("Fail When Call API Update User", e);
        }
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/deleteUser")
    public ResponseEntity<?> deleteUser(@RequestBody User user) {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","Xóa Thông Tin Người Dùng Thành Công");
            result.put("data",userService.deleteUser(user));
        }catch (Exception e){
            result.put("status",false);
            result.put("message","");
            result.put("data",null);
            log.error("Fail When Call API Delete User", e);
        }
        return ResponseEntity.ok(result);
    }
}
