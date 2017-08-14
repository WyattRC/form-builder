// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 4 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.options );
} )();


// -------- Your Code Goes Below this Line --------
 (function(){
   for(var i = 0; i < formData.length; i++){
     if (formData[i].type === "text" || formData[i].type === "tel" || formData[i].type === "email")
     {var x = document.createElement('input')
     x.setAttribute('type', formData[i].type)
     x.setAttribute('placeholder', formData[i].label)
     x.setAttribute('id', formData[i].id)
     document.getElementById('fields').appendChild(x);
   } else if(formData[i].type === "textarea"){
     var y = document.createElement('textarea')
     y.setAttribute('placeholder', formData[i].label)
     y.setAttribute('id', formData[i].id)
     document.getElementById('fields').appendChild(y);
   } else {
     var z = document.createElement('select')
     z.setAttribute('placeholder', formData[i].label)
     z.setAttribute('id', formData[i].id)
     document.getElementById('fields').appendChild(z);
     for(let j = 0; j < formData[4].options.length; j++){
         var a = document.createElement('option')
         a.setAttribute('label', formData[4].options[j].label)
         a.setAttribute('value', formData[4].options[j].value)
         document.getElementById('user-language').appendChild(a)
       }
   }
 }
 } )();

// I think this was done the hard way but at least now you could add more of a certain input type to the array and it will work still
