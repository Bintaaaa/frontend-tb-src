const categoriesList = document.getElementById("categories");
const allCategoryLinks = categoriesList.querySelectorAll("a");
const blogsList = document.getElementById("blogs");
const paginationList = document.getElementById("a-pagination");

const categoryTitle = document.getElementById('category-title')

const noArticle = document.querySelector(".blog-noarticle");

const paginationPrev = document.getElementById("pagination-prev");
const paginationNext = document.getElementById("pagination-next");


let isDragging = false;
let startingPosition = null;
let sL = null;
let pagiArrays = [];

let clickableLink = true;

const categoriesLink = (ttl) => {
  return `http://127.0.0.1:5500/blog/?category=${ttl}&page=1#categories`;
};

function capitalizeFirstLetter(string) {

  if(!string) return;

  return string.charAt(0).toUpperCase() + string.slice(1);
}

//URL PARAMETERS
const urlSearchParams = new URLSearchParams(window.location.search);
const {
  category: categoryParam,
  page: pagesParam,
} = Object.fromEntries(urlSearchParams.entries());

categoryTitle.innerText = capitalizeFirstLetter(categoryParam)

const remainderOfPagiPage = pagesParam % 3;
const absoluteOfPagiPage = (pagesParam - remainderOfPagiPage) / 3;

const activePagiPage = remainderOfPagiPage ? absoluteOfPagiPage + 1 : absoluteOfPagiPage;

// FETCH DATAS
async function getDatas() {
  if (!categoryParam || !pagesParam) {
    window.location = `http://127.0.0.1:5500/blog/?category=berita&page=1;`;
  }

  const linkForCategory = "http://localhost:4000/kategori";
  const linkForArticle =
    categoryParam === "semua"
      ? `http://localhost:4000/artikel?_limit=9&_page=${pagesParam}`
      : `http://localhost:4000/artikel?category=${categoryParam}&_limit=9&_page=${pagesParam}`;

  const linkForArticleCount =
    categoryParam === "semua"
      ? `http://localhost:4000/artikel`
      : `http://localhost:4000/artikel?category=${categoryParam}`;

  const categoriesData = await fetch(linkForCategory).then((res) => res.json());

  const articlesData = await fetch(linkForArticle).then((res) => res.json());

  const howManyArticles = await fetch(linkForArticleCount)
    .then((res) => res.json())
    .then((data) => data.length);

  renderCategories(categoriesData);
  renderArticles(articlesData);
  countingPagination(howManyArticles);
}

getDatas();

categoriesList.addEventListener("dragstart", (e) => e.preventDefault());
categoriesList.addEventListener("mousedown", mouseDown);
categoriesList.addEventListener("mousemove", mouseMove);

paginationNext.addEventListener('click', nextPagination)
paginationPrev.addEventListener('click', prevPagination)

window.addEventListener("mouseup", mouseUp);

categoriesList.oncontextmenu = function (e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

function mouseDown(e) {
  startingPosition = e.clientX;
  sL = categoriesList.scrollLeft;

  isDragging = true;
}

function mouseMove(e) {
  if (!isDragging) return;

  const movee = startingPosition - e.clientX;
  categoriesList.scrollLeft = sL + movee;
}

function mouseUp(e) {
  isDragging = false;
}

//RENDER FUNCTIONS
function renderCategories(datas) {
  datas.forEach((data, index) => {
    const a = document.createElement("a");
    a.href = categoriesLink(data.title);
    a.innerText = data.title;

    let timeout;

    a.addEventListener("mousedown", (e) => {
      timeout = setTimeout(() => (clickableLink = false), 600);
    });
    a.addEventListener("click", (e) => {
      if (!clickableLink) {
        e.preventDefault();
      }

      clearTimeout(timeout);
      clickableLink = true;
    });

    if (data.title === categoryParam) {
      a.setAttribute("class", "active");
    }

    categoriesList.append(a);
  });
}

function renderArticles(datas) {
  if (datas.length > 0) {
    noArticle.classList.add("d-none");

    datas.forEach((data) => {
      const blog = document.createElement("a");
      blog.setAttribute("class", "blog");
      const cleanedTitle = data.title.split(" ").slice(0, 6).join(" ") + "...";
      const shortbody = data.body.split(" ").slice(0, 20).join(" ") + "...";

      blog.innerHTML = `<div class="blog-imgbox">
          <img src="${data.img}" alt="">
      </div>
      <h5>${cleanedTitle}</h5>
      <p>${shortbody}</p>
      <h6>${data.date}</h6>`;

      blogsList.append(blog);
    });
  } else {
    document
      .querySelectorAll(".blog")
      .forEach((el) => el.classList.add("d-none"));
  }
}

function countingPagination(datas) {
  const remainder = datas % 9;
  const absolute = (datas - remainder) / 9;

  const pagi = remainder ? absolute + 1 : absolute;

  let pagiNum = 1;

  let pagiPage = null;

  let pagiArray = [];

  for (let i = 0; i < pagi; i++) {
    if (pagiPage === 1) {
      pagiArrays.push(pagiArray);
      pagiArray = [];
    }

    pagiPage = pagiPage ? pagiPage : 1;
    pagiArray.push(pagiNum);

    if (pagiPage === 3) {
      pagiPage = 1;
    } else {
      pagiPage++;
    }
    if (i === pagi - 1) {
      pagiArrays.push(pagiArray);
    }
    pagiNum++;
  }

  renderPagination()()
}

function renderPagination(newactive = activePagiPage){


  return () => {
    paginationList.innerHTML = ''
    pagiArrays[newactive - 1].forEach((num) => {
      const a = document.createElement("a");
  
      a.setAttribute("type", "button");
  
      a.href =`http://localhost:5500/blog/?category=${categoryParam}&page=${num}#categories`;
  
      a.innerText = num
  
      if(pagesParam == num){
        a.setAttribute('class', 'active')
      }
  
      paginationList.append(a)


    });

  }
}

function nextPagination(){

  window.location = `http://localhost:5500/blog/?category=${categoryParam}&page=${pagiArrays[activePagiPage][0]}#categories`;

}
function prevPagination(){
  console.log(pagiArrays[activePagiPage - 2], activePagiPage)
  window.location = `http://localhost:5500/blog/?category=${categoryParam}&page=${pagiArrays[activePagiPage - 2][pagiArrays[activePagiPage - 2].length - 1]}#categories`;
}


