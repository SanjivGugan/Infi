function login()
{
    user_name = document.getElementById("name").value;
    localStorage.clear()
    localStorage.setItem("name", user_name);
    window.location = "chatting.html";
}