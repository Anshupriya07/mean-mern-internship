const data = [
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZnQBLwvivaZF8E-mX3n6ZFTNI2yaNkHMfkw&usqp=CAU",
        title: "Sarrainodu",
        rating:4.5,

    },
    {
        image:"https://www.bollywoodhungama.com/wp-content/uploads/2020/05/Allu-Arjuns-Pushpa-to-have-Rs.-6-crores-budget-for-6-minute-action-sequence.jpg",
        title: "Pushpa",
        rating:4,

    },
    {
        image:"https://www.koimoi.com/wp-content/new-galleries/2019/11/arya-2-allu-arjun-pens-a-heartfelt-note-on-completion-of-films-10-years-001.jpg",
        title: "Arya 2",
        rating:4,

    }
];
const movieBox= document.getElementById("show_movies");

data.forEach((el) =>{
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=el.image;
    const movieTitle=document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating =document.createElement("p");
    rating.innerText = el.rating;
    const button=document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click", () => {
        alert(`You clicked on ${el.title}`);
    });
    div.append(image,movieTitle,rating,button);
    movieBox.append(div);

});
