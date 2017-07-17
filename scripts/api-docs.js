(function(){
    var urlRoot = "/contensis/api/delivery/js/"
    var version = 'beta'

    var cookieName = 'api_docs_version';
    var versions = [];
    var select;
    var config;

    var getConfig = function() {
        var configUrl;
        if (window.location.pathname.indexOf('localhost') >= 0) {
            configUrl = "/config.json";
        } else {
            configUrl = urlRoot + 'config.json';
        }

        return fetch(configUrl).then(function(response) {
            return response.json();
        });
    };

    var renderOptions = function() {
        var selectedVersion = getCookie(cookieName);
        if (selectedVersion === '') {
            selectedVersion = version;
        }

        for(var i = select.options.length - 1 ; i >= 0 ; i--)
        {
            select.remove(i);
        }

        // Add defaults
        addSelectOption('Latest (' + config.latestVersion + ')', config.latestVersion, selectedVersion === config.latestVersion);
        addSelectOption('Beta', 'beta', selectedVersion === 'beta');
        
        var ordered = versions.sort(function(a, b){return b-a});
        for (var index = 0; index < ordered.length; index++) {
            var element = ordered[index];
            
            addSelectOption(element, element, selectedVersion === element);
        }
    };

    var addSelectOption = function(text, value, selected) {
        var option = document.createElement("option");
        option.setAttribute("value", value);
        option.innerText = text;
        if(selected) {
            option.setAttribute("selected", "selected");
        }
        select.appendChild(option);
    };

    var addVersion = function(version) {
        versions.push(version);
        renderOptions();
    };

    var discoverVersions = function(config) {
        config.previousVersions.forEach(function(version) {
            checkVersionExists(version).then(function(resp) {
                if (resp) {
                    addVersion(version);
                }
            }).catch(function() {
                console.log('Version does not exist: ' + version);
            });
        }, this);
    };

    var checkVersionExists = function(version) {
        var options = {
            method: 'HEAD',
            mode: 'no-cors'
        }
        return fetch(getPageVersionUrl(version), options).then(function(response){
            return response.ok;
        }).catch(function(){
            console.log('Version does not exist: ' + version);
            return false;
        })
    };

    var getPageVersionUrl = function(version) {
        var url = window.location.pathname.replace(urlRoot, '');

        var parts = url.split('/');
        if (parts[0] === 'v') {
            parts.shift();
            parts.shift();
            url = parts.join('/');
        }

        url = urlRoot + 'v/' + version + '/' +  url;
        console.log(url);
        return url;
    };

    var navigateToVersion = function(version) {
        if (!config) {
            return;
        }

        setCookie(cookieName, version);
        console.log(urlRoot);
        window.location.href = getPageVersionUrl(version);
    };

    var onSelectChange = function(e) {
        navigateToVersion(e.target.value);
    };

    var createSelect = function() {
        var header = document.getElementsByClassName("book-header")[0];
        header.getElementsByTagName("h1")[0].remove();

        var div = document.createElement("div");
        select = document.createElement("select");
        select.setAttribute("id", "soflow");
        select.addEventListener('change', onSelectChange);

        div.appendChild(select);
        div.setAttribute("class", "version-select pull-right");

        header.appendChild(div);

        renderOptions();
        discoverVersions(config);
    };

    var setCookie = function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";path=/";
    };

    var getCookie = function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var ensureVersion = function() {
        var storedVersion = getCookie(cookieName);
        if (storedVersion === "") {
            console.log("none");
            return;
        }

        if (window.location.pathname.indexOf(storedVersion) < 0) {
            console.log("Should navigate to " + storedVersion);
            //navigateToVersion(storedVersion);
        }
    };


    var init = function() {
        select = null;
        versions = [];

        //determineUrlRoot();

        if (config == null) {
            getConfig().then(function(c){
                config = c;
                ensureVersion();
                createSelect();
            });
        } else {
            ensureVersion();
            createSelect();
        }
    };

    gitbook.events.bind("page.change", init);
})();