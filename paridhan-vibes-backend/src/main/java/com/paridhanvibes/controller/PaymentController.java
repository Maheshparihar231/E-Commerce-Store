package com.paridhanvibes.controller;

import com.paridhanvibes.domain.OrderStatus;
import com.paridhanvibes.domain.PaymentStatus;
import com.paridhanvibes.exception.OrderException;
import com.paridhanvibes.exception.UserException;
import com.paridhanvibes.repository.OrderRepository;
import com.paridhanvibes.response.ApiResponse;
import com.paridhanvibes.response.PaymentLinkResponse;
import com.paridhanvibes.service.OrderService;
import com.paridhanvibes.service.UserService;
import com.paridhanvibes.model.Order;
import com.razorpay.*;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;
    @Autowired
    private OrderRepository orderRepository;



    @PostMapping("/payments/{orderId}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable Long orderId,
                                                                 @RequestHeader("Authorization")String jwt)
            throws RazorpayException, UserException, OrderException {

        Order order=orderService.findOrderById(orderId);
        try {
            // Instantiate a Razorpay client with your key ID and secret
            RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);

            // Create a JSON object with the payment link request parameters
            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount",order.getTotalPrice()* 100);
            paymentLinkRequest.put("currency","INR");
//		      paymentLinkRequest.put("expire_by",1691097057);
//		      paymentLinkRequest.put("reference_id",order.getId().toString());


            // Create a JSON object with the customer details
            JSONObject customer = new JSONObject();
            customer.put("name",order.getUser().getFirstName()+" "+order.getUser().getLastName());
            customer.put("contact",order.getUser().getMobile());
            customer.put("email",order.getUser().getEmail());
            paymentLinkRequest.put("customer",customer);

            // Create a JSON object with the notification settings
            JSONObject notify = new JSONObject();
            notify.put("sms",true);
            notify.put("email",true);
            paymentLinkRequest.put("notify",notify);

            // Set the reminder settings
            paymentLinkRequest.put("reminder_enable",true);

            // Set the callback URL and method
            paymentLinkRequest.put("callback_url","http://localhost:4200/payment-success?order_id="+orderId);
            paymentLinkRequest.put("callback_method","get");

            // Create the payment link using the paymentLink.create() method
            PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);

            String paymentLinkId = payment.get("id");
            String paymentLinkUrl = payment.get("short_url");

            PaymentLinkResponse res=new PaymentLinkResponse(paymentLinkUrl,paymentLinkId);

            PaymentLink fetchedPayment = razorpay.paymentLink.fetch(paymentLinkId);

            order.setOrderId(fetchedPayment.get("order_id"));
            orderRepository.save(order);

            // Print the payment link ID and URL
            System.out.println("Payment link ID: " + paymentLinkId);
            System.out.println("Payment link URL: " + paymentLinkUrl);
            System.out.println("Order Id : "+fetchedPayment.get("order_id")+fetchedPayment);

            return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.ACCEPTED);

        } catch (RazorpayException e) {

            System.out.println("Error creating payment link: " + e.getMessage());
            throw new RazorpayException(e.getMessage());
        }


//		order_id
    }

    @GetMapping("/payments")
    public ResponseEntity<ApiResponse> redirect(@RequestParam(name="payment_id") String paymentId, @RequestParam("order_id")Long orderId) throws RazorpayException, OrderException {
        RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
        Order order =orderService.findOrderById(orderId);

        try {


            Payment payment = razorpay.payments.fetch(paymentId);
            System.out.println("payment details --- "+payment+payment.get("status"));

            if(payment.get("status").equals("captured")) {
                System.out.println("payment details --- "+payment+payment.get("status"));

                order.getPaymentDetails().setPaymentId(paymentId);
                order.getPaymentDetails().setStatus(PaymentStatus.COMPLETED);
                order.setOrderStatus(OrderStatus.PLACED);
//			order.setOrderItems(order.getOrderItems());
                System.out.println(order.getPaymentDetails().getStatus()+"payment status ");
                orderRepository.save(order);
            }
            ApiResponse res=new ApiResponse("your order get placed", true);
            return new ResponseEntity<ApiResponse>(res,HttpStatus.OK);

        } catch (Exception e) {
            System.out.println("errrr payment -------- ");
            new RedirectView("https://shopwithzosh.vercel.app/payment/failed");
            throw new RazorpayException(e.getMessage());
        }

    }

}