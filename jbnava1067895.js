
    function atomiApplyParams({inputUrl}) {
      try {
        console.log(inputUrl)
        const inputUrlObj = new URL(inputUrl, window.location.origin);
        const currentPageParams = new URLSearchParams(window.location.search);
        const inputUrlParams = new URLSearchParams(inputUrlObj.search);
      
        // Iterate over all parameters in the current page's URL
        for (const [key, value] of currentPageParams) {
          // If the input URL does not already contain the parameter, add it
          if (!inputUrlParams.has(key)) {
            inputUrlParams.append(key, value);
          }
        }
      
        // Construct the final URL
        const finalUrl = inputUrlObj.origin + inputUrlObj.pathname + '?' + inputUrlParams.toString();
        console.log(finalUrl)
        return finalUrl;
      } catch (error) {
        console.log(error);
      }
    }

    function atomiFormatDate(options = { slated: false, addDate: 0 }) {
      try {
        const defaultOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const today = new Date();

        if (options.slated) {
          const slatedDate = new Date(today);
          slatedDate.setDate(slatedDate.getDate() + (options.addDate || 0));

          const day = slatedDate.getDate().toString().padStart(2, "0");
          const month = (slatedDate.getMonth() + 1).toString().padStart(2, "0");
          const year = slatedDate.getFullYear();
          return `${day}/${month}/${year}`;
        }

        if(options.addDate){
          today.setDate(today.getDate()+options.addDate)
        }
        const formattedDate = today.toLocaleDateString(undefined, defaultOptions);

        return formattedDate;
      } catch (error) {
        console.log(error);
      }
    };

    function atomiFormatTime() {
      try {
        const now = new Date();
        return now.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      } catch (error) {
        console.log(error);
      }
    };
    function runDelayedFunctions(data) {
      try {
        document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
        if(data?.setDisplayed){
          localStorage.setItem(data?.setDisplayed, true);
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    
      function atomiGetCookie(name) {
        try {
          let cookie = {};
          document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          })
          return cookie[name];
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        
    function atomicatEvent(data) {
      try {
        data.fbp = atomiGetCookie('_fbp');
        data.fbc = atomiGetCookie('_fbc');
        data.pid = document.body.getAttribute('data-page')?.replace("_", "");
        data.uid = document.body.getAttribute('id')?.replace("_", "");
        data.event_id = getAtomiFbEventId();
        const url = 'https://apidopro.atomicat-api.com/track/fb/conversion'
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);
      }
    }
  
        
          atomicatEvent({trigger: "load", pixel: "759927995740443"})
        fbq('trackSingle', '759927995740443', 'PageView', {}, { eventID: getAtomiFbEventId() } )
        
      } catch (error) {
        console.log(error)
      }
    })();
    (function() {
      try {
        const accordionTitles = document.querySelectorAll(".atomicat-accordion-title");
        accordionTitles.forEach((title, index) => {
          title.addEventListener("click", () => {
            // Toggle the "active" class to open/close the accordion
            title.classList.toggle("atomicat-title-active");
            const accordionContent = title.nextElementSibling;
            const toggleSymbol = title.querySelector(".atomicat-accordion-toggle");
            title.childNodes[1].childNodes[0].classList.toggle('atomicat-hidden')
            title.childNodes[1].childNodes[1].classList.toggle('atomicat-hidden')
            accordionContent.classList.toggle("atomicat-content-inactive");
             accordionContent.nextElementSibling.classList.toggle("atomicat-hidden");
          });
        });
      } catch (error) {
        console.log(error);
      }
    })();
      
    function atomiLoadSwiperCDN() {
      return new Promise((resolve, reject) => {
        if (!window.Swiper) {
          // Add CSS
          const cssLink = document.createElement('link');
          cssLink.rel = 'stylesheet';
          cssLink.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
          cssLink.onload = () => console.log('Swiper CSS loaded');
          document.head.appendChild(cssLink);

          // Add JS
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
          script.onload = () => {
            console.log('Swiper JS loaded');
            resolve();
          };
          script.onerror = () => reject(new Error('Failed to load Swiper JS'));
          document.head.appendChild(script);
        } else {
          resolve();
        }
      });
    }
  
      
      (function() {
        try {
          const atomi_slidere4fa9e1_ele = document.querySelector(".atomicat-slider-e4fa9e1")
          const atomi_slidere4fa9e1_observer = new IntersectionObserver(async (entries) => {
            entries.forEach(async (entry) => {
              console.log(entry)
              if (entry.isIntersecting) {
                try {
                  if(!document.querySelector(".swiper-e4fa9e1").classList.contains("swiper-initialized")){
                    console.log("load swiper e4fa9e1")
                    await atomiLoadSwiperCDN();
                    
      try {
        if (!window.swipers) {
          window.swipers = {};
        }
        if (window.swipers['e4fa9e1']) {
          window.swipers['e4fa9e1'].destroy(true, true);
        }
        window.swipers['e4fa9e1'] = new Swiper('.swiper-e4fa9e1', {
          loop: true,
          autoplay: { delay: 2000, pauseOnMouseEnter: false },
          speed: 400,
          spaceBetween: 10,
          direction: 'horizontal',
          navigation: {
            nextEl: '.swiper-e4fa9e1 .swiper-button-next',
            prevEl: '.swiper-e4fa9e1 .swiper-button-prev',
          },
          pagination: {
            el: '.swiper-e4fa9e1 .swiper-pagination',
            clickable: true,
          },
          slidesPerView: 3,
          slidesPerGroup: 1,
          breakpoints: {
            300: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          },
        });
      } catch (error) {
        console.log("swiper init error....");
        console.log(error);
      }
    
                    document.querySelector(".swiper-e4fa9e1").classList.remove("atomicat-hidden")
                  }
                } catch (error) {
                  console.error('Error initializing Swiper:', error);
                }
                atomi_slidere4fa9e1_observer.disconnect(); // Stop observing after initialization
              }
            });
          });

          atomi_slidere4fa9e1_observer.observe(atomi_slidere4fa9e1_ele);
        } catch (error) {
          console.log(error);
        }
      })();
      

      (function() {
        try {
          const atomi_slider941b0e8_ele = document.querySelector(".atomicat-slider-941b0e8")
          const atomi_slider941b0e8_observer = new IntersectionObserver(async (entries) => {
            entries.forEach(async (entry) => {
              console.log(entry)
              if (entry.isIntersecting) {
                try {
                  if(!document.querySelector(".swiper-941b0e8").classList.contains("swiper-initialized")){
                    console.log("load swiper 941b0e8")
                    await atomiLoadSwiperCDN();
                    
      try {
        if (!window.swipers) {
          window.swipers = {};
        }
        if (window.swipers['941b0e8']) {
          window.swipers['941b0e8'].destroy(true, true);
        }
        window.swipers['941b0e8'] = new Swiper('.swiper-941b0e8', {
          loop: true,
          autoplay: { delay: 2000, pauseOnMouseEnter: false },
          speed: 400,
          spaceBetween: 10,
          direction: 'horizontal',
          navigation: {
            nextEl: '.swiper-941b0e8 .swiper-button-next',
            prevEl: '.swiper-941b0e8 .swiper-button-prev',
          },
          pagination: {
            el: '.swiper-941b0e8 .swiper-pagination',
            clickable: true,
          },
          slidesPerView: 3,
          slidesPerGroup: 1,
          breakpoints: {
            300: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          },
        });
      } catch (error) {
        console.log("swiper init error....");
        console.log(error);
      }
    
                    document.querySelector(".swiper-941b0e8").classList.remove("atomicat-hidden")
                  }
                } catch (error) {
                  console.error('Error initializing Swiper:', error);
                }
                atomi_slider941b0e8_observer.disconnect(); // Stop observing after initialization
              }
            });
          });

          atomi_slider941b0e8_observer.observe(atomi_slider941b0e8_ele);
        } catch (error) {
          console.log(error);
        }
      })();
      

      (function() {
        try {
          const atomi_sliderd5dc252_ele = document.querySelector(".atomicat-slider-d5dc252")
          const atomi_sliderd5dc252_observer = new IntersectionObserver(async (entries) => {
            entries.forEach(async (entry) => {
              console.log(entry)
              if (entry.isIntersecting) {
                try {
                  if(!document.querySelector(".swiper-d5dc252").classList.contains("swiper-initialized")){
                    console.log("load swiper d5dc252")
                    await atomiLoadSwiperCDN();
                    
      try {
        if (!window.swipers) {
          window.swipers = {};
        }
        if (window.swipers['d5dc252']) {
          window.swipers['d5dc252'].destroy(true, true);
        }
        window.swipers['d5dc252'] = new Swiper('.swiper-d5dc252', {
          loop: true,
          autoplay: { delay: 2000, pauseOnMouseEnter: false },
          speed: 300,
          spaceBetween: 10,
          direction: 'horizontal',
          navigation: {
            nextEl: '.swiper-d5dc252 .swiper-button-next',
            prevEl: '.swiper-d5dc252 .swiper-button-prev',
          },
          pagination: {
            el: '.swiper-d5dc252 .swiper-pagination',
            clickable: true,
          },
          slidesPerView: 3,
          slidesPerGroup: 1,
          breakpoints: {
            300: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          },
        });
      } catch (error) {
        console.log("swiper init error....");
        console.log(error);
      }
    
                    document.querySelector(".swiper-d5dc252").classList.remove("atomicat-hidden")
                  }
                } catch (error) {
                  console.error('Error initializing Swiper:', error);
                }
                atomi_sliderd5dc252_observer.disconnect(); // Stop observing after initialization
              }
            });
          });

          atomi_sliderd5dc252_observer.observe(atomi_sliderd5dc252_ele);
        } catch (error) {
          console.log(error);
        }
      })();
      
    