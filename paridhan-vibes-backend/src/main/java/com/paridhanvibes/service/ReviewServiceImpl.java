package com.paridhanvibes.service;

import com.paridhanvibes.exception.ProductException;
import com.paridhanvibes.model.Product;
import com.paridhanvibes.model.Review;
import com.paridhanvibes.model.User;
import com.paridhanvibes.repository.ProductRepository;
import com.paridhanvibes.repository.ReviewRepository;
import com.paridhanvibes.request.ReviewRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ReviewServiceImpl implements ReviewService{
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;

    @Override
    public Review createReview(ReviewRequest req,User user) throws ProductException {
        // TODO Auto-generated method stub
        Product product=productService.findProductById(req.getProductId());
        Review review=new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());

//		product.getReviews().add(review);
        productRepository.save(product);
        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {

        return reviewRepository.getAllProductsReview(productId);
    }
}
