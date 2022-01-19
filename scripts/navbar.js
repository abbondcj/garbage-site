// create navbar object to be displayed as html on page


export const navbar = () => {
    let navInsert = document.getElementById("nav")
    navInsert.innerHTML = `
        <nav class="navbar navbar-expand-sm bg-transparent">
            <a class="navbar-brand" href="./index.html"><img src="./images/trashcan.png"></a>
            <button class="navbar-toggler custom-toggler" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="myNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="./index.html">Chris</a></li>
                    <li class="nav-item"><a class="nav-link" href="./projects.html">Emily</a></li>
                    <li class="nav-item"><a class="nav-link" href="./batmanrobin.html">Kara</a></li>
                    <li class="nav-item"><a class="nav-link" href="./contact.html">Sarah<a/></li>
                </ul>
            </div>
        </nav>`
};








