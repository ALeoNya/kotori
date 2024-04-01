// $(document).on('click', '.js-menu', function () {
//     $(this).toggleClass('is-active');
//     if ($(this).hasClass('is-active')) {
//       $('.js-header').addClass('is-active');
//       $('.header__logo').addClass('is-active');
//       $('body').css({
//         'overflow': 'hidden'
//       });
//       setTimeout(() => {
//         navAniAppear();
//       }, 100)
//     } else {
//       navAniLeave();
//       $('.js-header').addClass('is-close');
//       $('body, html').css({
//         'overflow': ''
//       });

//       setTimeout(() => {
//         $('.js-header').removeClass('is-active');
//         $('.header__logo').removeClass('is-active');

//         setTimeout(() => {
//           $('.js-header').removeClass('is-close');
//           $('.nav-ani').removeClass('is-leave');
//           $(".nav-ani").removeClass('is-ani')
//         }, 500)
//       }, 250)
//     }
//   });

// function navAniAppear() {
//     const $menuItem = $(".nav-ani");
//     menuTimer = setTimeout(function () {
//       $menuItem.each(function (i) {
//         menuItemTimer = setTimeout(function () {
//           $menuItem.eq(i).addClass('is-ani');
//         }, 50 * i);
//       });
//     }, 100);
//   }
  
//   function navAniLeave() {
//     const $menuItem = $(".nav-ani");
//     menuTimer = setTimeout(function () {
//       $menuItem.each(function (i) {
//         menuItemTimer = setTimeout(function () {
//           $menuItem.eq($menuItem.length - 1 - i).addClass('is-leave');
//         }, 50 * i);
//       });
//     }, 10);
//   }
