# Ezpz

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Development server

> Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

> Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

> Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

> Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

> Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deploying into Firebase Hosting
> After you build your project using the `ng build`, you need to login into your firebase console with `firebase login` and then select your project to use for this project with `firebase use <project_id>` and after that run `firebase deploy` and wait for the command to be complete.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project Structures
    .
    ├── dist                       # Compiled files (alternatively `build`)
    ├── src                        # Source files (alternatively `lib` or `app`)
      ├── app                      # App source folder, all of your website code view components and controllers
        ├── admin                  # Admin folder is a container to put your admin view components and controllers for admin dashboard (currently doesn't have any functionality).
        ├── client                 # Client folder is a container to put your core view and controller functions that needed to be shown on the client app.
          ├── about                # This is a place to write your website about page
          ├── our-product          # This is a place to write your website products pages
          ├── products             # This is a place to write your website Home pages
          ├── skinsight            # This is a place to write your website skin sight pages (currently not being used in any pages and will not be shown on the website)        
      ├── assets                   # Assets source folder, you can put an assets you need in this folder
      ├── environments             # Environments source folder, Setup your environment configuration here
    ├── firebase.json              # Firebase config file for utilizing all firebase tools and Hosting
    ├── tailwind.config.json       # Tailwind config file for styling with tailwind
    ├── LICENSE
    └── README.md

> Use short lowercase names at least for the top-level files and folders except
> `LICENSE`, `README.md`
