window.addEventListener('popstate', function(event) {
        if (window.location.hash) {
            var hash = window.location.hash;
            alert(hash);
            switch (hash) {
                case "#home":
                    loadHome();
                    break;
                case "#blog":
                    loadBlog();
                    break;
                case "#games":
                    loadGames();
                    break;
                case "#about":
                    loadAbout();
                    break;
                default:
                    load()
            }
        }
    });

function loadHome() {
    $('#container').load("home.html");
}

function loadBlog() {
    $('#container').load("blog.html");
}

function loadGames() {
    $('#container').load("games.html");
}

function loadAbout() {
    $('#container').load("about.html");
}
