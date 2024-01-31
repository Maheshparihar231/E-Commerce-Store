package com.paridhanvibes.service;

import com.paridhanvibes.exception.ProductException;
import com.paridhanvibes.model.Rating;
import com.paridhanvibes.model.User;
import com.paridhanvibes.request.RatingRequest;
import org.springframework.stereotype.Service;

import java.util.List;


public interface RatingService {

    public Rating createRating(RatingRequest req,User user) throws ProductException;

    public List<Rating> getProductsRating(Long productId);
}
