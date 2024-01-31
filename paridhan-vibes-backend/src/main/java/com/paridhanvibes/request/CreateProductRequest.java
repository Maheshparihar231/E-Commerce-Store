package com.paridhanvibes.request;

import com.paridhanvibes.model.Category;
import com.paridhanvibes.model.Size;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
@Builder
public class CreateProductRequest {

    private String title;

    private String description;

    private int price;

    private int discountedPrice;

    private int discountPersent;

    private int quantity;

    private String brand;

    private String color;

    private Set<Size> size;

    private String imageUrl;

    private String topLavelCategory;
    private String secondLavelCategory;
    private String thirdLavelCategory;


}
