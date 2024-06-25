
# Fetch Information from a Public API (https://dog.ceo/dog-api/)

## Purpose
The aim of this project is to interact with the Dog CEO API to fetch and display information about various dog breeds. Specifically, the project achieves the following:
1. Displays a list of all available dog breeds.
2. Allows users to view random images of specific breeds and sub-breeds upon selection.


## Project Outcomes
1. Used fetch to display a list containing the available breeds list. *(Optional: when a breed contains a sub-breed, display the sub-breeds as a sub-list of the current element)*.
2. When a user clicks on an item in the displayed breed list, the browser, using fetch, should display a random image of the specified breed. *(Optional: if the sub-breeds are displayed, fetch the specific sub-breed image)*.

By completing this project, I aimed to enhance my skills in working with APIs, handling JSON responses, and dynamically updating the DOM using JavaScript.

## The API Endpoints

### List of all available dog breeds
**URL:** `https://dog.ceo/api/breeds/list/all`
- The response can be parsed to a JSON object with two properties: *message* and *status*.
- The *message* property of the response contains the available breeds **as object properties** (not as an array!).

### Retrieve a random image of a specific breed 
**URL:** `https://dog.ceo/api/breed/{breedName}/images/random`
- The *{breedName}* parameter is the breed name, **lowercased**.
- Example: `https://dog.ceo/api/breed/african/images/random`.
- The response contains a URL of an image of a dog of the specified breed.

### Retrieve a random image of a specific breed and sub-breed
**URL:** `https://dog.ceo/api/breed/{breedName}/{subBreedName}/images/random`
- The *{breedName}* parameter is the breed name, **lowercased**.
- The *{subBreedName}* parameter is the sub-breed name, **lowercased**.
- Example: `https://dog.ceo/api/breed/australian/shepherd/images/random`.
- The response contains a URL of an image of a dog of the specified breed and sub-breed.
