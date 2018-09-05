// -----------JQUERY

$(document).ready(function() {
    $('.scroll').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 2500; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
        
    });
    // $(window).scroll(function(){
    //   var scrolltop = $(document).scrollTop();//function scroll  
    //   console.log(scrolltop);//Affichage du numero de scroll 
    //   if ((scrolltop > 851) && (scrolltop < 1628)){//Condition du defilement (hauteur)
    //     $('header .header-menu a').addClass('black');//Ajout de class pour changer la couleur du texte au niveau du scroll
    //      $('header .header-logo').addClass('black');
        
    //     }
    //     else if ((scrolltop > 1628) && (scrolltop < 2573)){//Condition du defilement (hauteur)
    //         $('header .header-menu a').removeClass('black');//Ajout de class pour changer la couleur du texte au niveau du scroll
    //          $('header .header-logo').removeClass('black');
            
    //         }
    //         else if ((scroll > 2574) && (scroll < 3700)){//Condition du defilement (hauteur)
    //             $('header .header-menu a').addClass('black');//Ajout de class pour changer la couleur du texte au niveau du scroll
    //             //  $('header .header-logo').addClass('black');ajout de la class black
                
    //             }
    //     else {
    //         $('header .header-menu a').removeClass('black');//sinon enleve class black
    //         $('hedear .header-logo').removeClass('black');//sinon enleve la class black
    //     }
    // })
    $(window).scroll(function(e){
        let scrollTop = $(window).scrollTop();
        let documentHeight = $(document).height();
        let windowHeight = $(window).height();
        let numberScroll = (scrollTop) / (documentHeight - windowHeight);
        let pourcentage = Math.round(numberScroll * 100 );
        console.log(pourcentage +'%');
                if(pourcentage == 98){
                    pourcentage += + 2;
                }
        $('.scrollBar').css('width', pourcentage + '%');
        if (pourcentage > 21 && pourcentage < 30) {
            $('.header').addClass('header-black');
            $('.header-logo').addClass('header-display');
            $('.header-menu a ').addClass('display');
        }
        else {
            $('.header').removeClass('header-black');
            $('.header-logo').removeClass('header-display');
            $('.header-menu a ').removeClass('display');
            
        } 
       
    });

});

    // $(window).fadeIn(function(){
    //     var fade = $(document).fadeIn();
    //     $(container .columns .fab).fadeIn(){

    //     }
    // })
    // --------------------JQUERY


// ----------JAVASCRIPT*

        //   SCROLL BAR PROGRESSION

// const body = document.querySelector('body');//constante body au query (balise : body)
// const scrollBar = document.querySelector('.scrollBar');//constante scrollBar a à la class scrollBar
// const scrollBartLeft = document.querySelector('.scrollBarLeft');//constante scrollLeft à la class (.crollBarLeft)

// window.addEventListener('scroll', ()=>{//ecoute de l'evenement (scroll)
//     let scroll= window.scrollY /(body.clientHeight - window.innerHeight);//calcul de la taille de l'ecran en scroll, diviser par la taille de la fentre (en poucentage)
//     let pourcentage = (Math.round(scroll * 100 ));//on multiplies par 100 pour recuperer le porucentage sur une base de 100%
//     console.log(Math.round(scroll * 100));//on arrondi le porcentage example 96.58 = 97%
//     scrollBar.style.width= pourcentage + '%' ;//ajout de style largeur(.style.width en lui ajoutant des pourcentage sur la whidth ('%')
//     scrollBartLeft.style.height = pourcentage + '%';//ajout de style sur la hauteur par rapport au pourcentage du scroll
// })
        //   SCROLL BAR PROGRESSION



// ----------JAVASCRIPT*



