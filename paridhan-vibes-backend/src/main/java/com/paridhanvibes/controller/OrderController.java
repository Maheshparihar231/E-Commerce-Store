package com.paridhanvibes.controller;

import com.paridhanvibes.exception.OrderException;
import com.paridhanvibes.exception.UserException;
import com.paridhanvibes.model.Address;
import com.paridhanvibes.model.Order;
import com.paridhanvibes.model.User;
import com.paridhanvibes.service.OrderService;
import com.paridhanvibes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private UserService userService;


    @PostMapping("/")
    public ResponseEntity<Order> createOrderHandler(@RequestBody Address spippingAddress,
                                                    @RequestHeader("Authorization")String jwt) throws UserException {

        User user=userService.findUserProfileByJwt(jwt);
        Order order =orderService.createOrder(user, spippingAddress);

        return new ResponseEntity<Order>(order, HttpStatus.OK);

    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> usersOrderHistoryHandler(@RequestHeader("Authorization")
                                                                String jwt) throws OrderException, UserException{

        User user=userService.findUserProfileByJwt(jwt);
        List<Order> orders=orderService.usersOrderHistory(user.getId());
        return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity< Order> findOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization")
    String jwt) throws OrderException, UserException{

        User user=userService.findUserProfileByJwt(jwt);
        Order orders=orderService.findOrderById(orderId);
        return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
    }

}
