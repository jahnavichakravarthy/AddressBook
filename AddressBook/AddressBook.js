
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
     Mainpage();
    });
    $("#update_form").click(function()
    {
     Mainpage();
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

class Contact {
  constructor(name, id, address, phoneNumber, selectorId) {
    this.Name = name;
    this.SelectorId = selectorId;
    this.Id = id;
    this.Address = address;
    this.PhoneNumber = phoneNumber;
  }
}
function Mainpage() {
  $("#contact_display").show();
  $("#form_display").hide();
  DisplayContacts();
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
  var Createdcontact=new Contact(contactName.value,id,address.value,phoneNumber.value,selectorId);
   console.log(Createdcontact);
     ListofContacts.push(Createdcontact);
   localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
   alert("Contact added successfully");
   //Contact={};console.log(Contact);


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
          display+="onclick=\"DisplayData(id);\"";
          display+="class=\"contact_list\">";
          display+="<h2>"+contacts[i].Name+"</h2></div>";
          $(".show_contacts").append(display);
        }
    }
  else
    {
      $("#no_contacts").show();
      $(".show_contacts").hide();
      $(".contact_details").hide();
    }
}

//Assignment(contacts[i].Id);

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

function Update() 
{
  var SelectedContact= GetContact(SelectedContactId);
  SelectedContact.Name=$("#txt_name").val();
  SelectedContact.Address=$("#txt_address").val();
  SelectedContact.PhoneNumber=$("#txt_phonenumber").val();
  //ListofContacts.push(SelectedContact);
  localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
  alert("Contact UPDATED successfully!!!!!!!");
  Mainpage();

}
function Remove()
{
 SelectedContact=GetContact(SelectedContactId);
 //var Contacts=GetContacts();
ListofContacts.pop(SelectedContact)
//  var postion=Contacts.indexOf(SelectedContact);
//  var ModifiedContacts=Contacts.splice(postion,1);
 localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
 alert("Contact Deleted successfully!!!!!!!");
 DisplayContacts();
 
}
function DisplayData(id)
{ 
  SelectedContactId=id;
  $(".contact_details").show();
  //Contact=new Contact();
  SelectedContact=GetContact(id);   
  $("#contact_name").text(SelectedContact.Name);
  $("#contact_address").text(SelectedContact.Address);
  $("#contact_phonenumber").text(SelectedContact.PhoneNumber);
}
function UpdateFormDisplay() {
  $("#contact_display").hide();
  $("#form_display").show();  
  $("#submit").hide();
   $("#update_form").show();
  
}
function ConfirmRemove() {
  if (confirm("Are you sure you want to delete????"))
  {
    Remove();

  }
  else
  {
    alert("******No changes made*****");
    // $("#contact_display").show();
    //   $("#form_display").hide();
    //   DisplayContacts();
  }
  
}


