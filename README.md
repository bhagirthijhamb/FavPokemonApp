# My Favourite Pokemon App

## Introduction to this Application

The app gathers basic user data and favourite pokemon name. This information can be used to send user's favourite pokemon soft toy to their address if the user wins a lottery.

The app has a multi step form with a step progress bar. The formik library is utilized for collecting user inputs.
First step collects user details that includes first name, last name, phone number, zipcode and address.

On step two, user can select their favourite pokemon from a list fetched from PokeAPI. The user can also filter the pokemons by type or search for a specific pokemon. The user information is then validated with formik and yup.
More information about a pokemon can be got by clicking 'INFO' button on pokemon card.

Pagination feature is used for separating pokemon cards into different pages. This saves the user from a lot of scrolling and lets the pokemon data load from the api happen away from user's view.

On step three, the user is provided with all the information entered in the previous steps for review and confirmation before submitting. The user can go back to the previous step and makes changes if required.

The user inputs are stored as they progress through the flow. The formik-persist library is used to persist the input/selection even after the user refreshes the page.
On submiting the form the user gets a confirmation that their submission was saved successfully.

Basic unit tests are added for the landing page of the app.
Type checking of the props passed to a component is done with prop-types library.

## Deployed App

Click [here](https://bhagirthijhamb.github.io/FavPokemonApp/) to visit deployed app.

## Libraries

formik
formik-material-ui
formik-persist
yup
material-ui
lodash
prop-types

## Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies.

### `npm run start`

Runs the app in the development mode.

### `npm run test`

Launches the test runner in the interactive watch mode.
