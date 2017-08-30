function initMenu() {
    var clearSetTimeout;
    var menuDelay = 200;
    $('.js-menu-category .menu_categories li a').on( 'mouseover', function(e){
        var __self = this;
        var _e = e;
        // $('body').addClass('modal-open');
        clearSetTimeout = setTimeout(function() {
            var fade = 0;
            if (!globalSetting.menuFirstOpen) { fade = 300; globalSetting.menuFirstOpen = true; menuDelay = 0; }
            else fade = 0;
            if ($(__self).data('index') == undefined ) _e.preventDefault();
            else {
                //находим нужную вкладку
                var thisTab = $('.js-menu-category-content').find("[data-index='" + $(__self).data('index') + "']")
                var thisTabActivIndex = $('.js-menu-category').find('.menu_categories').find('.active').data('index');
                var thisTabActiv= $('.js-menu-category-content').find("[data-index='" + thisTabActivIndex + "']")

                //добавление активного пункта меню
                $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').addClass('no-active');
                $(__self).addClass('active').removeClass('no-active');

                //показываем ее и скрываем остальные
                if (thisTabActivIndex == undefined) {
                    thisTab.toggle().addClass('rver');
                }

                thisTabActiv.slideUp({
                    duration: 0,
                    complete: function(){
                        thisTab.slideToggle(0).removeClass('rver');
                    }
                });

                // thisTab.slideToggle(fade).siblings().slideToggle(0);
                thisTab.find('.js-menu-hover').children().first().addClass('active').siblings().removeClass('active');
                thisTab.find('.wrapp_content').css("display","none");
                thisTab.find('.wrapp_content').first().css("display","inline-block");

            }
        }, menuDelay);

    });

    $('.js-menu-category .menu_categories li a.menu-no').on('mouseover', function (e) {
        clearTimeout(clearSetTimeout);
        menuDelay = 200;
        $('.js-menu-category-content-item').fadeOut(0);
        $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').removeClass('no-active');
    });

    $('.js-menu-category .menu_categories li a').on( 'mouseleave', function(e){
        clearTimeout(clearSetTimeout);
        globalSetting.menuFirstOpen = false;
    });

    $('.js-menu-category').on( 'mouseleave', function(e){
        clearTimeout(clearSetTimeout);
        // $('body').removeClass('modal-open');
        menuDelay = 200;
        $('.js-menu-category-content-item').fadeOut(0);
        $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').removeClass('no-active');

    });

    //ховеры на табы слева
    $('.js-left-menu-hover').on('mouseenter', function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.js-menu-category-content-item').find('.wrapp_content').css("display","none");
        $('.js-menu-category-content-item').find("[data-tab-content='" + $(this).data('tab') + "']").css("display","inline-block");
    });

    // ховеры на пункты меню
    $('.js-menu-item-hover .menu-center ul li a').on('mouseenter', function(){
        $('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').addClass('no-active');
        $(this).addClass('active').removeClass('no-active');
    })
    $('.js-menu-item-hover').on('mouseleave', function(){
        $('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').removeClass('no-active');
    })
}

// function initStickyHeader() {
//     $('.sticky').Stickyfill();
// }

function initTabsCardProductInfo() {
    $('ul.tabs-menu li').click(function(){
        var tab_id = $(this).attr('data-tabs');

        $('ul.tabs-menu li').removeClass('current-s');
        $('.tab-content-s').removeClass('current-s');

        $(this).addClass('current-s');
        $("#"+tab_id).addClass('current-s');
    })
}

function initTabsTableProductInfo() {
    $('ul.tabs-menu-table li').click(function(){
        var tab_id = $(this).attr('data-tabs');

        $('ul.tabs-menu-table li').removeClass('current-s');
        $('.tab-table-content-s').removeClass('current-s');

        $(this).addClass('current-s');
        $("#"+tab_id).addClass('current-s');
    })
}

function initDropShow () {
    $('.js-drop-open').each(function() {
        $(this).on('click', function() {
            if($(this).hasClass('upOpen')){
                $(this).removeClass('upOpen');
                $(this).find('.wrapper-accordion').slideUp(300);
                $(this).find('.icon-arrow').removeClass('up-arrow');
            }else{
                $(this).addClass('upOpen');
                $(this).find('.wrapper-accordion').slideDown(300);
                $(this).find('.icon-arrow').addClass('up-arrow');
            }
        })
    })
}

function initSliderText() {
    var swiper = new Swiper('.container-slider-swiper', {
        slidesPerView: "auto",
        paginationClickable: true,
        spaceBetween: 10,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
}

function initMasonryNews(){

    setTimeout(function () {
        $('.wrapper-news-list').masonry({
            // options
            itemSelector: '.wrapper-news-list_item'
        });

        $('.wrapper-menu-map').masonry({
            // options
            itemSelector: '.wrapper-menu-map_list'
        });
    },1000);

}

function initSliderProduct() {
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        loop:true,
        loopedSlides: 5,
    });

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 15,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop:true,
        loopedSlides: 5,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
}

