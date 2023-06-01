
# The Digital Fashion Store

### An e-Commerce fashion shop for shopping trending clothes.

### [View the live site](https://dfs-six.vercel.app)

### Tech Stack

- Angular
- Typescript
- Node.js
- Express.js
- MongoDB
- Mongoose

### Installation and Setup

To install and run the project, follow the steps below:

1. Clone the GitHub repository to your local machine using terminal:

   ```
   git clone https://github.com/VutomiKhosa-99/Digital_Store.git

### Navigate to the project directory:
```
cd Digital_Store
```


### Install the required dependencies for the frontend and backend:
```
cd frontend
npm install
```
```
cd backend
npm install
```
### Set up the MongoDB database:

Install MongoDB and ensure it is running on your machine.
Create a new database named "quicksurveys" in MongoDB.
Configure the backend:

In the backend directory, create a .env file.

Add the following environment variables to the .env file:


```
PORT=2000
MONGODB_URI=mongodb://localhost:27017/store
```
Replace mongodb://localhost:27017/quicksurveys with your MongoDB connection URI if necessary.

## Start the application:

## In the frontend directory, run the following command:

```
ng serve
In the backend directory, run the following command:
```

```
npm run dev
```
Open your web browser and visit http://localhost:2000 to access the project.

## Contributing
We welcome contributions to The Digital Fashion Store! If you would like to contribute, please follow these steps:

- Fork the repository on GitHub.
- Create a new branch with a descriptive name for your feature or bug fix.
- Make the necessary changes and commit them to your branch.
- Push your branch to your forked repository on GitHub.
- Open a new pull request from your branch to the main repository's master branch.
- Provide a clear and concise description of your changes in the pull request, including any relevant information or context.
- Wait for the project maintainers to review your pull request. They may provide feedback or request further changes.
- Make the necessary updates or address any feedback provided.
- Once your pull request is approved, it will be merged into the main repository.
Thank you for considering contributing to The Digital Fashion Store! We appreciate your time and effort in making the application




![image](https://github.com/VutomiKhosa-99/Digital_Store/assets/72287282/e6cff3b5-0f99-4291-b33a-762b2868ece4)


## Documentation


### Problem Statement
Customers may receive a product that looks different from what they saw online, or that has different features than what was described on the website. 
Some online stores have instances of showing inaccurate product descriptions. This can cause customers to be hesitant to make a purchase which can lead to frustrations and dissatisfaction of purchasing online. 

### Our Solution
The Digital Fashion Store has implemented a size guide that customers can view to confirm their size before completing their purchase.  
The size guide will show how a Medium size is in centimetres, allowing customers to measure themselves and compare their sizes using our size guide.

### User Stories

 - [x] User can click on the Home button on the landing page to display the Home Page.

 - [x] User can see list of products on the Home Page containing the product thumbnail, name, price, a short description, add-to-cart button and a view product button. 

 - [x] User can view  more details on the Product Details of the selected product.

 - [x] User can see the number of items badge update as products are added to cart.

 - [x] When the User clicks on the Checkout button it will redirect them to the login page where they will need to login to continue with the checkout process.

 - [x] User can click on the Shopping Cart button to display the Shopping Cart page containing the name, price, and quantity ordered for each product previously added to the Shopping Cart. 
 - [x] User can see a total purchase amount on the Shopping Cart that is calculated as the sum of the quantities multiplied by the unit price for each product ordered plus the shipping fee.
 - [x] User can click a Checkout button on the Shopping Cart Page to complete the order. User will see the invoice number when the order has been placed.  
 - [x] User can click the Home link on the Shopping Cart Page to return to the Products Page. If the order hasn't been placed yet this will not clear the products that have already been added to the Products Page. 

### Bonus Features

- [x] User can download purchase invoice directly from the site. 

- [x] User can see shipping charges added to the total purchase amount.

- [x] User can see sales taxes added to the total purchase amount.

- [x] The Admin can login and update the inventory on the view products page.
