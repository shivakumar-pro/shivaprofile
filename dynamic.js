// List of deatils of SM to be rendered

const socialMedia = [
    {
        className: "one",
        imgSrc: "assets/image/fb.png",
        ancHref: "https://www.facebook.com/profile.php?id=100010152424700",
        innerText: "FACEBOOK"
    },
    {
        className: "two",
        imgSrc: "assets/image/insta.png",
        ancHref: "https://www.instagram.com/shivakumar._l/",
        innerText: "INSTAGRAM"
    },
    {
        className: "three",
        imgSrc: "assets/image/twitter.png",
        ancHref: "https://twitter.com/ShivakumarVL3?s=09",
        innerText: "TWITTER"
    },
    {
        className: "four",
        imgSrc: "assets/image/whatsapp.png",
        innerText: "WHATSAPP",
        id: 'myDIV',
        onClick: myFunction
    },
];

socialMedia.forEach(function gen(o,i) {
    generateElement(o)
})

function generateElement(obj) {
    const myDiv = document.createElement("div");
    myDiv.classList.add("feature");
    myDiv.classList.add(obj.className);
    
    // create image tag
    const myImg = document.createElement("img");
    myImg.setAttribute('src', obj.imgSrc);
    
    // CREATE ANCHOR TAG
    const myAnchor = document.createElement("a");
    if(obj.ancHref) {
        myAnchor.setAttribute('href', obj.ancHref);
        myAnchor.setAttribute("target", '_blank');
    }
    if(obj.id) {
        myAnchor.setAttribute("id", obj.id);
    }
    if(obj.onClick) {
        myAnchor.addEventListener("click", obj.onClick);
    }
    
    // create h1 tag
    const myH1 = document.createElement("h1");
    myH1.innerText = obj.innerText;
    
    myDiv.appendChild(myImg);
    
    myAnchor.appendChild(myH1)
    
    myDiv.appendChild(myAnchor);
    
    document.getElementById("circle").appendChild(myDiv);    
}


