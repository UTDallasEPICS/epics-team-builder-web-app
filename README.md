# Setup Guide

1. In this folder run **npm install** to install all needed packages
2. Execute **grunt** in console to run project locally
3. Execute **grunt build** in console when ready to build project

# Structure

The **src** folder has 4 main sections

1. **actions**
   Stores all actions or action types that communicates with the reducer
2. **reducers**
   Holds reducers for each widget when necessary. Index reducer holds the selectors
3. **sass**
   Instead of css this project uses sass. The common folder holds styling for common structures found throughout the whole project. The widgets folder stores widget-specific styling.
4. **widgets**
   Holds all subcomponents found on the webpage.

This project also uses grunt with prettier and eslint in order to help automatically format code and enforce certain coding practices for better consistency. Eslint rules can be changed in the .eslintrc file and prettier rules can be changed in the Gruntfile.js.
