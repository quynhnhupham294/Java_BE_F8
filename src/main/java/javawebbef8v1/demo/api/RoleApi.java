package javawebbef8v1.demo.api;

import javawebbef8v1.demo.entities.Role;
import javawebbef8v1.demo.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.ErrorManager;

@RestController
@RequestMapping("api/v2/role")
public class RoleApi {
    @Autowired
    RoleService roleService;

//    @RequestMapping("/getAllRole")
//    public ResponseEntity<?> doGetAllRole(){
//        return ResponseEntity.ok(roleService.getAllRole());
//    }
    @GetMapping("/getAllRole")
    public ResponseEntity<?> doGetAllRole() {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","success");
            result.put("data",roleService.getAllRole());
        }catch (Exception e){
            result.put("status",false);
            result.put("message","Fail");
            result.put("data",null);
            System.out.println("Fail When Call API getAllRole: " + e);
        }
        return ResponseEntity.ok(result);
    }

    @PostMapping("/postRole")
    public ResponseEntity<?> postUser(@RequestBody Role role) {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","Lưu Thông Tin Người Dùng Thành Công");
            result.put("data",roleService.postRole(role));
        }catch (Exception e){
            result.put("status",false);
            result.put("message","Fail");
            result.put("data",null);
            System.out.println("Fail When Call API postRole: " + e);
        }
        return ResponseEntity.ok(result);
    }

    @PutMapping("/putRole")
    public ResponseEntity<?> putUser(@RequestBody Role role) {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","Cập Nhật Thông Tin Người Dùng Thành Công");
            result.put("data",roleService.putRole(role));
        }catch (Exception e){
            result.put("status",false);
            result.put("message","Fail");
            result.put("data",null);
            System.out.println("Fail Call API api/v2/role/putRole: " + e);
        }
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/deleteRole")
    public ResponseEntity<?> deleteUser(@RequestBody Role role) {
        Map<String, Object> result = new HashMap<>();
        try{
            result.put("status",true);
            result.put("message","Xóa Thông Tin Người Dùng Thành Công");
            result.put("data",roleService.deleteRole(role));
        }catch (Exception e){
            result.put("status",false);
            result.put("message","Fail");
            result.put("data",null);
//            log.error("Fail When Call API Delete Role", e);
        }
        return ResponseEntity.ok(result);
    }
}
