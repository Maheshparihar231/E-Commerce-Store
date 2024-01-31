package com.paridhanvibes.service;

import com.paridhanvibes.exception.ProductException;
import com.paridhanvibes.model.Review;
import com.paridhanvibes.model.User;
import com.paridhanvibes.request.ReviewRequest;

import java.util.List;

public interface ReviewService {
    public Review createReview(ReviewRequest req,User user) throws ProductException;

    public List<Review> getAllReview(Long productId);
}
