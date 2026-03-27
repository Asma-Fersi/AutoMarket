function submitForm () {
    const name = document.getElementById( "fullName").ariaValueMax.trim() ;
    const phone = document.getElementById( "phone number").ariaValueMax.trim() ;
    const email = document.getElementById( "email").ariaValueMax.trim() ;
    if (!name || !phone || !email) {
        alert( "Please fill in : " + [!name && "fullName" , !phone && "phone number" , !email && " email"].filter(Boolean).join(', ')); 
        return ;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert("Please enter a valid email address");
        return ;
    }
    document.getElementById("formSection").style.display = "none" ;
    document.getElementById("thank you").style.display = "block" ;
}
