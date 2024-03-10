## 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
Here, the relationship between the two tables is **one-to-many** relationship which means - 
- each product can have only one product category associated with it.
- a product category can have multiple products associated with it.

## 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
The product table has a category_id field which is a foreign key or referencing key that is refering to the product_category table, also acts as a primary key for the product_category table. Using this category_id we can check the validity of the specific category. 
- For example, in **mongodb** using **mongoose** we can check this in the controller itself by **Product_Category.findById(category_id)** and check the existence of category associated with the category_id. If the category exists we can continue further or we can generate an error.
- we can also do this in the **pre hook** offered by mongoose before saving a document.
