package com.paridhanvibes.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentLinkResponse {

    private String payment_link_url;
    private String payment_link_id;
}
