package com.paridhanvibes.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ErrorDetails {

    private String error;
    private String details;
    private LocalDateTime timestamp;

}
