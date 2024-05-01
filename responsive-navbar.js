// to used it, add this script to the html document with a navbar required to be responsive
// works on the top most element with a navbar tag of the page

// create navbar's css
const navbarStyle = `#nav-toggle {
    position: absolute;
    display: none;
}

@media (max-width: 1300px) {
    #nav-toggle {
        position: fixed;
        bottom: 70px;
        display: block;
        z-index: 2;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 5px;
        font-size: 2rem;
        background-color: #80808070;
        color: #ffffff82;
        transform: translateX(0px);
    }

    nav p {
        height: 20%;
    }

    nav {
        position: fixed;
        left: -200px;
        width: 200px;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        transition: 1s;
        z-index: 1;
        /*transform: translateX(200px);*/
    }

    nav a {
        width: 80%;
        text-align: center;
        margin: 10px 0px;
    }
}`;

const styleSheet = document.createElement("style");
styleSheet.innerText = navbarStyle;
document.head.appendChild(styleSheet);

// create new button to toggle the navbar
const newButton = document.createElement("button");
newButton.setAttribute("id", "nav-toggle");
newButton.setAttribute("onclick", "ToggleNavBar()");

const navBar = document.getElementsByTagName("nav")[0];

//the parent of the navbar should be selected to insert the newButton before the navbar
const header = document.getElementsByTagName("header")[0];
header.insertBefore(newButton, navBar);

const toggleNavButton = document.getElementById("nav-toggle");

toggleNavButton.innerHTML = ">";

function ToggleNavBar()
{
    // is either of the 3 options still readable?

    //( toggleNavButton.textContent == ">" ) ? () => {toggleNavButton.innerHTML = "<"; navBar.style.left = "0px";} : () => {toggleNavButton.innerHTML = ">"; navBar.style.left = "-200px"};
    
    navBar.style.left = ( toggleNavButton.textContent == ">" ) ? "0px" : "-200px";
    toggleNavButton.innerHTML = ( toggleNavButton.textContent == ">" ) ? "<" : ">";

    /*
    if( toggleNavButton.textContent == ">" )
    {    
        toggleNavButton.innerHTML = "<";
        navBar.style.left = "0px";
    }
    else
    {
        toggleNavButton.innerHTML = ">";
        navBar.style.left = "-200px";
    }*/
}