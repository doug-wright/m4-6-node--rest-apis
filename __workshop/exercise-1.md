# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

Product endpoints:

/products	   	GET		Retrieve a list of all available products.

/products/id	GET		Retrieve description, quantity on hand, reorder point,
                    price and total quantity purchased for a specific product.

/products 		POST	Create a new product record.  Supply the following
                    parameters in the form of ?key1=value&key2=value, etc.
						        name: product name
						        description: product description
						        qoh: initial quantity on hand
						        reorder: reorder point
						        price: price

			        			Returns: the newly created product ID.

/products/id	 PUT	Replace all product details.  Provide the same parameters as 
                    in /products POST.  All old values will be replaced by the new parameters.

/products/id 	PATCH	Replace specific product details.  Provide any parameters 
                    listed in /products POST.  Those values will be replaced
                    with the new parameters.  All other values will	remain
                    unchanged.

/products/id	DELETE	Delete a specific product.

Customer endpoints:

/customers		GET		Retrieve a list of all customers.

/customers/id	GET		Retrieve name, address, city, postal code, email, phone 
                    number, birth date, last visited and total value of
                    purchases for a specific customer.

/customers		POST	Create a new customer record.  Supply the following 
                    parameters in the form of	?key1=value&key2=value, etc.
						        name: customer name
						        address: customer address
						        city: customer city
						        postalCode: postal code
						        email: customer email address
						        phone: customer phone number
						        birthDate: customer's date of birth
						
						        Returns the newly created customer ID.
			
/customers/id	PUT		Replace all customer details.  Provide the same parameters 
                    as in /customers POST.  All old values will be replaced by
                    the new parameters.
						
/customers/id	PATCH	Replace specific customer details.  Provide any parameters
                    listed in /customers POST.  Those values will be replaced
                    with the new parameters.  All other values will remain 
                    unchanged.
						
/customers/id	DELETE	Delete a specific customer.

Seating endpoints:

/tables	  		GET	 	Retrieve a list of all tables.

/tables/id		GET		Retrieve capacity, location, in use, reserved and 
                    reservation date/time for a specific table.
						
/tables	  		POST	Create a new table record.  Supply the following parameters 
                    in the form of ?key1=value&key2=value, etc.
                    capacity: number of seats
						        location: dining area or bar
						
						        Returns the newly created table ID.
						
/tables/id		PUT		Replace all tables details.  Provide the same parameters as 
                    in /tables POST.  All old values will be replaced by the
                    new parameters.
						
/tables/id		PATCH	Replace specific table details.  Provide any parameters 
                    listed in /table POST.  Those values will be replaced with 
                    the new parameters.  All other values will remain
                    unchanged.
						
/tables/id		DELETE	Delete a specific table.
