
$(document).ready(function()
{
  OnStart();
  $("#add").click(function()
    {
      $("#contact_display").hide();
      $("#form_display").show();
      $("#update_form").hide();
    });
  $("#submit").click(function()
    {
      $("#contact_display").show();
      $("#form_display").hide();
      DisplayContacts();
    });
});


var ListofContacts=[];

function OnStart()
{ 
  $(".contact_details").hide();  
  $("#contact_display").show();
  $("#form_display").hide();
  localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
}


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

var SelectedContactId;
function AddContact() 
{
  ListofContacts=GetContacts();
  var contactName=document.getElementById('txt_name');
  var id="contact"+(ListofContacts.length+1);
  var selectorId="#"+id;
  var address=document.getElementById('txt_address');
  var phoneNumber=document.getElementById('txt_phonenumber');    
   Contact=new Contact(contactName.value,id,address.value,phoneNumber.value,selectorId);
   console.log(Contact);
   ListofContacts.push(Contact);
   localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
   alert("Contact added successfully");
   
}
function DisplayContacts()
{
  var contacts=GetContacts();
  if(contacts.length!=0)
    {
      $(".show_contacts").empty();
      $("#no_contacts").hide();
      for(var i=0;i<contacts.length;i++)
         {               
          var display="<div id=\""+contacts[i].Id+"\"";
          display+="onclick=\""+DisplayData(contacts[i].Id);Assignment(contacts[i].Id);+"\"";
          display+="class=\"contact_list\">";
          display+="<h2>"+contacts[i].Name+"</h2></div>";
          $(".show_contacts").append(display);
        }
    }
  else
    {
      ("#no_contacts").show();
    }
}

function Assignment(id)
{
  SelectedContactId=id;
  
}
function GetContacts()
{
  ListofContacts=JSON.parse(localStorage.getItem('Contacts') );
  return ListofContacts;  
}
function GetContact(id)
 {
   contacts=GetContacts();
  for(var i=0;i<contacts.length;i++)
   {
      if(contacts[i].Id  == id)
        {
           return contacts[i];
        }
   }
}

function Update(SelectedContactId) 
{
  Contact= GetContact(SelectedContactId);
  Contact.Name=$("#txt_name").val();
  Contact.Address=$("#txt_address").val();
  Contact.PhoneNumber=$("#txt_phonenumber").val();
  ListofContacts.push(Contact);
  localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
}
function Remove(SelectedContactId)

{
 Contact=GetContact(SelectedContactId);
 var Contacts=GetContacts();
 var postion=Contacts.indexOf(Contact);
 var ModifiedContacts=Contacts.splice(postion,1);
 localStorage.setItem('Contacts', JSON.stringify(ModifiedContacts));
}
function DisplayData(id)
{
  $(".contact_details").show();
  //Contact=new Contact();
  Contact=GetContact(id);   
  $("#contact_name").text(Contact.Name);
  $("#contact_address").text(Contact.Address);
  $("#contact_phonenumber").text(Contact.PhoneNumber);
}
function UpdateFormDisplay() {
  $("#contact_display").hide();
  $("#form_display").show();  
  $("#submit").hide();
   $("#update_form").show();
  
}



