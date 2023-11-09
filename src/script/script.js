const modal = () =>{
    const showModal = document.querySelector(".contact__button")
    const containerModal = document.querySelector("#controller__Modal")
    const closeModal = document.querySelector(".close__Modal")
    const fade = document.querySelector(".fade")

    showModal.addEventListener('click', () =>{
        fade.style.display = 'block'
        containerModal.showModal();
        document.querySelector('html').style.position='fixed'
        
        closeModal.addEventListener('click', ()=>{
            fade.style.display = 'none'
            document.querySelector('html').style.position=''
            containerModal.closeModal();
        })  
    })
 

};
modal();


const styleModal = ()=>{
    const closeModal = document.querySelector(".close__Modal")
    const buttonModal = document.querySelector(".footer__modal button")

    buttonModal.addEventListener('mouseover', ()=>{
        buttonModal.style.background = 'var(--background-button-color-one)' 
''    

    })
    buttonModal.addEventListener('mouseout', ()=>{
        buttonModal.style.background = ''
    })
    
    closeModal.addEventListener('mouseover', ()=>{
        closeModal.style.color='var(--background-button-color-one)' 

    })
    closeModal.addEventListener('mouseout', ()=>{
        closeModal.style.color = ''
    })
    
}


styleModal();



const styleCards =()=> {
    const cards = document.querySelectorAll(".cards__item")
    const button = document.querySelectorAll(".Card__button")
    cards.forEach((cards)=>{  
        cards.addEventListener('mouseover', ()=>{
            cards.style.background = 'var(--background-button-color-one)' 
            cards.childNodes[5].style.background = 'var(--background-color-two)'

            
        })
        cards.addEventListener('mouseout', ()=>{
            cards.style.background = ''
            cards.childNodes[5].style.background = ''
        })
        
    })
      
} ;

styleCards();


const buttonContact =  document.querySelector(".contact__button")

buttonContact.addEventListener('mouseover', ()=>{
    buttonContact.style.color = 'var(--background-button-color-three)' 


    
})
buttonContact.addEventListener('mouseout', ()=>{
    buttonContact.style.color = ''
});


//Menu Hamburguer

const actionMenu = ()=>{
    const menuBurguer = document.querySelector("#menu_burguer")
    const list = document.querySelector(".container__burguer")
    menuBurguer.addEventListener("click",()=>{
      if(list.style.display == 'flex'){

          list.style.display = 'none'
      }else{
        list.style.display ='flex'
      }
    })
}

actionMenu();

