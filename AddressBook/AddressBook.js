//buttons and their actions
//remove
//
//   function Delete() {
 // $(document).ready(function() {}
  //   $(window).unload(saveSettings);
  //   loadSettings();//Name,Id,Address,PhoneNumber
// });
//   }
///forms for detilas to be done
var name=document.getElementById('txt_name');
var id=document.getElementById('txt_id');
var address=document.getElementById('txt_address');
var phonenumber=document.getElementById('txt_phonenumber');
function AddContact() 
{
  
var Contact={Name:name.value,Id :id.value,Address:address.value,PhoneNumber:phonenumber.value,};
localStorage.setItem('Contact', JSON.stringify(Contact));}
// function loadSettings() {
//   $('#Name').val(localStorage.Name);
//   $('#Id').val(localStorage.Id);
//   $('#Address').val(localStorage.Address);
  
//   $("#PhoneNumber").val(localStorage.PhoneNumber);
//   saveSettings();
// }

// function saveSettings() {
//   localStorage.Name = $('#Name').val();
//   localStorage.Id = $('#Id').val();
//   localStorage.Address = $('#Address').val();
//   localStorage.PhoneNumber = $("#PhoneNumber").val();
  
// }
  

// function AddContact(name, email, mobile, landline, website, address) 
//   {var inputEmail= document.getElementById("email");
//             this.name = name;
//             this.email = email;
//             this.mobile = mobile;
//             this.landline = landline;
//             this.website = website;
//             this.address = address;
//             //adding this contact to a storage
//             function Add(params)
// {
//   //jquery  for adding
// }
//         }
//         //same forms but contact will be over ridden
// function EditContact(name, email, mobile, landline, website, address) 
//         {
//             this.name = name;
//             this.email = email;
//             this.mobile = mobile;
//             this.landline = landline;
//             this.website = website;
//             this.address = address;
//             //adding this contact to a storage
//             function edit(params)
// {
//   //jquery  for editing
// }
//         }
        
//         function DeleteContact()
//         {
//          // $(document).ready(function(){
//             //     $("button").click(function(){
//             //       $("#div1").remove();
//             //     });
//             //   });
//         }
