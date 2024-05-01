function CreateCardObject(imageUrl, newTitle, tagsList, newDescription, externalLink)
{
    if (externalLink == "")
    {
        externalLink = "View.html";
    }

    let card = {
        image: imageUrl,
        title: newTitle,
        tags: tagsList,
        description: newDescription,
        link: externalLink
    }

    return card
}

function GenerateCardComponent(newCard)
{
    let newCardComponent = 
        <div class='card'>
            <img src={newCard.image}></img>
            <div class='card-content'>
                <h3>{newCard.title}</h3>
                <ul>{newCard.tags}</ul>
                <p>{newCard.description}</p>
                <a href={newCard.link} class='button'>See Page</a>
            </div>
        </div>

    return newCardComponent
}

function AddCardToContainer(newCard, container = 0)
{
    document.body.getElementsByClassName("card-container")[container].appendChild(newCard);
}