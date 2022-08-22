import { cardData, ulasanData } from "./data.js";

const cardSplideSlider = document.getElementById("spliderSlider");
const ulasanSplideSlider = document.getElementById('ulasanSplideList')

function numberToStars(rating, parentElement){

  const filledStar = "../../assets/img/filledstar.png"
  const emptyStar = "../../assets/img/emptystar.png"

  for(let i = 1; i <= 5; i++){

    let img;

    if(rating !== 0.0){
      
      img = document.createElement('img')
      img.src = filledStar

      rating--;
    }else{
      img = document.createElement('img')
      img.src = emptyStar
    }

    parentElement.append(img)

  }

}


function renderCardSlider(cardDataa) {
  cardDataa.forEach((data) => {
    // CREATING ITEMS

    const cardSLiderTitle = document.createElement("div");
    cardSLiderTitle.setAttribute("class", "cardslider-card-title");

    const csth2 = document.createElement("h2");

    const cardSliderImgBox = document.createElement("div");
    cardSliderImgBox.setAttribute("class", "cardslider-card-imgbox");

    const img = document.createElement("img");

    const cardSliderCard = document.createElement("div");
    cardSliderCard.setAttribute("class", "cardslider-card");
    cardSliderCard.setAttribute("style", `background-color: ${data.color}`);

    const splideSlider = document.createElement("li");
    splideSlider.setAttribute("class", "splide__slide");

    //APPENDING ITEMS

    img.src = data.img;
    csth2.innerText = data.title;

    cardSliderImgBox.append(img);
    cardSLiderTitle.append(csth2);

    cardSliderCard.append(cardSLiderTitle);
    cardSliderCard.append(cardSliderImgBox);

    splideSlider.append(cardSliderCard);

    cardSplideSlider.append(splideSlider);
  });
}

function renderUlasanSlider(ulasanDataa){
  

  ulasanDataa.forEach(data => {
    // CREATING AND SETTING ATTRIBUTES

  const li = document.createElement('li')
  li.setAttribute('class', 'splide__slide')

  const cardDiv = document.createElement('div')
  cardDiv.setAttribute('class', 'ulasan-card')

  const ulasanCardWho = document.createElement('div')
  ulasanCardWho.setAttribute('class', 'ulasan-card-who')

  const container = document.createElement('div')
  container.setAttribute('class', 'container')

  const whoImg = document.createElement('div')
  whoImg.setAttribute('class', 'who-img')

  const imgBox = document.createElement('div')
  imgBox.setAttribute('class', 'imgbox')
  
  const img = document.createElement('img')

  const whoDetail = document.createElement('div')
  whoDetail.setAttribute('class', 'who-detail')

  const h3Name = document.createElement('h3')
  
  const pDate = document.createElement('p')

  const detailRating = document.createElement('div')
  detailRating.setAttribute('class', 'detail-rating d-none d-sm-flex')

  const ratingStars = document.createElement('div')
  ratingStars.setAttribute('class', 'rating-stars')

  const ratingNum = document.createElement('div')
  ratingNum.setAttribute('class', 'rating-num')

  const border = document.createElement('div')
  border.setAttribute('class', 'border')

  const ratingAndDate = document.createElement('div')
  ratingAndDate.setAttribute('class', 'rating-and-date d-block d-sm-none')

  const container2 = document.createElement('div')
  container2.setAttribute('class', 'container')

  const ratingStars2 = document.createElement('div')
  ratingStars2.setAttribute('class', 'rating-stars')

  const ratingDate = document.createElement('div')
  ratingDate.setAttribute('class', 'rating-date')

  const ulasanCardWhat = document.createElement('div')
  ulasanCardWhat.setAttribute('class', 'ulasan-card-what')

  const container3 = document.createElement('div')
  container3.setAttribute('class', 'container')

  const pWhat = document.createElement('p')


  // APPENDING ELEMENTS

  // ulasan card what 
  pWhat.innerText = data.comment
  container3.append(pWhat)
  ulasanCardWhat.append(container3)
  
  // ulasan card rating date 
  ratingDate.innerText = data.date
  numberToStars(data.rating, ratingStars2)
  container2.append(ratingStars2)
  container2.append(ratingDate)
  ratingAndDate.append(container2)
  
  // ulasan card who 
  ratingNum.innerText = `${data.rating}.0`
  numberToStars(data.rating, ratingStars)
  detailRating.append(ratingStars)
  detailRating.append(ratingNum)
  pDate.innerText = data.date
  h3Name.innerText = data.name
  whoDetail.append(h3Name)
  whoDetail.append(pDate)
  whoDetail.append(detailRating)
  img.src = data.img
  imgBox.append(img)
  whoImg.append(imgBox)
  container.append(whoImg)
  container.append(whoDetail)
  
  ulasanCardWho.append(container)
  ulasanCardWho.append(border)

  cardDiv.append(ulasanCardWho)
  cardDiv.append(ratingAndDate)
  cardDiv.append(ulasanCardWhat)

  li.append(cardDiv)

  ulasanSplideSlider.append(li)

})


}

renderCardSlider(cardData);

renderUlasanSlider(ulasanData)

var cardslider = new Splide("#cardSlider", {
  type: "slide",
  perPage: 2,
  perMove: 2,
  pagination: false,
  breakpoints: {
    768: {
      perPage: 1,
      perMove: 1,
    },
  },
});

var ulasanSlider = new Splide("#ulasanSlider", {
  type   : 'loop',
  perPage: 1,
  perMove: 1,
  padding: '550px',
  pagination: false,
  arrows: false,
  breakpoints: {
    798:{
      padding: '0',
    },
    920:{
      padding: '50px'
    },
    1022:{
      padding: '110px'
    },
    1184:{
      padding: '150px'
    },
    1184:{
      padding: '150px'
    },
    1204:{
      padding: '230px'
    },
    1304:{
      padding: '240px'
    },
    1404:{
      padding: '290px'
    },
    1500:{
      padding: '330px'
    },
    1600:{
      padding: '370px'
    },
    1700:{
      padding: '410px'
    },
    1800:{
      padding: '450px'
    },
    1900:{
      padding: '490px'
    },
  },
} );


cardslider.mount();

ulasanSlider.mount();
