(function(){
    var urlRoot = "/contensis/api/delivery/js/"
    var version = 'beta'

    var versions = [];
    var select;
    var config;

    var getConfig = function() {
        return fetch("/config.json").then(function(response) {
            return response.json();
        });
    };

    var renderOptions = function() {
        var pageVersion = getPageVersion();

        for(var i = select.options.length - 1 ; i >= 0 ; i--)
        {
            select.remove(i);
        }

        // Add defaults
        addSelectOption(config.latestVersion + ' (latest)', config.latestVersion, pageVersion === config.latestVersion);
        
        var ordered = versions.sort(function(a, b){return b-a});
        for (var index = 0; index < ordered.length; index++) {
            var element = ordered[index];
            addSelectOption(element, element, pageVersion === element);
        }

        addSelectOption('Beta', 'beta', pageVersion === 'beta');
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

    var getPageVersion = function() {
        var pageVersion = version;
        var url = window.location.pathname.replace(urlRoot, '');

        var parts = url.split('/');
        if (parts.length > 1 && parts[0].toLowerCase() === 'v') {
            pageVersion = parts[1];
        }

        return pageVersion;
    };

    var init = function() {
        select = null;
        versions = [];

        if (config == null) {
            getConfig().then(function(c){
                config = c;
                createSelect();
            });
        } else {
            createSelect();
        }
    };

    gitbook.events.bind("page.change", init);
})();