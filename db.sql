CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone VARCHAR(255),
    address CHAR,
    gmail VARCHAR(255),
    role INT,
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS role (
    id INT NOT NULL AUTO_INCREMENT,
    role_name VARCHAR(255),
    role_type INT,
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS category (
    id INT NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(255),
    category_slug VARCHAR(255),
    category_desc CHAR,
    category_type INT,
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS order_w (
    id INT NOT NULL AUTO_INCREMENT,
    order_name VARCHAR(255),
    order_price VARCHAR(255),
    order_coupon VARCHAR(255),
    user_id INT,
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS order_product (
    id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS promotion (
    id INT NOT NULL AUTO_INCREMENT,
    promotion_percent INT,
    product_id INT,
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255),
    product_slug VARCHAR(255),
    product_desc VARCHAR(255),
    product_content CHAR,
    category_id INT,
    product_price VARCHAR(255),
    product_inventory VARCHAR(255),
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS product_image (
    id INT NOT NULL AUTO_INCREMENT,
    product_id INT,
    image_url CHAR,
    created TIMESTAMP,
    updateed TIMESTAMP,
    deleted TIMESTAMP,
    PRIMARY KEY (id)
);