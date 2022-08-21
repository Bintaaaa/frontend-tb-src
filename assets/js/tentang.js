import { employeeData, cardData } from "./data.js";

const innerEmployee = document.getElementById("innerkontribusi");
const modalInnerEmployee = document.getElementById("modalInnerKontribusi");
const cardSplideSlider = document.getElementById('spliderSlider')

// function renderEmployeesInModal(employeeDataa) {
//   // Create Elements

//   employeeDataa.forEach((data) => {
//     const mainCard = document.createElement("div");
//     mainCard.setAttribute("class", "tentang-kontribusi-card");

//     const imgBox = document.createElement("div");
//     imgBox.setAttribute("class", "kontribusi-imgbox");

//     const img = document.createElement("img");

//     const knowMe = document.createElement("div");
//     knowMe.setAttribute("class", "kontribusi-knowme");

//     const konName = document.createElement("div");
//     konName.setAttribute("class", "kontribusi-name text-center");

//     const konnameh5 = document.createElement("h5");

//     const konrole = document.createElement("div");
//     konrole.setAttribute("class", "kontribusi-role text-center");

//     const konroleh6 = document.createElement("h6");

//     const kondesc = document.createElement("div");
//     kondesc.setAttribute("class", "kontribusi-desc text-center");

//     const kondescp = document.createElement("p");

//     const konsos = document.createElement("div");
//     konsos.setAttribute("class", "kontribusi-soscm");

//     const konicon = document.createElement("div");
//     konicon.setAttribute("class", "kontribusi-icons");

//     const aig = document.createElement("a");
//     const afb = document.createElement("a");
//     const ald = document.createElement("a");

//     const iig = document.createElement("i");
//     iig.setAttribute("class", "fa-brands fa-facebook-square");

//     const ifb = document.createElement("i");
//     ifb.setAttribute("class", "fa-brands fa-instagram");

//     const ild = document.createElement("i");
//     ild.setAttribute("class", "fa-brands fa-linkedin");

//     //APPENDING ELEMENTS

//     aig.append(iig);
//     afb.append(ifb);
//     ald.append(ild);

//     aig.href = data.ig;
//     afb.href = data.fb;
//     ald.href = data.ld;

//     konicon.append(aig);
//     konicon.append(afb);
//     konicon.append(ald);

//     konsos.append(konicon);

//     kondescp.innerText = data.desc;
//     kondesc.append(kondescp);

//     konroleh6.innerText = data.role;
//     konrole.append(konroleh6);

//     konnameh5.innerText = data.name;
//     konName.append(konnameh5);

//     img.src = data.img;
//     imgBox.append(img);

//     knowMe.append(konName);
//     knowMe.append(konrole);
//     knowMe.append(kondesc);
//     knowMe.append(konsos);

//     mainCard.append(imgBox);
//     mainCard.append(knowMe);

//     // innerEmployee.append(mainCard)

//     modalInnerEmployee.append(mainCard);
//   });
// }
// function renderEmployees(employeeDataa) {
//   // Create Elements

//   employeeDataa.forEach((data) => {
//     const mainCard = document.createElement("div");
//     mainCard.setAttribute("class", "tentang-kontribusi-card");

//     const imgBox = document.createElement("div");
//     imgBox.setAttribute("class", "kontribusi-imgbox");

//     const img = document.createElement("img");

//     const knowMe = document.createElement("div");
//     knowMe.setAttribute("class", "kontribusi-knowme");

//     const konName = document.createElement("div");
//     konName.setAttribute("class", "kontribusi-name text-center");

//     const konnameh5 = document.createElement("h5");

//     const konrole = document.createElement("div");
//     konrole.setAttribute("class", "kontribusi-role text-center");

//     const konroleh6 = document.createElement("h6");

//     const kondesc = document.createElement("div");
//     kondesc.setAttribute("class", "kontribusi-desc text-center");

//     const kondescp = document.createElement("p");

//     const konsos = document.createElement("div");
//     konsos.setAttribute("class", "kontribusi-soscm");

//     const konicon = document.createElement("div");
//     konicon.setAttribute("class", "kontribusi-icons");

//     const aig = document.createElement("a");
//     const afb = document.createElement("a");
//     const ald = document.createElement("a");

//     const iig = document.createElement("i");
//     iig.setAttribute("class", "fa-brands fa-facebook-square");

//     const ifb = document.createElement("i");
//     ifb.setAttribute("class", "fa-brands fa-instagram");

//     const ild = document.createElement("i");
//     ild.setAttribute("class", "fa-brands fa-linkedin");

//     //APPENDING ELEMENTS

//     aig.append(iig);
//     afb.append(ifb);
//     ald.append(ild);

//     aig.href = data.ig;
//     afb.href = data.fb;
//     ald.href = data.ld;

//     konicon.append(aig);
//     konicon.append(afb);
//     konicon.append(ald);

//     konsos.append(konicon);

//     kondescp.innerText = data.desc;
//     kondesc.append(kondescp);

//     konroleh6.innerText = data.role;
//     konrole.append(konroleh6);

//     konnameh5.innerText = data.name;
//     konName.append(konnameh5);

//     img.src = data.img;
//     imgBox.append(img);

//     knowMe.append(konName);
//     knowMe.append(konrole);
//     knowMe.append(kondesc);
//     knowMe.append(konsos);

//     mainCard.append(imgBox);
//     mainCard.append(knowMe);

//     innerEmployee.append(mainCard);

//     // modalInnerEmployee.append(mainCard)
//   });
// }
function renderCardSlider(cardDataa) {
  cardDataa.forEach((data) => {

    // CREATING ITEMS

    const cardSLiderTitle = document.createElement("div");
    cardSLiderTitle.setAttribute("class", "cardslider-card-title");

    const csth2 = document.createElement("h2");

    const cardSliderImgBox = document.createElement("div");
    cardSliderImgBox.setAttribute("class", "cardslider-card-imgbox");

    const img = document.createElement('img')

    const cardSliderCard = document.createElement('div')
    cardSliderCard.setAttribute('class', 'cardslider-card')
    cardSliderCard.setAttribute('style', `background-color: ${data.color}`)


    const splideSlider = document.createElement('li')
    splideSlider.setAttribute('class', 'splide__slide')

    //APPENDING ITEMS

    img.src = data.img
    csth2.innerText = data.title

    cardSliderImgBox.append(img)
    cardSLiderTitle.append(csth2)

    cardSliderCard.append(cardSLiderTitle)
    cardSliderCard.append(cardSliderImgBox)

    splideSlider.append(cardSliderCard)

    cardSplideSlider.append(splideSlider)

  });
}

// renderEmployees(employeeData);

// renderEmployeesInModal(employeeData);

renderCardSlider(cardData);

var splide = new Splide('.splide', {
  type: 'slide',
  perPage: 2,
  perMove: 2,
  pagination: false,
  breakpoints: {
		768: {
			perPage: 1,
			perMove: 1,
		},
  }
});

var kontribusiSplide = new Splide("#modalKontribusi", {
  perPage: 4,
  drag: 'free',
  pagination: false,
  arrows: false,

  breakpoints:{
    1300:{
      perPage: 3
    },
    992: {
      perPage: 2
    },
    576: {
      perPage: 1,
      pagination: true
    }
  }
})

splide.mount();
kontribusiSplide.mount()
