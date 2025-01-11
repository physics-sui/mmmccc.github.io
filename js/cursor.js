window.onload = function () {

    let imgdog = [
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto"
    ];
    let imgpickaxe = [
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto",
        "url(/img/cursor/favicon.ico), auto"
    ];
    let randomdog = Math.floor((Math.random() * imgdog.length));
    let randompickaxe = Math.floor((Math.random() * imgpickaxe.length));

    $("body").css("cursor", imgdog[randomdog]);
    $('a,summary,button').hover(
        function () {
            this.style.cursor = imgpickaxe[randompickaxe];
        }
    );


}