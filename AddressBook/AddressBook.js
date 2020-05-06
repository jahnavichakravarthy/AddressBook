//buttons and their actions
//remove
//
//   function Delete() {
 // $(document).ready(function() {}
  //   $(window).unload(saveSettings);
  //   loadSettings();//Name,Id,Address,PhoneNumber
// });


  

//let addressBook = {//   }
///forms for detilas to be done
//
//var index=0;
// var ContactName=document.getElementById("txt_name");
// var id=document.getElementById("txt_id");
// var address=document.getElementById("txt_address");
// var phonenumber=document.getElementById("txt_phonenumber");

 
  
//  function AddContact()
// {
  
// var Contact={ Name:ContactName.value,Id :id.value,Address:address.value,PhoneNumber:value};
// ListofContacts.push(Contact);
// localStorage.setItem('Contact', JSON.stringify(Contact));
// //index++;localStorage.setItem('ListofContacts', JSON.stringify(ListofContacts));
// }
$(document).ready(function(){
  onstart();
});
var ContactId;
var ListofContacts=[];
var Contactname=document.getElementById('txt_name');
var id=document.getElementById('txt_id');
var address=document.getElementById('txt_address');
var phonenumber=document.getElementById('txt_phonenumber');
function onstart()
{
    localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
}
function AddContact() 
{
    ListofContacts=JSON.parse(localStorage.getItem('Contacts') );  
    var Contact={Name:Contactname.value,Id :id.value,Address:address.value,PhoneNumber:phonenumber.value,};
    ListofContacts.push(Contact);
    localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
}
