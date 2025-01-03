# Age Counter App

## Project Description
This **Age Counter App** is a simple React project built as a **training exercise** to learn the concepts of **Redux**. The primary goal of this project is to understand how Redux works for state management in a React application.

The app allows the user to increment or decrement their age by 1, with actions handled through dedicated **action creators** for better encapsulation. The project demonstrates how to connect React components with the Redux store, dispatch actions using functions, and manage state changes predictably.

The project highlights the following key Redux concepts:
- **Store**: A central place to store the application's state.
- **Actions**: Encapsulated functions that send data to the Redux store to modify the state.
- **Reducers**: Functions that specify how the application's state changes in response to dispatched actions.

## Features

- **Increase Age**: Clicking the "Add Year" button increments the user's age by 1.  
   ![add-icon](https://img.icons8.com/color/50/000000/plus.png)  
- **Decrease Age**: Clicking the "Delete Year" button decreases the user's age by 1.  
   ![minus-icon](https://img.icons8.com/color/50/000000/minus.png)  
- **Action Creators**: Replaced direct action objects with reusable functions (`AddYearAction` and `DeleteYearAction`) to simplify action dispatching.
- **Redux Integration**: Age data is managed using Redux, showcasing how state is updated and accessed across components.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, used to create the app's components.  
   ![react-icon](https://img.icons8.com/color/50/000000/react.png)  
- **Redux**: A state management library for JavaScript apps, used here to manage the age state globally across the app.  
   ![redux-icon](https://img.icons8.com/color/50/000000/redux.png)  
- **CSS Styling**: Custom styles applied to buttons and the age display to enhance the user interface.

## Learning Goals

This project is primarily focused on learning **Redux**, and here are the key takeaways:

1. **Setting up Redux**: Creating a Redux store, defining actions, and writing reducers to manage state changes.
2. **Encapsulation with Action Creators**: Using functions (`AddYearAction` and `DeleteYearAction`) to encapsulate action creation, promoting cleaner and more modular code.
3. **Dispatching Actions**: Understanding how encapsulated actions are dispatched to the store and how the state is updated in response.
4. **Connecting React Components**: Using `useSelector` and `useDispatch` hooks to connect React components to the Redux store, allowing them to access and update the state.
5. **State Management**: Managing and updating the state in a predictable way using Redux, which makes it easier to scale and maintain larger applications.

## Getting Started

To get started with the project, follow these steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/age-counter-app.git
    ```

2. Navigate to the project folder:

    ```bash
    cd age-counter-app
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

    The app will be available at [http://localhost:3000](http://localhost:3000).

## How to Use

1. Once the app is running, you'll see the current age displayed in the center of the screen.
2. You can increase your age by clicking the "Add Year" button.  
   ![add-year-icon](https://img.icons8.com/color/50/000000/plus-2-math.png)
3. You can decrease your age by clicking the "Delete Year" button.  
   ![delete-year-icon](https://img.icons8.com/color/50/000000/minus-2-math.png

