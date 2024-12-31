// imageScript.js
function addImage() {
    // Create image elements
    const img = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img5 = document.createElement("img");
    const img6 = document.createElement("img");
    const img8 = document.createElement("img");
    const img9 = document.createElement("img");
    const img10 = document.createElement("img");
    const img11 = document.createElement("img");


    // Set image sources
    img.src = "msfconsole screenshot.png"; // Replace with your image file path
    img2.src = "msfconsole 2.png";
    img3.src = "Nmap scan.png";
    img5.src = "whoami.png";
    img6.src = "nmap brute force.png";
    img8.src = "lscom.png";
   
    img10.src = "TheEnd.png";
    img11.src = "cd root.png";

    // Optionally set width and height
    img.width = 1200;
    img.height = 700;
    img2.width = 1200;
    img2.height = 700;
    img3.width = 1200;
    img3.height = 700;
    img5.width = 300;
    img5.height = 300;
    img5.style.objectFit = "contain"
    img6.width = 1200;
    img6.height = 700;
    img8.width = 1200; // Increased width
    img8.height = 800; // Increased height for better readability
    img8.style.objectFit = "contain"; // Maintain aspect ratio within the container
   


    img10.width = 1200;
    img10.height = 700;
    img10.style.objectFit = "contain"

    img11.width = 300;
    img11.height = 300;
    img11.style.objectFit = "contain"

    // Append images to HTML elements
    document.getElementById("msfconsole screenshot").appendChild(img);
    document.getElementById("msfconsole 2").appendChild(img2);
    document.getElementById("Nmap scan").appendChild(img3);
    document.getElementById("whoami").appendChild(img5);
    document.getElementById("nmap brute force").appendChild(img6);
    document.getElementById("lscom").appendChild(img8); 
  
    document.getElementById("TheEnd").appendChild(img10);
    document.getElementById("cd root").appendChild(img11);

}

// Call the function to add images when the script loads
window.onload = addImage;