function initTelefon() {
    $('.block-header-telefon').on( 'mouseover', function(e){
        $('.container-telefon').fadeIn();
    });

    $('.container-telefon').on( 'mouseleave', function(e){
        $(this).fadeOut();
    });

    $('.block-header-telefon').on( 'mouseleave', function(e){
        $('.container-telefon').fadeOut();
    });
}

function focusInput() {
    var inputFocus = $('.input-box');
    var inputLabel = $('.input-label');

    $(inputFocus).on('focus', function () {
        $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).addClass('label-focus');
        $(this).css('border', '2px solid #002855')
    });

    $(inputFocus).on('focusout', function () {
        if (this != null && this.value.length == 0){
            $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).removeClass('label-focus');
            $(this).css('border', '1px solid #ced5db')
        }else {
            $(this).parents().closest('.box-input').find('.form-label').find(inputLabel).addClass('label-focus');
            $(this).css('border', '1px solid #ced5db')
        }
    });
}

function initSliderR() {
    var swiper = new Swiper('.container-slider-rigth', {
        slidesPerView: 3,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        initialSlide: 1,

        breakpoints: {
            1024: {
                slidesPerView: 2,
                centeredSlides: false,
                initialSlide: 0,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
}

function initSliderSmall() {
    var swiper = new Swiper('.wrapper-slider-small', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
    });
}

function initSliderList() {
    var swiper = new Swiper('.wrapper-slider-list', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
    });
}

function initSliderTimerBig() {
    $('.container-slider-timer-big').sangarSlider2({
        timer :  true,
        pagination : 'content-horizontal',
        paginationContent : ["img/nav-slider-1.png", "img/nav-slider-2.png", "img/nav-slider-3.png", "img/nav-slider-4.png"],
        paginationContentType : 'image',
        paginationContentWidth : 65,
        paginationImageHeight : 65,
        themeClass : 'default',
        fullWidth : true,
        fullHeight : true,
    });
}

function initSliderTimerSmall() {
    $('.container-slider-timer-small').sangarSlider({
        timer :  true,
        pagination : 'content-horizontal',
        paginationContent : ["img/nav-slider-1.png", "img/nav-slider-2.png", "img/nav-slider-3.png", "img/nav-slider-4.png"],
        paginationContentType : 'image',
        paginationContentWidth : 65,
        paginationImageHeight : 65,
        themeClass : 'default',
        fullWidth : true,
        fullHeight : false,
        height : 405, // slideshow height
    });
}

function initScrollOrdering() {
    Revealator.effects_padding = '180';
}

function initscrollHeader() {
    var headerTopHeight = 50;

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if (st > headerTopHeight) {
            $('.container-header-top').css('margin-top', '-50px');
            $('.container-main-big .sangar-timer').css('top', '0');
        } else {
            $('.container-header-top').css('margin-top', '0');
            $('.container-main-big .sangar-timer').css('top', '128px');
        }
    });
}

function initNoClass() {
    $('.revealator-duration10').each(function() {
        $(this).addClass('no-anim');
    })
}

function initSelect() {
    var closeSelect = $(".select2").select2();
    $(".select2").select2();

    // $(document).mouseup(function (e){ // событие клика по веб-документу
    //     var div = $(".w-p"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         closeSelect.select2("close");
    //     }
    // });
}

function initSearchMapSite() {
    function initMasonry(){
        $('.wrapper-menu-map').masonry({
            // options
            itemSelector: '.wrapper-menu-map_list'
        });
    }
    $('.js-search-open-map-site').on('click', function() {
        $('.js-map-site').fadeIn(250);
        $('body').addClass('modal-open');
        initMasonry({
            initLayout: true
        });
        setTimeout(function () {
            $('.wrapper-menu-map').css({
                "opacity":"1"
            })
        }, 500);
    });

    $('.js-search-close-map').on('click', function() {
        $('.js-map-site').fadeOut(250);
        $('.map-site-content_list').css({
            "opacity":"0"
        });
        $('body').removeClass('modal-open');
    });
}

function initSetting() {
    globalSetting.menuFirstOpen = false;
    globalSetting.menuOtherDel1 = false;
}
var globalSetting = [];


if ($(window).width() < 1024) { initNoClass(); }
$(window).on('resize', function() {
    if ($(window).width() < 1024) {
        initNoClass();
    }
});



initSetting();
initMenu();
initTabsCardProductInfo();
initDropShow();
initTabsTableProductInfo();
initSliderText();
initMasonryNews();
initSliderProduct();
// initTelefon();
initScrollOrdering();
focusInput();
initSliderR();
initSliderSmall();
initSliderTimerSmall();
initSliderTimerBig();
initscrollHeader();
initSliderList();
initSelect();
initSearchMapSite();