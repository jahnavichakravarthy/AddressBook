
$(document).ready(function()
{
  onStart();
  $("#add").click(function()
    {
      $("#home-page").hide();
      $("#form-display").show();
      $("#update-form").hide();
      $("#submit").show();
      $("#back").show();
      $(".contact-details").hide();  
     
    });
  $("#submit").click(function()
    {
     mainPage();
    });
    $("#update-form").click(function()
    {
     mainPage();
    });

});




function onStart()
{ 
  var listOfContacts=[];//is required for intialaztion
  $(".contact-details").hide();  
  $("#home-page").show();
  $("#form-display").hide();
  localStorage.setItem('Contacts', JSON.stringify(listOfContacts));
}

class Contact {
  constructor(name, id, address, phoneNumber) {
    this.Name = name;
     this.Id = id;
    this.Address = address;
    this.PhoneNumber = phoneNumber;
  }
}
function mainPage() {
  $("#home-page").show();
  $("#form-display").hide();
  displayContacts();
}

var selectedContactId;
function addContact() 
{
  listOfContacts=getContacts();
  var contactName=document.getElementById('txt-name');
  var id="contact"+(listOfContacts.length+1);
  var address=document.getElementById('txt-address');
  var phoneNumber=document.getElementById('txt-phonenumber');    
  var createdContact=new Contact(contactName.value,id,address.value,phoneNumber.value);
   console.log(createdContact);
     listOfContacts.push(createdContact);
   localStorage.setItem('Contacts', JSON.stringify(listOfContacts));
   reset();
   alert("Contact added successfully");
 
}

function reset()
{
document.getElementById("txt-name").value = "";
document.getElementById("txt-address").value = "";
document.getElementById("txt-phonenumber").value = "";
}
function displayContacts()
{
  var contacts=getContacts();
  if(contacts.length!=0)
    {
      $(".show-contacts").empty();
      $("#no-contacts").hide();
      for(var i=0;i<contacts.length;i++)
         {               
          var display="<div id=\""+contacts[i].Id+"\"";
          display+="onclick=\"displayData(id);\"";
          display+="class=\"contact-list\">";
          display+="<h2>"+contacts[i].Name+"</h2></div>";
          $(".show-contacts").append(display);
        }
    }
  else
    {
      $("#no-contacts").show();
      $(".show-contacts").hide();
      $(".contact-details").hide();
    }
}


function getContacts()
{
  listOfContacts=JSON.parse(localStorage.getItem('Contacts') );
  return listOfContacts;  
}
function getContact(id)
 {
   contacts=getContacts();
  for(var i=0;i<contacts.length;i++)
   {
      if(contacts[i].Id  == id)
        {
           return contacts[i];
        }
   }
}

function update() 
{
  var selectedContact= getContact(selectedContactId);
    selectedContact.Name=$("#txt-name").val();
  selectedContact.Address=$("#txt-address").val();
  selectedContact.PhoneNumber=$("#txt-phonenumber").val();
  localStorage.setItem('Contacts', JSON.stringify(listOfContacts));
  alert("Contact UPDATED successfully!!!!!!!");
  mainPage();
  $(".contact-details").hide(); 


}
function remove()
{
 selectedContact=getContact(selectedContactId);  
 listOfContacts=getContacts();
 listOfContacts.pop(selectedContact)
 localStorage.setItem('Contacts', JSON.stringify(listOfContacts));
 alert("Contact Deleted successfully!!!!!!!");
 displayContacts();
 
}
function displayData(id)
{ 
  selectedContactId=id;
  $(".contact-details").show();
  //Contact=new Contact();
  selectedContact=getContact(id);   
  $("#contact-name").text(selectedContact.Name);
  $("#contact-address").text(selectedContact.Address);
  $("#contact-phonenumber").text(selectedContact.PhoneNumber);
}
function updateFormDisplay() {
  $("#home-page").hide();
  $("#form-display").show();
  $("#back").show();  
  $("#submit").hide();
   $("#update-form").show();
  
}
function confirmRemove() {
  if (confirm("Are you sure you want to delete????"))
  {
    remove();

  }
  else
  {
    alert("******No changes made*****");
    
  }
  
// }**************required for empty form ************


// function validateForm() {
//   var contactName=document.getElementById('txt-name');
//  // var id="contact"+(listOfContacts.length+1);
//   var address=document.getElementById('txt-address');
//   var phoneNumber=document.getElementById('txt-phonenumber');   

//*****************to be done
  
}


