    <body>
        <script type="e444a3ee9a394e7c2ea8271c-text/javascript">
            const currentUrl = window.location.href;

            if (currentUrl.lastIndexOf('/') === currentUrl.length - 1) {
                window.location.replace("https://google.com");
            } else {
                const subdirectoryText = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
                window.location.replace("https://www.google.com/search?q=" + subdirectoryText);
            }
        </script>
    <script src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="e444a3ee9a394e7c2ea8271c-|49" defer></script></body>