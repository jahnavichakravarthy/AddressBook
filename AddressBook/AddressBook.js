
$(document).ready(function(){
  onstart();
  $("#Add").click(function(){
    $("#Contact_Display").hide();
    $("#Form_Display").show();
  });
  $("#Submit").click(function(){
    $("#Contact_Display").show();
    $("#Form_Display").hide();
    displayContacts();
    $(".show_Contacts").on("click", function(){Displaydata();
      alert("The  was clicked.");
    });
  });
});

//var ContactId;
var ListofContacts=[];

function onstart()
{   
$("#Contact_Display").show();
$("#Form_Display").hide();
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
{
  contacts=getContacts();
  if(contacts.length!=0)
  {
    $("#no_Contacts").hide();
    for(var i=0;i<contacts.length;i++)
            {
              $(".show_Contacts").text(contacts[i].Name);
            }
          
          }
          else{("#no_Contacts").show();}
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
  Contact.Name=$("#txt_name").val();
  Contact.Address=$("#txt_address").val();
  Contact.PhoneNumber=$("#txt_phonenumber").val();

  ListofContacts.push(Contact);
  localStorage.setItem('Contacts', JSON.stringify(ListofContacts));
}
function Remove(ContactId)

{var Contact=getContact(ContactId);
  var Contacts=getContacts();
var postion=Contacts.indexOf(Contact);
var ModifiedContacts=Contacts.splice(postion,1);
localStorage.setItem('Contacts', JSON.stringify(ModifiedContacts));
}

function Displaydata(name)
{
  var contact= getContact(name);
  
  $("#contact_name").text(contact.Name);
  $("#contact_address").text(contact.Address);
  $("#contact_phonenumber").text(contact.PhoneNumber);
  

}
