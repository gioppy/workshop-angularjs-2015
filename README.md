# workshop-angularjs-2015
This is a public repository of code examples using durign the workshop Ideare e creare Web Applications, Introduzione ad AngularJS

If you want to test the code, clone this repository and install **nodejs**, **gulp** and **bower**.

Once you have cloned the repository, move to the folder in terminal/shell and run:

```
npn install
bower install
gulp serve
```

The local server running on `localhost:3000` and you can navigate through the examples.

### Note on Firebase
In the `day-2-06.html` you can experiment Firebase interaction. However, the database will be deleted after the end of the workshop. If you want to test this feature, you must sign up to Firebase (free account) and create a new app. After you have create a new database, you must replace the links inside the app:

```
//chage the URL based on your configuration
var host = 'https://wstodo.firebaseio.com/';
```
