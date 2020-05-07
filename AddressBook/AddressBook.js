
$(document).ready(function(){
  onstart();
  $("#Add").click(function(){
    $("#Contact_Display").hide();
    $("#Form_Display").show();
  });
  $("#Submit").click(function(){
    $("#Contact_Display").show(function(){$("left_Display").displayContacts();});
    $("#Form_Display").hide();
  });
});

//var ContactId;
var ListofContacts=[];

function onstart()
{   
$("#Contact_Display").show();
$("#Form_Display").hide();
localStorage.setItem('Contacts', JSON.stringify(ListofContacts));}


class Contact{
  constructor(name,id,address,phoneNumber,selectorId)
  {
    this.Name=name;
    this.SelectorId=selectorId;
    this.Id=id;
    this.Address=address;
    this.PhoneNumber=phoneNumber;
  }
}
// }
function AddContact() 
{
  ListofContacts=getContacts();
  var Contactname=document.getElementById('txt_name');
  var id="contact"+(ListofContacts.length+1);
  var selectorId="#"+id;
  var address=document.getElementById('txt_address');
  var phonenumber=document.getElementById('txt_phonenumber');    
    var NewContact=new Contact(Contactname.value,id,address.value,phonenumber.value,selectorId);
    console.log(NewContact);
    ListofContacts.push(NewContact);
    localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
    alert("Contact added successfully");
     
        //  displayContact(NewContact.Id);
            // $(NewContact.selectorId).on('click',function(){ 
    //             //displayContactdetails(NewContact.Id);
    //         });
}
function displayContacts()
{contacts=getContacts();
  for(var i=0;i<contacts.length;i++)
            {
              document.getElementById().innerHTML = person.name
            }
//var contact= getContact();
//$(contact.SelectorId).text(contact.Name);
//console.log(contact.SelectorId);
}
function GetFormDetails(){}
// function GenerateContactId()
// {}
function getContacts()
{
  ListofContacts=JSON.parse(localStorage.getItem('Contacts') );
  return ListofContacts;  
}
function getContact(ContactId)
 {
   contacts=getContacts();
  for(var i=0;i<contacts.length;i++)
            {
                if(contacts[i].Id == ContactId)
                {
                    return contacts[i];
                }
            }
}

function Update(ContactId) 
{
  var Contact= getContact(ContactId);
  Contact={Name:Contactname.value,Id :id.value,Address:address.value,PhoneNumber:phonenumber.value,};
  ListofContacts.push(Contact);
  localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
}

function Display(ContactId)
{
  var Contact= getContact(ContactId).text;
  
  $("#contact_name").text(contact.name);
  $("#contact_mail").text(contact.mail);
  $("#contact_mobile").text(contact.mobile);
  $("#contact_landline").text(contact.landline);

}
