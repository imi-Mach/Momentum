
# Momentum AG Grid Demo


### [Click here for Demo](https://momentum-ag-grid.herokuapp.com/)&nbsp;&nbsp;&nbsp;&nbsp;[Click here for github project](https://github.com/imi-Mach/Momentum)

This project combines material elements to create a header, side navigation, and AG Grid single page web application.


# How it works

The main components used were:
* [AG Grid (Angular)](https://www.ag-grid.com/angular-data-grid/) : A responsive friendly grid UI/UX tool for expressing data in robust perspetives.
* [Material Angular](https://material.angular.io/components/categories) : Backbone of widgets and UI/UX styling.


# Getting started

Make sure you have the [Angular CLI](https://github.com/angular/angular-cli#installation) installed globally. 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Alternatively, you can run `ng build` followed by `npm start` to run a node on `http://localhost:8080/`. This is for deploying to Heroku, and is not recommended for development.

### Building the project
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

**General functionality:**

- User can interact with side navigation for web section viewing. Hovering over and selecting a section will highlight the section preview (works for both expanded and contracted views).
- Material accordion allows for several material expansion panels for additional content.
- AG Grid is used to filter, pin, and row select columns (via the custom column menu).