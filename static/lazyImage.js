window.addEventListener('load', function () {
    document.querySelectorAll('img.lazy').forEach( image => {
        if ( ! image.hasAttribute("data-src")) {
            return;
        }
        const original = image.getAttribute("data-src");
        fetch(original)
            .then(function (response) {
                if (response && response.status == 200){
                    image.setAttribute("src", original)
                }
            })
            .catch(function(err) {
                console.error('lazy error: ', err);
            });
    }); //image
}); //query