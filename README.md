# Eazy Marketplace (Server)

Server side code for a full stack Vue.js CRUD application that simulates an online marketplace experience.

## Local Setup

``` bash
# install dependencies
npm install

# serve with hot reload via Nodemon at localhost:5000
npm run dev

```

### CRUD Functionality
Users can fully consume this API on both the inventory and cart tables:
- **Read**: Each of the respective 'Buy', 'Sell', and 'Cart' tables populate data from the database on page load.
- **Create**: Create new inventory item using a form that sends a POST request to the inventory database. A new cart item is created when a user clicks on the 'Add To Cart' button, passing the inventory_id to the cart table as a foreign key relationship to the inventory table.
- **Update**: A pre-populated form is rendered when a user clicks the 'Edit' button on an inventory item, which sends a PUT request to the inventory table. In the shopping cart, a PUT request is sent to the cart table when a user updates the quantity they intend to purchase.
- **Delete**: A user can click an item's 'Delete' Button on each of the inventory and cart pages to remove the respective item from the database.



Stripe Payment Testing Info:
``` bash
# Use any email (Ex: test@example.com)
# Test Credit Card #: 4242 4242 4242 4242
# Use any expiration date in the future
# Use any 3 digit verification number

``` 

Stripe Checkout Demo

When a user fills out the stripe payment form, a token is created and sent to the Stripe server for authentication, Stripe processes the token as well as the developer/business owner's private key, then sends back a response that is is communicated to the client. The developer/business owner can see all successful transactions from their Stripe payment dashboard at https://dashboard.stripe.com/test/payments.

![](https://user-images.githubusercontent.com/33434059/42196183-d320abfa-7e39-11e8-8323-31f264e03d70.gif)


Check out the live demo [HERE](https://eazy-marketplace.firebaseapp.com/#/)!

Please do not hesitate to email me at travis.roach24@gmail.com if you have any recommendations!