The Deoitte Shop App
Author: Aidan Pinman.


To start the program open the files in your terminal in the top level of the directory run $npm install, this will install the requires dependancies. then go into the client directory and run @npm install here, this again will install the required dependancies.

now go back to the top level of the directory again and run >npm start, this will start the server on localhost:3000. so if you open this in your browser you will be at the site.


The site is written using React in its current state you can add items from the lists and they will add to your cart, you can also delete from the cart (one item at a time).

The sub total of the cart updates as you add/remove items.

it will also stop adding more item to the cart once the order quantity is greater than the stock quantity, I was looking into getting a modal but time ran out

==TO BE COMPLETED==
VOUCHERS
the idea was to have the user input the code and submit it, this would then be passed up to the top level and checked through the list of possible vouchers. If the code matched the user input then the voucher amount would be set and discounted from the sub total.

the vouchers would also have checks against them, to make sure that preset requirements had been met. In the case for the spending over £50 I would have a check that the total spend is over £50 and for the £15 one I would have a check to see if the spend is over the required amount and that at least 1 item of footwear had been purchased.

OUT OF STOCK
when an item is out of stock or you try to order more than is in stock I wanted a prompt to appear and explain to the user that the shop doesn't have the required stock to fufil the order and ask them to enter an email to let them know when it is back in stock

ITEM PICTURES
if I had more time I would have liked to add some sort of picture to each product to give a nicer visual display

==FILE STRUCTURE==

I have opted for a simple file structure that should hopefully be easy to follow, I have stived to make code as DRY as possible and easy to read.

Build
this contains basic things like the HTML file, the webpack loads the bundle here and all the css and images will be here.

SRC
-components
this holds all the different boxes that are rendered, the ShopBox holds all the logic and passed props down to the products boxes (filtered by gender, but using the same code) and to the cart box that has some basic state to deal with the totals and vouchers/

-app
this holds the ShopBox and passes it to the HTML

-sample date
this is seed data for all the products you gave us

-voucher data
seed data for the vouchers

-webpack
for bundling code and passing to the HTML

Specs
-shopSpecs
tests are in here but sadly are lacking at the minute





