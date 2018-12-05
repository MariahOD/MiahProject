function getImage()
{

    var images = [
        "Images/dagger.jpg", "Images/witch.jpg", "Images/hat2.jpg"
    ];
    // LINKS TO PUBLIC DOMAIN / CREATIVE COMMONS IMAGE SOURCES
    < !–– https://www.wpclipart.com/famous/writer/Shakespheare/Shakespeare_lineart.png.html ––>

    var index = Math.floor(Math.random() * images.length);

    var image = images[index];
    return image;
}

function setEventListeners()
{
    // SET EVENT LISTENERS FOR BANNER
    var tbl = document.getElementsByClassName('banner')[0];

    tbl.addEventListener("pointerenter", function()
    {
        tbl.setAttribute("background", "Images/shakespeare.png")
    });

    tbl.addEventListener("pointerleave", function () {
        var image = getImage();
        tbl.setAttribute("background", image)
    });

    // SET EVENT LISTENER FOR DROPDOWNS IN SIDE MENU
    var dropdown = document.getElementsByClassName("dropdown-btn");

    for (var i = 0; i < dropdown.length; i++)
    {
        dropdown[i].addEventListener("click", function ()
        {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;

            if (dropdownContent.style.display === "block")
            {
                dropdownContent.style.display = "none";
            }
            else
            {
                dropdownContent.style.display = "block";
            }
        });
    }
}

function hideBanner() {
    var tbl = document.getElementsByClassName('banner')[0];

    if (tbl.getAttribute("height") == "0") {
        tbl.setAttribute("height", "200");
        tbl.innerHTML = "<h1>MACBETH</h1>";
    }
    else {
        tbl.setAttribute("height", "0");
        tbl.innerHTML = "";
    }

}