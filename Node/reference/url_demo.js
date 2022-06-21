const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serielized URL
console.log(myUrl.href);

//Host / Root domain (gives port)
console.log(myUrl.host)

//pathname
console.log(myUrl.pathname)

//Serielized Query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams)

//Add param
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams);

//Loop thru params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

