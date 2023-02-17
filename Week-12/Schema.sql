DROP DATABASE WAREHOUSE;

CREATE DATABASE WAREHOUSE;

USE WAREHOUSE;

-- CITY 
CREATE TABLE CITIES (
    CITY_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    CITY CHAR(20) NOT NULL,
    STATE CHAR(20) NOT NULL
);

-- WAREHOUSES
CREATE TABLE WAREHOUSES (
    WID INTEGER AUTO_INCREMENT PRIMARY KEY,
    WNAME CHAR(30) NOT NULL, 
    LOCATION CHAR(20) NOT NULL,
    EXTRACONTEXT JSON,    
    CITY_ID INTEGER,
    FOREIGN KEY (CITY_ID) REFERENCES CITIES(CITY_ID)
);

--  STORES
CREATE TABLE STORES (
    SID INTEGER AUTO_INCREMENT PRIMARY KEY,
    WID INTEGER NOT NULL,
    STORE_NAME CHAR(20) NOT NULL,
    FOREIGN KEY (WID) REFERENCES WAREHOUSES(WID)
);

-- CUSTOMERS
CREATE TABLE CUSTOMER (
    CNO INTEGER AUTO_INCREMENT PRIMARY KEY,
    CNAME CHAR(50) NOT NULL,
    ADDR VARCHAR(50) NOT NULL,
    CU_CITY INTEGER,
    FOREIGN KEY (CU_CITY) REFERENCES CITIES(CITY_ID)
);

-- ORDERS
CREATE TABLE ORDERS (
    ONO INTEGER AUTO_INCREMENT PRIMARY KEY,
    ODATE DATE NOT NULL,
    CNO INTEGER NOT NULL,
    FOREIGN KEY (CNO) REFERENCES CUSTOMER(CNO)
);

-- ITEMS
CREATE TABLE ITEMS (
    ITEMNO INTEGER AUTO_INCREMENT PRIMARY KEY,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2) NOT NULL,
    COST DECIMAL(5, 2) NOT NULL
);

-- ITEMS_ORDERS 
CREATE TABLE ITEMS_ORDERS(
    ITEM_ORDER_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    ORDERED_QUANTITY INTEGER NOT NULL,
    ONO INTEGER NOT NULL,
    ITEMNO INTEGER NOT NULL,
    FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- STORES_ITEMS
CREATE TABLE IF NOT EXISTS STORES_ITEMS(
    STORE_ITEM_ID INTEGER AUTO_INCREMENT PRIMARY KEY,
    QUANTITY INTEGER NOT NULL,
    SID INTEGER NOT NULL,
    ITEMNO INTEGER NOT NULL,
    FOREIGN KEY (SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- INSERT DATA IN CITY
INSERT INTO CITIES(CITY, STATE) VALUES ('AHMEDABAD', 'GUJARAT');
INSERT INTO CITIES(CITY, STATE) VALUES ('GANDHINAGER', 'GUJARAT');
INSERT INTO CITIES(CITY, STATE) VALUES ('PUNE', 'MAHARASHTRA');
INSERT INTO CITIES(CITY, STATE) VALUES ('MUMBAI', 'MAHARASHTRA');

-- INSERT DATA IN WAREHOUSES
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('AMAZON WAREHOUSES', 'LOC 1' ,1);
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('FLIPKART WAREHOUSES', 'LOC 2' ,2);
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('TATA WAREHOUSES', 'LOC 3' ,3);
INSERT INTO WAREHOUSES(WNAME, LOCATION, CITY_ID) VALUES ('RELIANCE WAREHOUSES', 'LOC 4' ,4);

-- INSERT DATA IN STORES
INSERT INTO STORES(WID, STORE_NAME) VALUES(1, 'STORE 1');
INSERT INTO STORES(WID, STORE_NAME) VALUES(2, 'STORE 2');
INSERT INTO STORES(WID, STORE_NAME) VALUES(3, 'STORE 3');
INSERT INTO STORES(WID, STORE_NAME) VALUES(4, 'STORE 4');
INSERT INTO STORES(WID, STORE_NAME) VALUES(2, 'STORE 5');

-- INSERT DATA IN CUSTOMERS
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('JIMISH GAJJAR', 'CHANDLODIYA', 1);
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('RAJ BHAVASAR', 'RANIP', 1);
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('NIKUNJ PANCHAL', 'KUDASAN', 2);
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('AMIT JADWANVI', 'CHILODA', 2);
INSERT INTO CUSTOMER(CNAME, ADDR, CU_CITY) VALUES('MAULIK PANCHAL', 'BORIVALI', 4);

-- INSERT DATA IN ORDERS
INSERT INTO ORDERS(ODATE,CNO) VALUES('2022-12-03', 1);
INSERT INTO ORDERS(ODATE,CNO) VALUES('2021-12-02', 2);
INSERT INTO ORDERS(ODATE,CNO) VALUES('2021-11-15', 3);
INSERT INTO ORDERS(ODATE,CNO) VALUES('2021-11-12', 4);
INSERT INTO ORDERS(ODATE,CNO) VALUES('2021-10-15', 5);

-- INSERT DATA IN ITEMS
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('ONION', 1.00, 26.00);
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('POTATO', 2.00, 60.50);
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('MAGGI', 0.90, 13.00);
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('KISSAN KETCHUP', 0.40, 109.50);
INSERT INTO ITEMS(DESCRIPTION, WEIGHT, COST) VALUES('KISSAN JAM', 0.10, 200.50);

-- INSERT DATA IN ITEMS_ORDERS
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(1, 1, 1);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(20, 1, 2);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(50, 1, 3);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(5, 1, 4);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(2, 1, 5);

INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(11, 2, 1);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(15, 2, 2);

INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(9, 3, 3);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(2, 3, 4);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(12, 3, 5);

INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(10, 4, 2);
INSERT INTO ITEMS_ORDERS(ORDERED_QUANTITY, ONO, ITEMNO) VALUES(40, 4, 3);

-- INSERT DATA IN STORES_ITEMS
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(100, 1, 1);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(200, 1, 2);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(150, 1, 3);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(140, 1, 4);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(180, 1, 5);

INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(100, 2, 1);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(200, 2, 2);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(150, 2, 3);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(140, 2, 4);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(180, 2, 5);

INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(100, 3, 1);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(200, 3, 2);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(150, 3, 3);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(140, 3, 4);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(180, 3, 5);

INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(100, 4, 1);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(200, 4, 2);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(150, 4, 3);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(140, 4, 4);
INSERT INTO STORES_ITEMS(QUANTITY, SID, ITEMNO) VALUES(180, 4, 5);