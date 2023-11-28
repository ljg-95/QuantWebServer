const serverInit = () => {
    if(window.location.href === 'localhost:8080'){
        location.href = "localhost:8080/ui/main.html";
    }
}