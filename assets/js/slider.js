import { sliderData } from "./data.js";

const innerSlider = document.getElementById("tentang-slider-inner");
const sliderPaginations = document.getElementById("tentang-slider-paginations");
const prev = document.getElementById("sliderPrev");
const next = document.getElementById("sliderNext");

let startingPosition = 0;
let currentPosition = 0;

const isOdd = (num) => num % 2;

const getPositionX = e => {

    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
}

function renderSlider() {
  innerSlider.innerHTML = "";

  sliderData.forEach((data, index) => {
    // Creating Element

    const itemDiv = document.createElement("div");
    const carouselContent = document.createElement("div");
    const container = document.createElement("div");
    const row = document.createElement("div");
    const carouselTextbox = document.createElement("div");
    const texts = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const carouselImgbox = document.createElement("div");
    const img = document.createElement("img");

    // ASSIGING ATTRIBUTES TO THE ELEMENTS

    if (index === 0) {
      itemDiv.setAttribute("class", "tentang-slider-item active");
    } else {
      itemDiv.setAttribute("class", "tentang-slider-item");
    }

    carouselContent.setAttribute("class", "carousel-content");
    container.setAttribute("class", "container");
    row.setAttribute("class", "rowslider gx-5 mx-auto mb-5");
    carouselTextbox.setAttribute("class", "carousel-textbox");
    texts.setAttribute("class", "texts");
    carouselImgbox.setAttribute("class", "carousel-imgbox");

    // Outputing Data

    h1.innerText = data.year;
    p.innerText = data.text;
    img.src = data.img;

    //APPENDING ELEMENTS

    //Appending textbox
    texts.append(h1);
    texts.append(p);
    carouselTextbox.append(texts);

    //Appending imgbox
    carouselImgbox.append(img);

    //Appending Carousel boxes
    if (!isOdd(index)) {
      row.append(carouselTextbox);
      row.append(carouselImgbox);
      row.style.gridTemplateAreas = "'textbox imgbox'"
    } else {
      row.append(carouselImgbox);
      row.append(carouselTextbox);
      row.style.gridTemplateAreas = "'imgbox textbox'"
    }

    container.append(row);
    carouselContent.append(container);
    itemDiv.append(carouselContent);

    itemDiv.querySelector('img').addEventListener('dragstart', e => e.preventDefault())

    innerSlider.oncontextmenu = e => {

        e.preventDefault();
        e.stopPropagation()

        return false
    }

    innerSlider.append(itemDiv);

    // MAKING PAGINATION

    const pagi = document.createElement("button");

    if (index === 0) {
      pagi.setAttribute("class", "tentang-slider-pagination active");
    } else {
      pagi.setAttribute("class", "tentang-slider-pagination");
    }

    pagi.setAttribute('data-sliderid', index)

    sliderPaginations.append(pagi);



  });

  startSlider();
}

renderSlider();

function startSlider() {
  const allSliderItem = innerSlider.querySelectorAll(".tentang-slider-item");
  const allSliderPagination = sliderPaginations.querySelectorAll(
    ".tentang-slider-pagination"
  );


  allSliderItem.forEach(data => {

    data.addEventListener('touchstart', e => {

        startingPosition = getPositionX(e)
    })
    data.addEventListener('touchend', e =>{

        const movedBy = currentPosition - startingPosition

        // console.log(movedBy)

        if(movedBy < -100){
            nextSlide()
        }
        else if(movedBy > 100){

            prevSlide()
        }
        
    })
    data.addEventListener('touchmove', e =>{

        currentPosition = getPositionX(e)
    })


    data.addEventListener('mousedown', e => console.log(getPositionX(e)))

    // data.addEventListener('mouseup', e => console.log(e.x))
    // data.addEventListener('mousedown', e => console.log(e.x))
  })


  let current = 0;

  allSliderPagination.forEach(pagi => pagi.addEventListener('click', e => { setSlide(e.target.dataset.sliderid) }))

  function resetSlide() {
    const activeSlide = innerSlider.querySelector(".active");
    const activePagination = sliderPaginations.querySelector(".active");
    activeSlide.classList.remove("active");
    activePagination.classList.remove("active");
  }

  
  function setSlide(index){

    current = Number(index)

    resetSlide()

    setTimeout(allSliderItem[current].classList.add('active'), 300)
    setTimeout(allSliderPagination[current].classList.add('active'), 300)

  }

  function nextSlide() {
    resetSlide();

    console.log(current)

    if (current < allSliderItem.length - 1) {
      setTimeout(() => {
        allSliderItem[current + 1].classList.add("active");
        allSliderPagination[current + 1].classList.add("active");
        current++;
      }, 300);
    } else {
      setTimeout(() => {
        allSliderItem[0].classList.add("active");
        allSliderPagination[0].classList.add("active");
        current = 0;
      }, 300);
    }

    // console.log(current)
  }
  function prevSlide() {
    resetSlide();

    if (current !== 0) {
      setTimeout(() => {
        allSliderItem[current - 1].classList.add("active");
        allSliderPagination[current - 1].classList.add('active')
        current--;
      }, 300);
    } else {
      setTimeout(() => {
        allSliderItem[allSliderItem.length - 1].classList.add("active");
        allSliderPagination[allSliderPagination.length - 1].classList.add("active");
        current = allSliderItem.length - 1;
      }, 300);
    }

    // console.log(current)
  }

  prev.addEventListener("click", prevSlide);
  next.addEventListener("click", nextSlide);
}
