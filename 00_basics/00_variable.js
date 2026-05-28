const Id=178
let mail="notsocool@xyz.com"
var pswrd="owmygawd" //doesn't know block scopes and functional scopes
city="Zurich" //also bad practice
let state;
//Id=171 ERROR can't modify constant
mail="verycool@xyz.com"
pswrd="omg"
city="Kolkata"
console.log(Id)
// console.log(mail)
// console.log(pswrd)
// console.log(city)
console.table([mail,pswrd,city,state])