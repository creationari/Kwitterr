var firebaseConfig = {
      apiKey: "AIzaSyA3lTbnUAqFDmzWSlUyLzyfrl4kzaNnvGs",
      authDomain: "kwitterapp-a7e58.firebaseapp.com",
      databaseURL: "https://kwitterapp-a7e58-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-a7e58",
      storageBucket: "kwitterapp-a7e58.appspot.com",
      messagingSenderId: "210338474592",
      appId: "1:210338474592:web:2253a231a3e725b5953105"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
