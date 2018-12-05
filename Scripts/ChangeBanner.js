function getImage()
{

    var images = [
        "Images/dagger.jpg", "Images/witch.jpg", "Images/hat2.jpg"
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