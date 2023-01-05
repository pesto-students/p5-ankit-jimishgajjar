# Exercise Week 12

## Warehouse Database

-  In this assignment students need to design and create a WareHouse Database.

- Student should create table as mentioned below

  - CITIES(CITY CHAR(20),STATE CHAR(20))
  - WAREHOUSES(WID INTEGER,WNAME CHAR(30),LOCATION CHAR(20),EXTRA CONTEXT  json)
  - STORES(SID INTEGER,STORE_NAME CHAR(20), LOCATION_CITY CHAR(20))
  - CUSTOMER(CNO INTEGER, CNAME CHAR(50),ADDR VARCHAR(50), CU_CITY CHAR(20))
  - ORDERS(ONO INT,ODATE DATE)
  - ITEMS(ITEMNO INTEGER,DESCRIPTION TEXT,WEIGHT DECIMAL(5,2), COST DECIMAL(5,2))

- Feel free to create more tables or add more columns in the table if required.

- Table design should follow the below mentioned relationship between tables.
  - CITIES-WAREHOUSES 1 TO M
  - WAREHOUSES - STORES 1 TO M
  - CUSTOMER – ORDERS 1 TO M
  - ITEMS – ORDERS M TO M relationship with descriptive attribute ordered_quantity
  - STORES-ITEMS M TO M RELATION with descriptive attribute quantity

- Try to solve the following problems using queries
  - Find the item that has minimum weight.
  - Find the different warehouses in “Pune”.
  - Find the details of items ordered by a customer “Mr. Patil”.
  - Find a Warehouse which has maximum stores.
  - Find an item which is ordered for a minimum number of times.
  - Find the detailed orders given by each customer.

#

# OUTPUT
Output file is saved in Schema.sql And Queries.sql 



<h3 align="center" > <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30" height="30" style="margin-right: 10px;">Connect with me 🤝 </h3>

<div align="center"  class="icons-social" style="margin-left: 10px;">
        <a style="margin-left: 10px;"  target="_blank" href="https://www.linkedin.com/in/jimishgajjar">
			<img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png">
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://github.com/jimishgajjar">
            <img src="https://img.icons8.com/doodle/40/000000/github--v1.png">
        </a>
		<a style="margin-left: 10px;" target="_blank" href="https://stackoverflow.com/users/9066199/jimish-gajjar">
				<img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png">
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://www.instagram.com/jimish.gajjar/">
			<img src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png">
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://twitter.com/JimishGajjar">
			<img src="https://img.icons8.com/doodle/1x/twitter-squared--v2.png" >
        </a>
        <a style="margin-left: 10px;" target="_blank" href="https://www.youtube.com/channel/UCiVI9gZzMFf9G1SIpoRqPEg?view_as=subscriber">
				<img src="https://img.icons8.com/doodle/1x/youtube--v2.png" >
        </a>
	    <a style="margin-left: 10px;" target="_blank" href="https://jimishgajjar.in/">
			<img src="https://img.icons8.com/external-sketchy-juicy-fish/0.6x/external-blog-online-services-sketchy-sketchy-juicy-fish.png">
        </a>
</div>
