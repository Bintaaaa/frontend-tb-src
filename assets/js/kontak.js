const iconCon = document.getElementById('kontak-iconcon')
const tabCon = document.querySelector('.tab-content')

iconCon.addEventListener('click', switchTab)


function switchTab(e){

    if(!e.target.closest('.kontak-icon')){
        return;
    }

    const newIcon = e.target.closest('.kontak-icon')
    const currentActiveIcon = iconCon.querySelector('.active')

    if(newIcon === currentActiveIcon)return;

    newIcon.classList.add('active')
    currentActiveIcon.classList.remove('active')
    

    tabCon.querySelector('.show').classList.remove('active', 'show')
    document.getElementById(newIcon.dataset.target).classList.add('active', 'show')
    

}