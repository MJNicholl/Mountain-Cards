function CreateCardObject(newTitle, newCategory, tagsList, newDescription, imageUrl, externalLink)
{
    if (externalLink == "")
    {
        externalLink = "View.html";
    }

    const card = {
        title: newTitle,
        category: newCategory,
        tags: tagsList,
        description: newDescription,
        image: imageUrl,
        link: externalLink
    }

    return card
}

function GenerateCardComponent(newCard)
{
    //console.log("card received: ", newCard)

    // this will require babel to transcript the JSX
    /*
    return  (
        <div class='card'>
            <img src={newCard.image}></img>
            <div class='card-content'>
                <h3>{newCard.title}</h3>
                <ul>{newCard.tags}</ul>
                <p>{newCard.description}</p>
                <a href={newCard.link} class='button'>See Page</a>
            </div>
        </div>
    )*/

    // create a div element with a class attribute set to "card"
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class", "card")

    const newImg = document.createElement("img")
    newImg.setAttribute("src", newCard.image)
    newDiv.appendChild(newImg)

    const newCardContent = document.createElement("div")
    newCardContent.setAttribute("class", "card-content")

    const newTitle = document.createElement("h3")
    newTitle.textContent = newCard.title
    newCardContent.appendChild(newTitle)

    const newTags = document.createElement("ul")
    newTags.textContent = newCard.tags
    newCardContent.appendChild(newTags)

    const newDescription = document.createElement("p")
    newDescription.textContent = newCard.description
    newCardContent.appendChild(newDescription)

    const newLink = document.createElement("a")
    newLink.setAttribute("href", newCard.link)
    newLink.setAttribute("class", "button")
    newLink.textContent = "Visit Page"
    newCardContent.appendChild(newLink)

    newDiv.appendChild(newCardContent)

    return newDiv
}

function AddCardToContainer(newCard, separator = "Locations")
{
    const currentSeparator = document.getElementById(separator);
    const currentContainer = currentSeparator.getElementsByClassName("card-container")[0];
    currentContainer.appendChild(newCard);
}

function CreateCard(newCardData)
{
    const myCard = CreateCardObject(newCardData.title, newCardData.category, newCardData.tags, newCardData.description, newCardData.imageUrl, newCardData.link);
    const myCardComponent = GenerateCardComponent(myCard);
    AddCardToContainer(myCardComponent, newCardData.category);
}