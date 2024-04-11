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

var universalFunctions = function() {
    googleAnalyticsSetup();
}
