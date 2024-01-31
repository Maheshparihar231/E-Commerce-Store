package com.paridhanvibes.model;

import com.paridhanvibes.domain.PaymentMethod;
import com.paridhanvibes.domain.PaymentStatus;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDetails {
    private PaymentMethod paymentMethod;
    private PaymentStatus status;
    private String paymentId;
    private String razorpayPaymentLinkId;
    private String razorpayPaymentLinkReferenceId;
    private String razorpayPaymentLinkStatus;
    private String razorpayPaymentId​;
}
