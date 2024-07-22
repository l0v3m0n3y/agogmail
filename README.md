# agogmail
JavaScript library for agogmail.com
# main
```js
async function main(){
    const {agogmail} = require('./agogmail');
    const gmail= new agogmail();
    let req=await gmail.get_email(type)
    console.log(req)
}
main()
```
