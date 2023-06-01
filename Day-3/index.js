const data = [
    {
        image: "https://www.masalakorb.com/wp-content/uploads/2017/02/Chicken-Biryani-Pressure-Cooker-Recipe-V1.jpg",
        title: "Chicken Biryani",
        rating: 4.7,
        contentParagraph: " a spiced mix of Chicken and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations.",
    },
    {
        image: "https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg",
        title: "Litti Chokha",
        rating: 4.8,
        contentParagraph: "If there’s one combination that is the hallmark of Bihari cuisine, it is the Litti Chokha. This is basically a very traditional and rustic dish of spiced sattu (roasted black chickpea flour) stuffed whole wheat dough balls called Litti. This is classically paired with a simple veggie mash essentially with onion, garlic, green chilies and mustard oil, called the chokha.",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtapMniy8vVGN2GOL0rKCYJ4Gu8z_BPvdQ0w&usqp=CAU", 
         title: "Idli",
        rating: 4.5,
        contentParagraph: "The most famous dish in Tamilnadu, as well as the whole southern region is Idli. Prepared with a grind mixture of soaked rice and white lentil, Idli is best to eat in the breakfast time.",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XrOc9_-V7rsHo7H82cY-Xm4iDO9qx-dOtQ&usqp=CAU",
         title: "Dhokla",
        rating: 4.6,
        contentParagraph: "Dhokla is a savoury sponge dish that is native to the Indian state of Gujarat and parts of adjacent states, and is popular throughout the country.",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLdwymFTVN5TOFF6p0x6jR0qVr_-0cCVOhA&usqp=CAU",
        title: "Makki ki Roti with Sarson ka Saag",
        rating: 4.8,
        contentParagraph: "Sarson ka saag and makki ki roti is a classic Punjabi dish and cooked all over north India during winter season. This lovely dish is not only healthy but soul satisfying food. In this recipe, I have captured the method which is used in the villages (pind) of Punjab in order to achieve that same authentic flavor. You must try this hearty dish this winter.",
    },
    {
        image: "https://www.secondrecipe.com/wp-content/uploads/2020/11/dal-bati-churma.jpg",
        title: "Dal Bati Churma",
        rating: 4.9,
        contentParagraph: "Dal baati churma is a dish that includes baati, pure ghee, daal (lentils) and a spicy garlic chutney. It is very popular in the state of Rajasthan.",
    }
];

const movieBox = document.getElementById("show_movies");

data.forEach((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = document.createElement("p");
    rating.innerText = el.rating;

    const contentParagraph = document.createElement("p");
    contentParagraph.innerText = el.contentParagraph;
    contentParagraph.style.display = "none";

    const showButton = document.createElement("button");
    showButton.innerText = "Food Description";
    showButton.addEventListener("click", () => {
        contentParagraph.style.display = "block";
    });

    const hideButton = document.createElement("button");
    hideButton.innerText = "Hide Description";
    hideButton.addEventListener("click", () => {
        contentParagraph.style.display = "none";
    });

    div.append(image, movieTitle, rating, contentParagraph, showButton, hideButton);
    movieBox.append(div);
});
