let data = [
    {
        id: 0,
        category: "famous",
        title: "Everest",
        tags: "Ice, Igneous Granite",
        description: "With the title of 'highest mountain in the world', Everest provides a breath taking sight for those who venture to it's peak",
        imageUrl: "images/Famous/everest2.jpeg",
        link: "index.html"
    },
    {
        id: 1,
        category: "famous",
        title: "Matterhorn",
        tags: "Rocky, Gneisses",
        description: "You might have seem this one before if you have looked closely to your Toblerone packs",
        imageUrl: "images/Famous/matterhorn.jpg",
        link: "index.html"
    },
    {
        id: 2,
        category: "famous",
        title: "Fuji",
        tags: "Ice, Basalt, Volcano",
        description: "Mount Fuji is memorable has being known for generations but it's future can be as unpredictable as it's nature",
        imageUrl: "images/Famous/fuji.jpg",
        link: "index.html"
    },
    {
        id: 3,
        category: "famous",
        title: "Andes",
        tags: "Ruins, Igneous",
        description: "Mostly known for the civilization who dared to build on the top of the mountain",
        imageUrl: "images/Famous/incas.jpeg",
        link: "index.html"
    }
];

let fullData;

function createData()
{
    let dataArray = data;
    const initialLength = dataArray.length
    const numberOfImagesInSeparators = 3;
    const folders = ["Famous", "Vegetation", "Desert", "Ice", "Locations"];
    for (let i = 1; i < folders.length; i++) {
        for (let index = 0; index < numberOfImagesInSeparators; index++)
        {
            let currentFolder = folders[i];
            dataArray[dataArray.length] = {
                id: dataArray.length + initialLength,
                category: currentFolder.toLowerCase(),
                title: "Mountain" + " " + currentFolder,
                tags: currentFolder,
                description: "lots of " + currentFolder.toLowerCase(),
                imageUrl: "images/" + currentFolder + "/" + index + ".jpeg",
                link: "index.html"
            }
        }
    }
    fullData = dataArray
    return dataArray
}

function readData(dataInput)
{
    dataInput.map((item) => CreateCard(item))
}

readData(createData());
