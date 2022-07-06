let movies = [
  {
    name: "doctor strange in the multiverse of madness",
    des:
      "When the Multiverse is unlocked, Doctor Strange must enlist help from old and new allies in order to confront a surprising adversary.",
    image: "images/slider 1.PNG"
  },
  {
    name: "spiderman: homecoming",
    des:
      "A young Peter Parker/Spider-Man navigates his newfound identity as the web-slinging superhero.",
    image: "images/slider 2.PNG"
  },
  {
    name: "ms marvel",
    des:
      "NEW EPISODE EVERY WEDNESDAY AT 12:30 PM. Kamala Khan, a Muslim American teen growing up in Jersey City, is a Superhero mega fan who discovers she has ...",
    image: "images/slider 3.PNG"
  },
  {
    name: "more than friends",
    des:
      "Friends of 10 years, Woo-yeon and Soo, secretly harbour feelings for each other. Will their love survive the misunderstandings and missed timings?",
    image: "images/slider 4.PNG"
  },
  {
    name: "spider-man",
    des:
      "Average teenager Peter Parker is transformed into an extraordinary superhero after he is accidentally bitten by a radioactive spider.",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);
  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
