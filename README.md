# Shopping Cart App

A shopping cart application built with React for users to browse products, add them to the cart, and place orders. It features product filtering, sorting, searching, and cart management functionalities. It also includes user authentication, user registration, and the orders listing page.


## Features

+ **LoginPage**:    
  Provides login functionality to view personal cart and order history.  
  + **User object stored in Redux**: Upon login, a **user object** is stored in the global state via Redux to manage the authenticated user's session, i.e., in **UserData** array.
  + **Login state** is maintained while the app is running. Once the user logs in, the user object is available in the global state and **UserIndex** is set to the index of logged in user from the **UserData**
  + Data is stored in `localStorage`.
    + UserData is stored with the key "userData" as string. While getting the data from local storage, it is parsed with **JSON.parse()** to convert back string to the object.
    + userIndex is stored with the key "userIndex".

+ **FetchData**
    + **Used axios get & useEffect** to get the data from **https://fakestoreapi.com/products** and **updated the data in redux state using storeProducts action in Slice** for global state management.

+ **ProductPage**:  
  Displays a list of products with images and categories (e.g., Groceries, Electronics, Clothing).  
   
  + Product data is then **rendered dynamically** on the page, and **users can filter, sort, and search** products by **category, price, and name** respectively.

+ **CartPage**:  
  Allows users to manage their shopping cart (add, update, remove items).  
  + **Added products to Redux** to manage the cart globally so that users can view cart updates across pages.
  + **Update product quantities** using `+` and `-` buttons with the cart state being updated in Redux. 
  + **Remove items** from the cart with a button that dispatches an action to Redux for state management.
  + **Cart grouped by category**, providing a clear view of which products belong to which category.
  + **View cart summary** including details about products and the total price. The summary is **automatically updated** as items are added or removed.

+ **OrderPage**:  
  Displays past orders with the option to view details of each order.  
  + **Orders are stored in Redux** and displayed when the user is logged in, using **useSelector** to get the data from redux state.  
  + Each order includes **order details** like product Images, delivery date, and price.
  + **Orders are displayed in a list**, and users can **click on an order** to see the complete details of the order.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/divami-learning/AshwanthDivami-learning/tree/react/final-assignment
    cd e-cart-module
    ```

2. **Install dependencies**:

    Run the following command to install the necessary dependencies:

    ```bash
    npm i
    npm i axios
    npm i react-router-dom
    npm i react-redux
    npm i @reduxjs/toolkit
    npm i sass
    ```

3. **Run the app**:

    After the installation is complete, you can start the app by running:

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:5173` in your browser.

## Description of Key Folders and Files:

+ **/components**: Contains React components for the Product Card, Cart Card, Order Card, Display Orders, Filter Bar, Nav Bar, Summary Card.
+ **/pages**: Contains React components to display LoginPage, SignUp, FetchData, ProductPage, CartPage, OrderPage.
+ **/reducers**: Redux slice for managing the global state of Product, Cart, Orders, OrderDelivery, UserData Arrays and UserIndex.
+ **/store**: Store that contains the redux state data.
+ **/common**: Contains the Interface.tsx which contain the interfaces used in the project.
+ **/assets**: Contains icons and scss folders, icons has the images used in the project and scss contain mixins that used across the project.

## Author

[Ashwanth Thimmareddy](https://github.com/AshwanthDivami)