## Registering the Client

The javascript client and it’s required files can be registered in razor

`CurrentContext.Page.Scripts.RegisterContensisApi();`


## Global Object
Objects for using the client are found on the Global Object:

`Zengenti.Contensis`


## Configuring the client
The default configuration for Client's is set already when the Api is registered on a page. The configuration code is automatically set to reflect the context of the publishing server, ensuring that the correct service root url, project API id and version status (Published or Latest) are set.

This be overridden globally
```js
(function(Zengenti) {
    // set the default configuration for all clients
    Zengenti.Contensis.Client.configure({
        rootUrl: 'http://cms.contensis.com',
        accessToken: 'XXXXXXX',
        projectId: 'myProject',
        language: 'en-GB',
        versionStatus: 'published', // or: 'latest'
        pageSize: 10 // default page size to use when not specified
    });
})(Zengenti);
```

All the configuration fields are optional and the default will be used if not overridden

## Creating the client
All operations for the API hang off the ContensisClient type, which is created using the static method Zengenti.Contensis.Client.Create(). The Create() method allows parts of the Default configuration to be partially or completely overridden for that instance.

```js
(function(Zengenti) {
    // Create with default configuration
    var client1 = Zengenti.Contensis.Client.create();

    // Create a client with specific configuration
    var client2 = Zengenti.Contensis.Client.create({
        rootUrl: 'http://cms.contensis.com',
        projectId: 'myProject',
        language: 'en-GB',
        versionStatus: 'published',
        pageSize: 10
    });
})(Zengenti);
```
