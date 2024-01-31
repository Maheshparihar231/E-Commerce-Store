package com.paridhanvibes.response;

import jdk.jfr.Name;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthResponse {
    private String jwt;

    private boolean status;
}
