package com.paridhanvibes.request;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReviewRequest {

    private  Long productId;
    private String review;
}
