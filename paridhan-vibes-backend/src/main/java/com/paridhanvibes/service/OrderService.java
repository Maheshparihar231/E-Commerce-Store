package com.paridhanvibes.service;

import com.paridhanvibes.exception.OrderException;
import com.paridhanvibes.model.Address;
import com.paridhanvibes.model.Order;
import com.paridhanvibes.model.User;
import org.aspectj.weaver.ast.Or;
import org.springframework.stereotype.Service;

import java.util.List;


public interface OrderService {
    public Order createOrder(User user, Address shippingAdress);

    public Order findOrderById(Long orderId) throws OrderException;

    public List<Order> usersOrderHistory(Long userId);

    public Order placedOrder(Long orderId) throws OrderException;

    public Order confirmedOrder(Long orderId)throws OrderException;

    public Order shippedOrder(Long orderId) throws OrderException;

    public Order deliveredOrder(Long orderId) throws OrderException;

    public Order cancledOrder(Long orderId) throws OrderException;

    public List<Order>getAllOrders();

    public void deleteOrder(Long orderId) throws OrderException;
}
