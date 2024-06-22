document.addEventListener("DOMContentLoaded", () => {
  lenis();
  cursorMove();
  mainButton();
  tagBreak();
  tagHover();
  cursorScale();
  logoHover();
  imgsHover();
  rowSlide();
});

function lenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });
  
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
}

function cursorMove() {
  const main = document.querySelector("#main");
  const cursor = document.querySelector("#cursor");

  main.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX - cursor.clientWidth / 2 - 2,
      y: e.clientY - cursor.clientHeight / 2 - 2,
      duration: 0.3,
      ease: "power2.out"
    });
  });
}

function tagBreak() {
  const tags = document.querySelectorAll(".tag");

  tags.forEach(tag => {
    const tagText = tag.textContent.split("").map(letter => `<span class="tagText">${letter}</span>`).join("");
    tag.innerHTML = tagText;
  });
}

function tagHover() {
  const tagTextElements = document.querySelectorAll(".tagText");

  tagTextElements.forEach(tag => {
    tag.addEventListener("mouseenter", () => {
      gsap.to(tag, {
        fontSize: '1.3em',
        transformOrigin: 'center center',
        padding: '0 5px',
        color: '#0081f2',
        duration: 0.25
      });
    });

    tag.addEventListener("mouseleave", () => {
      gsap.to(tag, {
        fontSize: '1em',
        scale: 1,
        padding: '0',
        color: 'white',
        duration: 0.25
      });
    });
  });
}

function cursorScale() {
  const tagTextElements = document.querySelectorAll(".tagText");

  tagTextElements.forEach(tag => {
    tag.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.2
      });
    });

    tag.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2
      });
    });
  });
}

function mainButton() {
  const mainButtons = document.querySelectorAll(".mainButton");
  const cursor = document.querySelector("#cursor");

  mainButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 0.5,
        duration: 0.2
      });
      gsap.to(button, {
        x: Math.random() * 10 - 2,
        y: Math.random() * 10 - 2,
        rotation: Math.random() * 10 - 2,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2
      });
      gsap.to(button, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  })
}

// function imgHover() {
//   const div1 = document.querySelectorAll('.div1');
//   const logo1 = document.querySelectorAll('.logo1');
//   const logos = document.querySelector('.logos');

//   logos.addEventListener('mousemove', (event) => {
//     logo1.forEach(logo => {
//       let rect = logo.getBoundingClientRect();
//       let logoWidth = rect.width;
//       let logoHeight = rect.height;
//       let parentRect = logo.parentElement.getBoundingClientRect();

//       let newX = gsap.utils.mapRange(
//         0,
//         parentRect.width,
//         -logoWidth / 2,
//         parentRect.width - logoWidth,
//         event.clientX - parentRect.left
//       );

//       let newY = gsap.utils.mapRange(
//         0,
//         parentRect.height,
//         -logoHeight / 2,
//         parentRect.height - logoHeight,
//         event.clientY - parentRect.top
//       );

//       gsap.to(logo, {
//         x: newX,
//         y: newY,
//         duration: 0.5,
//         ease: "power2.out"
//       });
//     });
//   });
// }

function logoHover() {
  const logo = document.querySelector(".logo");
  const cursor = document.querySelector("#cursor");

  logo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 2,
      duration: 0.25
    });
  });

  logo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.25
    });
  });
}

function imgsHover() {
  const imgs = document.querySelectorAll(".imggg");
  const cursor = document.querySelector("#cursor");

  imgs.forEach(img => {
    img.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.25
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.25
      });
    });
  });
}

function rowSlide() {
  const row1 = document.querySelector("#row1");
  const row2 = document.querySelector("#row2");
  const row3 = document.querySelector("#row3");

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(row1, {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: row1,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
      ease: "power2.out"
    }
  });

  gsap.from(row2, {
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: row2,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
      ease: "power2.out"
    }
  });
  
  gsap.from(row3, {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: row3,
      start: "top 90%",
      end: "top 60%",
      scrub: true,
      ease: "power2.out"
    }
  });

  gsap.from(row1, {
    x: 0,
    opacity: 1,
  })

  gsap.from(row2, {
    x: 0,
    opacity: 1,
  })

  gsap.from(row3, {
    x: 0,
    opacity: 1,
  })

  gsap.to(row1, {
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: row1,
      start: "bottom 30%",
      end: "bottom 5%",
      scrub: true,
      ease: "power2.in"
    }
  })

  gsap.to(row2, {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: row2,
      start: "bottom 30%",
      end: "bottom 5%",
      scrub: true,
      ease: "power2.in"
    }
  });

  gsap.to(row3, {
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: row3,
      start: "bottom 30%",
      end: "bottom 5%",
      scrub: true,
      ease: "power2.in"
    }
  });
}