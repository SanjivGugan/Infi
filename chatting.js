var firebaseConfig = {
  apiKey: "AIzaSyCa-HI4cEDpxODHBMyHRSdiV8c4gbMwvPY",
  authDomain: "infinity-ae6ab.firebaseapp.com",
  databaseURL: "https://infinity-ae6ab-default-rtdb.firebaseio.com",
  projectId: "infinity-ae6ab",
  storageBucket: "infinity-ae6ab.appspot.com",
  messagingSenderId: "435875807374",
  appId: "1:435875807374:web:2d121b505b4494330b09df"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name"
          });

          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}
