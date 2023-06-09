import { annotate } from 'https://unpkg.com/rough-notation?module';

// const primaryHeader = document.querySelector('.primary-header');
// fetch('header.html')
//   .then(response => response.text())
//   .then(data => {
//     primaryHeader.innerHTML = data;
//   })
//   .catch(error => {
//     console.error('Error loading header:', error);
//   });

// $(document).ready(function(){
  // $(".primary-header").load("header.html");
  // $(".footer").load("footer.html ");

  setTimeout(function() {
  const e = document.querySelector('#notation');
  const annotation = annotate(e, { type: 'box', color: '#5bbfe7', animationDelay: '1000' });
  annotation.show();

  const nameQuery = document.querySelector('#name-annotate');
  const nameAnnotation = annotate(nameQuery, { type: 'highlight', color: '#5bbfe7' });
  nameAnnotation.show();

   }, 200);

  const nav = document.querySelector(".primary-navigation");
  const navToggle = document.querySelector(".mobile-nav-toggle");

  navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");
    console.log(visiblity)
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
  }) ; 
// });

