console.log(`js loaded`);

const dropDown = document.querySelector(`#breeds-dropdown`);

/*--------------- CREATE ASYNC FUNCTION FOR RETRIEVING BREED LIST OBJECT -------------------------- */
async function getBreedList() {
    const url = `https://dog.ceo/api/breeds/list/all`;
    const response = await fetch(url);
    const allBreedsJSON = await response.json();
  
    return new Promise((resolve, reject) => {
        if(response.status === 200){
            resolve(allBreedsJSON);
        }
        else {
            reject('Fetch breeds list failed');
        }
    });
}

getBreedList()
.then(allBreedsJSON => createDropDown(allBreedsJSON.message))
.catch(errorMsg => console.error(errorMsg));

/*---------------CREATE DROP-DOWN LIST ------------------------------------------------------- */
function createDropDown(allBreeds) {

  const select = document.createElement("option");
  select.textContent = "Select a category";
  dropDown.append(select);

  for (const breedElem in allBreeds) {
    if (allBreeds[breedElem].length > 0) {
      const group = document.createElement("optgroup");
      group.label = `${capitalize(breedElem)}`;

      allBreeds[breedElem].forEach((elem) => {
        const subBreed = document.createElement("option");
        subBreed.textContent = `${capitalize(breedElem)} - ${capitalize(elem)}`;
        group.append(subBreed);
      });

      dropDown.append(group);
    } 
    else {
      const mainBreed = document.createElement("option");
      mainBreed.textContent = `${capitalize(breedElem)}`;
      dropDown.append(mainBreed);
    }
  }
}

/*------------------------------------CREATE EVENT LISTENER & CATCH ARGUMENTS FOR RETRIEVING PHOTOS----------------------- */
dropDown.addEventListener('change',() => {
    const selectedOption = dropDown
      .querySelector("option:checked")
      .textContent.split("-");

    if (selectedOption[0] !== "Select a category") {
      const mainBreed = selectedOption[0].trim().toLowerCase();
      const subBreed = selectedOption[1] ? selectedOption[1].trim().toLowerCase():'';

    getBreedImg(mainBreed,subBreed)
    .then(dogPic => displayImg(dogPic))
    .catch(errorMsg => console.error(errorMsg))
    }

})

/*------------------------------------CREATE ASYNC FUNCTION FOR RETRIEVING IMG URL---------------------------------- */
async function getBreedImg(mainBreed,subBreed) {

    let url = subBreed ? `https://dog.ceo/api/breed/${mainBreed}/${subBreed}/images/random` : `https://dog.ceo/api/breed/${mainBreed}/images/random`

    const response = await fetch(url);
    const breedImgJSON = await response.json()
    
    return new Promise((resolve,reject) => {
        if (response.status === 200) {
            resolve(breedImgJSON)
        }
        else {
            reject('Dog breed image not found')
        }
    })
}

/*------------------------------------------ DISPLAY IMAGES IN UI ---------------------------------------------------- */
function displayImg(dogPic) {
  const imagesContainer = document.querySelector("#images-container");
  imagesContainer.textContent = "";

  const imgElement = document.createElement("img");
  imgElement.src = dogPic.message;
  imagesContainer.append(imgElement);
}

/*------------------------------------ CAPITALIZE 1ST LETTER OF TARGETED WORD -------------------------------------- */
function capitalize(word) {
  let newWord = word[0].toUpperCase() + word.slice(1);
  return newWord;
}