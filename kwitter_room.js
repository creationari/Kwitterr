
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

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" ! ";
    
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code                
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" , name);
window.location="kwitter_page.html";
}

function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}