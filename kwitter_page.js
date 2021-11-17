var firebaseConfig = {
    apiKey: "AIzaSyCc5JVnO-UIvRWedE18NjLTWKDFHnrpEtY",
    authDomain: "school-chat-app-ee8d9.firebaseapp.com",
    databaseURL: "https://school-chat-app-ee8d9-default-rtdb.firebaseio.com",
    projectId: "school-chat-app-ee8d9",
    storageBucket: "school-chat-app-ee8d9.appspot.com",
    messagingSenderId: "428305853334",
    appId: "1:428305853334:web:19372073635cee7ff84bb7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}