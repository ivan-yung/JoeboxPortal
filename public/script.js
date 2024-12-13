document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const today = new Date();
    const dayOfMonth = today.getDate();
    console.log(dayOfMonth);

    if (dayOfMonth > 15){
        window.location.href = "https://joebox2.onrender.com/";
    }else{
        window.location.href = "https://joebox.onrender.com/";
    }

});