let injectNavBar = () => {


    let navbar = `
        <nav class="uk-navbar-container uk-margin" uk-navbar>
                    <div class="uk-navbar-center">
                        <a class="uk-navbar-item uk-logo" href="./me.html">Me</a>
                        <a class="uk-navbar-item uk-logo" href="./chat.html">Chat</a>

                        <a class="uk-navbar-item uk-logo" href="./index.html">
                            <img src="../images/pngegg (18).png" alt="logo" width="100" height="100">
                        </a>

                        <a class="uk-navbar-item uk-logo" href="./activities.html">Activities</a>
                            
                        <a class="uk-navbar-item uk-logo" href="./escaperoomgame.html">Escape Room</a>
                
                    </div>
                </nav>
    `;


    document.getElementById("navbar").innerHTML = navbar;
}


document.addEventListener('DOMContentLoaded', () => {
    injectNavBar();
})



