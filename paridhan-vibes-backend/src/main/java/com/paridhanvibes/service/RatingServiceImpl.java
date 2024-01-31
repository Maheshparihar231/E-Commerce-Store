package com.paridhanvibes.service;

import com.paridhanvibes.exception.ProductException;
import com.paridhanvibes.model.Product;
import com.paridhanvibes.model.Rating;
import com.paridhanvibes.model.User;
import com.paridhanvibes.repository.RatingRepository;
import com.paridhanvibes.request.RatingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImpl implements RatingService{

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private ProductService productService;

    @Override
    public Rating createRating(RatingRequest req,User user) throws ProductException {

        Product product=productService.findProductById(req.getProductId());

        Rating rating=new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setRating(req.getRating());
        rating.setCreatedAt(LocalDateTime.now());

        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getProductsRating(Long productId) {
        // TODO Auto-generated method stub
        return ratingRepository.getAllProductsRating(productId);
    }

}
