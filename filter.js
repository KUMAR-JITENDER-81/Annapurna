let arr = [
    {
        head: 'Robin Hood Army',
        name: 'Robin Hood Army',
        hehe: "all",
        place: "Kolkata, Mumbai, Hyderabad, Bengaluru, Chennai, Pune, Jaipur, and Jabalpur",
        desc: "Robin Hood Army is a volunteer-based non-government organisation that distributes food in 41 cities across India.The NGO takes surplus food from restaurants, convention halls, and homes, and distributes it to those who need it.You can join the 8, 430+ volunteers to be part of their initiative.",
        website: "http://robinhoodarmy.com/",
        image: "Images/robbin.jpg",
        phone: "#"
    },
    {
        head: "Roti Bank by Dabbawalas",
        name: 'Roti Bank by Dabbawalas',
        hehe: "all",
        place: "Mumbai",
        desc: "Mumbai's Dabbawalas' initiative, Roti Bank, distributes food among the needy. They also take leftover food from parties, social events, and homes. In order to make a donation, you can contact them and the food will be collected by the Dabbawalas.",
        website: "#",
        image: "Images/roti.jpg",
        phone: "91-9867-221-310"
    },
    {
        head: "Wrap It. Don't Waste Food",
        name: "Wrap It. Don't Waste Food",
        hehe: "all",
        place: "Chennai",
        desc: "You can email the organization about leftover food from restaurants and households, and their volunteers will pick it up.The distribution of the food items is directed towards the underprivileged in specifically marked areas in Chennai.",
        website: "https://www.facebook.com/pg/wrapfood/about/?ref=page_internal",
        image: "Images/wrap.jpg",
        phone: "#"
    },
    {
        head: "Feeding India",
        name: "Feeding India",
        hehe: "all",
        place: "NCR, Lucknow, Jaipur, Nagpur, Surat, Mumbai, Pune, Hyderabad, Chennai,and Goa",
        desc: "Feeding India aims to tackle two major problems -- hunger and wastage of food. They take excess food from individuals, weddings, restaurants, and corporate offices, and donate it to the underprivileged.With over 2, 200 volunteers in 32+ cities, the organization has served 1, 300, 000+ meals till date.",
        website: "http://www.feedingindia.org/",
        image: "Images/feed.jpg",
        phone: "#"
    },
    {
        head: "Santhimandiram",
        name: "Santhimandiram",
        hehe: "all",
        place: "Thiruvananthapuram",
        desc: "Santhimandiram works with homeless and abandoned people by providing them with an asylum. They provide shelter to people they find at bus stations, government hospitals, railway stations, etc.You can donate extra food left from functions or events for them, or you can donate freshly made food as well.",
        website: "http://www.santhimandiram.com/",
        image: "Images/Santhimandiram.jpg",
        phone: "+91-9895527372"
    }
];
let b = arr;
update();
function dekhlo() {
    let a = document.getElementById("myform").NGOs.value;
    b = arr.filter((item) => (item.place.includes(a)) || (a==="all"));
    update();
}
function update() {
    document.querySelector(".maincontainer").innerHTML = "";
    for (const i of b) {
        console.log(i.name)
        let html = `<div class="cont">
            <div class="sideimg">
                <img src=${i.image} alt="feed" class="image">
            </div>
            <div class="text">
                <h2>${i.head}</h2>
                ${i.desc}
            </div>
            <div class="vl"></div>
            <div class="in">
                <div class="location">
                    <strong>Location</strong><br> ${i.place}
                </div>
                <div class="btn">
                    <a href="${i.website}"><button>Website</button></a>
                    <a href="tel:${i.phone}"><button>Phone</button></a>
                </div>
            </div>
        </div>`;
        console.log(html);
        document.querySelector(".maincontainer").innerHTML += html;
    }
}

