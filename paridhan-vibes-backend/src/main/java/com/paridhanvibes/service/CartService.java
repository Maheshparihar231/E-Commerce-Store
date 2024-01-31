package com.paridhanvibes.service;

import com.paridhanvibes.exception.ProductException;
import com.paridhanvibes.model.Cart;
import com.paridhanvibes.model.CartItem;
import com.paridhanvibes.model.User;
import com.paridhanvibes.request.AddItemRequest;

public interface CartService {
    public Cart createCart(User user);

    public CartItem addCartItem(Long userId, AddItemRequest req) throws ProductException;

    public Cart findUserCart(Long userId);


}
