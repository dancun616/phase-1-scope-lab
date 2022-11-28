// Write your solution in this file!
var customerName='bob';
const leastFavoriteCustomer= 'Jakes';
function upperCaseCustomerName() {
    customerName= (customerName.toUpperCase());
    return(customerName);
}
function setBestCustomer() {
    bestCustomer= "not bob";
}
console.log(setBestCustomer);
function overwriteBestCustomer(awesomeCustomer) {
    bestCustomer= awesomeCustomer;
}
console.log(overwriteBestCustomer());
function changeLeastFavoriteCustomer() {
    return(leastFavoriteCustomer='Gad');
}
console.log(changeLeastFavoriteCustomer());
console.log(leastFavoriteCustomer);