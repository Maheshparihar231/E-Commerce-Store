package com.paridhanvibes.controller;

import com.paridhanvibes.exception.ProductException;
import com.paridhanvibes.exception.UserException;
import com.paridhanvibes.model.Cart;
import com.paridhanvibes.model.CartItem;
import com.paridhanvibes.model.User;
import com.paridhanvibes.request.AddItemRequest;
import com.paridhanvibes.response.ApiResponse;
import com.paridhanvibes.service.CartService;
import com.paridhanvibes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws UserException {

        User user=userService.findUserProfileByJwt(jwt);

        Cart cart=cartService.findUserCart(user.getId());

        System.out.println("cart - "+cart.getUser().getEmail());

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);
    }

    @PutMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody AddItemRequest req,
                                                  @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

        User user=userService.findUserProfileByJwt(jwt);

        CartItem item = cartService.addCartItem(user.getId(), req);

        ApiResponse res= new ApiResponse("Item Added To Cart Successfully",true);

        return new ResponseEntity<>(item,HttpStatus.ACCEPTED);

    }

}
