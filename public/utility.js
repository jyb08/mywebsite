let injectNavBar = () => {


    let navbar = `
        <nav class="uk-navbar-container uk-margin" uk-navbar>
                    <div class="uk-navbar-center">
                        <a class="uk-navbar-item uk-logo" href="./me.html">Me</a>
                        <a class="uk-navbar-item uk-logo" href="./chat.html">Chat</a>

                        <a class="uk-navbar-item uk-logo" href="./index.html">
                        Logo
                        </a>

                        <a class="uk-navbar-item uk-logo" href="./activities.html">Activities</a>
                            
                        <a class="uk-navbar-item uk-logo" href="./escaperoomgame.html">Escape Room</a>

                        <a class="uk-navbar-item uk-logo" href="./becomethekinggame.html">Become the King</a>
                
                    </div>
                </nav>
    `;


    document.getElementById("navbar").innerHTML = navbar;
}


document.addEventListener('DOMContentLoaded', () => {
    injectNavBar();
})



