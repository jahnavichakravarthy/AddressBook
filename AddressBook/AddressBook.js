
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
    // $(".show_Contacts").on("click", function(){;
      // alert("The  was clicked.");
   // });
  });
});


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
  // Display()
  // {
    
  //   $("#contact_name").text(SelectedContact.Name);
  // $("#contact_address").text(SelectedContact.Address);
  // $("#contact_phonenumber").text(SelectedContact.PhoneNumber);
    
  // }
 
    
}
// }
SelectedContact=new Contact();

function AddContact() 
{
  ListofContacts=getContacts();
  var Contactname=document.getElementById('txt_name');
  var id="contact"+(ListofContacts.length+1);
  var selectorId="#"+id;
  var address=document.getElementById('txt_address');
  var phonenumber=document.getElementById('txt_phonenumber');    
   NewContact=new Contact(Contactname.value,id,address.value,phonenumber.value,selectorId);
    
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
  var contacts=getContacts();
  if(contacts.length!=0)
  {
    $("#no_Contacts").hide();
    for(var i=0;i<contacts.length;i++)
            { 
              SelectedContact=getContact(contacts[i].Id);
               var display="<div id=\""+contacts[i].Id+"\"";
              // display+="onclick=\""+Displaydata(contacts[i].Id);+"\"";
            display+="class=\"contact_list\">";

            display+="<h2>"+contacts[i].Name+"</h2></div>";
               $(".show_Contacts").html(display);
               //$(SelectedContact.SelectorId).on('click',function(){SelectedContact.Display();})
               //$(SelectedContact.SelectorId).on('click',function(){SelectedContact.Display();})
            // $("contacts[i].SelectorId").text(contacts[i].Name);
             $(contacts[i].SelectorId).on("click", function(){
               var id=contacts[i].SelectorId.slice(1,);
               Displaydata(id);
            //})

              
          //Displaydata()
             
          
          })
        }
      }
          else
          {
            ("#no_Contacts").show();}
        }


function getContacts()
{
  ListofContacts=JSON.parse(localStorage.getItem('Contacts') );
  return ListofContacts;  
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
// Contact.Display=function(contact) {

//   $("#contact_name").text(contact.Name);
// $("#contact_address").text(contact.Address);
// $("#contact_phonenumber").text(contact.PhoneNumber);
  
// }

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
function Displaydata(id)
{
  contact=new Contact();
  contact=getContact(id);
   
  $("#contact_name").text(contact.Name);
  $("#contact_address").text(contact.Address);
  $("#contact_phonenumber").text(contact.PhoneNumber);
}

// function Displaydata(Contact: )
// {
//  SelectedContact.Display(contacts[i]);

// }

