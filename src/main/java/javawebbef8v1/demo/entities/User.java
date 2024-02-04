package javawebbef8v1.demo.entities;

import lombok.*;

//@Getter
//@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    private int userId;
    private String userName;
    private int age;
    private String gmail;
    private String description;
    private int roleId;
}

