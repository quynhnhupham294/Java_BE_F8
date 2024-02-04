package javawebbef8v1.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/facebook") //goi dc ca 4 phuong thuc
public class HomeController {

    //use : 4 phuong thuc
    // https methods : 4 methods
    //1 . get : lay data * -- limited:gioi han 2048 ki tu
    // 2. post : them data *
    // 3. put : update data
    // 4. delete : xoa data
    @GetMapping("/User")
    // ten ham : dong tu + y nghia ham
    public String doGetFaceBookUser(Model model
                                    , @RequestParam("userName")String userName
                                    , @RequestParam("age")int age
                                    , @RequestParam("major") String major){
        System.out.println("userName = "+userName);
        model.addAttribute("userName",userName);
        System.out.println("age = "+age);
        model.addAttribute("age",age);
        System.out.println("major = "+ major);
        model.addAttribute("major",major);
        return "layout/pageFaceBookUserr";
    }

    @GetMapping("/AnhDev")
    // ten ham : dong tu + y nghia ham
    public String doGetFaceBookAnhDev(){
        return "layoutF8/pageFaceBook";
    }

    @RequestMapping("/quynh.503645")
    public String doGetFaceBookNhuQuynh(){
        return "layoutF8/pageFaceBook2";
    }

    @GetMapping("/Huy")
    public String doGetFaceBookHuy(){
        return "layoutF8/pageFaceBook3";
    }
}
