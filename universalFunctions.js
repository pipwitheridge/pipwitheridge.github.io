var googleAnalyticsSetup = function() {
    var userTagScript = document.createElement('script');
        userTagScript.text = `
        const thisTime = new Date().getTime();
        if(window.localStorage.getItem("userTag")===null) {
            window.localStorage.setItem("userTag", thisTime)
        }
        `;

        // Create the script element for Google Tag Manager
        var gtmScript = document.createElement('script');
        gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=G-7XD03E57PD";
        gtmScript.async = true;

      
        // Create the script element for configuring Google Analytics
        var gaScript = document.createElement('script');
        gaScript.text = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7XD03E57PD', {
            'thisUser': ${window.localStorage.getItem("userTag")}
        });
        `;

        // append items
        document.head.appendChild(userTagScript);
        document.head.appendChild(gtmScript);
        document.head.appendChild(gaScript);
}

var generateNavbar = function() {

    var menuModal = document.createElement('div');
    menuModal.setAttribute('id', 'menuModal');
    menuModal.innerHTML =   `
        <div id="menuCloseButton"><i class="fa-solid fa-square-xmark"></i></div>
        <a href="/about.html" class="menuItem"><div class="menuItemDiv">About</div></a>
        <a href="/blog.html" class="menuItem"><div class="menuItemDiv">Blog</div></a>
        <a href="/tools.html" class="menuItem"><div class="menuItemDiv">Tools</div></a>
    `
    document.body.appendChild(menuModal)

    document.getElementById("menuModal").display = "none";

    const handleMenuClick = function() {
        document.getElementById("menuModal").style.display = "";
        document.getElementById("menuModal").style.transition = "top 0.2s";
        document.getElementsByClassName("mainContainer")[0].style.transition = "opacity 0.1s";
        document.getElementById("menuModal").style.top = "0px";
        document.getElementsByClassName("mainContainer")[0].style.opacity = "10%";
    }

    const handleMenuClose = function() {
        document.getElementsByClassName("mainContainer")[0].style.opacity = "";
        document.getElementById("menuModal").style.transition = "top 0.2s";
        document.getElementById("menuModal").style.top = "-500px"
    }

    document.getElementById('homeRow1').innerHTML = `
        <div id="profileName"><a href="/"><span id="pip">Pip</span>Witheridge</a></div>
        <div id="navIcon"><i class="fa-solid fa-bars"></i></div>
    `

    document.getElementById("navIcon").addEventListener('click', function() {handleMenuClick()})
    document.getElementById("menuCloseButton").addEventListener('click', function() {handleMenuClose()})

}

var universalFunctions = function() {
    generateNavbar();
    googleAnalyticsSetup();
}
