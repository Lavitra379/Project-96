
get_user_name = localStorage.getItem("user_name")
get_room_name = localStorage.getItem("room_name")

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "index.html"
    }

    function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(get_room_name).push({
        name:get_user_name,    
        message:msg,    
        like:0    
        })
        document.getElementById("msg").value = "";
    }

