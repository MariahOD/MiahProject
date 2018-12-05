function getImage()
{

    var images = [
        "Images/dagger.jpg", "Images/witch.jpg", "Images/hat2.jpg", "<a href="https://img.clipartxtras.com/594acaa07f3ce948a317b7c873bdd401_download-raven-free-png-photo-images-and-clipart-freepngimg-raven-clipart-png_370-322.png"</a>"
    ];

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