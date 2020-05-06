//buttons and their actions
//remove
//
//   function Delete() {
  $(document).ready(function() {
    $(window).unload(saveSettings);
    loadSettings();//Name,Id,Address,PhoneNumber
// });
//   }
///forms for detilas to be done
function loadSettings() {
  $('#Name').val(localStorage.Name);
  $('#Id').val(localStorage.Id);
  $('#Address').val(localStorage.Address);
  
  $("#PhoneNumber").val(localStorage.PhoneNumber);
  saveSettings();
}

function saveSettings() {
  localStorage.Name = $('#Name').val();
  localStorage.Id = $('#Id').val();
  localStorage.Address = $('#Address').val();
  localStorage.PhoneNumber = $("#PhoneNumber").val();
  
}

// function AddContact(name, email, mobile, landline, website, address) 
//   {
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



  