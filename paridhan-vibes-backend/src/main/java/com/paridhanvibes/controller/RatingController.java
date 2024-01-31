package com.paridhanvibes.controller;

import com.paridhanvibes.exception.ProductException;
import com.paridhanvibes.exception.UserException;
import com.paridhanvibes.model.Rating;
import com.paridhanvibes.model.User;
import com.paridhanvibes.request.RatingRequest;
import com.paridhanvibes.service.RatingService;
import com.paridhanvibes.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {
    @Autowired
    private UserService userService;
    @Autowired
    private RatingService ratingServices;



    @PostMapping("/create")
    public ResponseEntity<Rating> createRatingHandler(@RequestBody RatingRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
        User user=userService.findUserProfileByJwt(jwt);
        Rating rating=ratingServices.createRating(req, user);
        return new ResponseEntity<>(rating, HttpStatus.ACCEPTED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductsReviewHandler(@PathVariable Long productId){

        List<Rating> ratings=ratingServices.getProductsRating(productId);
        return new ResponseEntity<>(ratings,HttpStatus.OK);
    }
}

