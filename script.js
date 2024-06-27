document.addEventListener("DOMContentLoaded", () => {
  lenis();
  cursorMove();
  mainButton();
  tagBreak();
  tagHover();
  cursorScale();
  logoHover();
  imgsHover();
  tabHoriScroll();
  transition1();
  transition2();
  rowSlide();
  socialHover();
});

window.addEventListener("mousemove", handleMouseMove);

gsap.registerPlugin(ScrollTrigger);

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

function tabHoriScroll() {
  const container = document.querySelector("#tabs");
  const sections = gsap.utils.toArray(".sec");

  gsap.to(sections, {
    xPercent: -100 * ((sections.length + 1) - 1),
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      start: "top top",
      scrub: 1,
      end: '+=6000'
    }
  })
}

function rowSlide() {
  const row1 = document.querySelector("#row1");
  const row2 = document.querySelector("#row2");
  const row3 = document.querySelector("#row3");

  gsap.from(row1, {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: row1,
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
      ease: "power2.out"
    }
  });

  gsap.from(row2, {
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: row2,
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
      ease: "power2.out"
    }
  });
  
  gsap.from(row3, {
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: row3,
      start: "top 90%",
      end: "top 70%",
      scrub: 1,
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
      scrub: 1,
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
      scrub: 1,
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
      scrub: 1,
      ease: "power2.in"
    }
  });
}

function handleMouseMove(event) {
  const { clientX, clientY } = event;
  
  const moveX = (clientX / window.innerWidth - 0.5) * 30;
  const moveY = (clientY / window.innerHeight - 0.5) * 30;


  gsap.to(".logo1", {
    x: moveX,
    y: moveY,
    duration: 0.3,
    ease: "power2.out"
  });

  gsap.to(".logo2", {
    x: -moveX,
    y: -moveY,
    duration: 0.3,
    ease: "power2.out"
  });
}

function socialHover() {
  const instagram = document.querySelector(".instagram");
  const twitter = document.querySelector(".twitter");
  const linkedin = document.querySelector(".linkedin");
  const facebook = document.querySelector(".facebook");
  const youtube = document.querySelector(".youtube");

  const cursor = document.querySelector("#cursor");

  instagram.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 0,
      duration: 0.25,
    });
    gsap.to(instagram, {
      color: '#e1326d'
    })
  });

  instagram.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.25
    });
    gsap.to(instagram, {
      color: 'white'
    })
  });

  twitter.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 0,
      duration: 0.25,
    });
    gsap.to(twitter, {
      color: '#1da1f2'
    })
  });

  twitter.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.25
    });
    gsap.to(twitter, {
      color: 'white'
    })
  });

  linkedin.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 0,
      duration: 0.25,
    });
    gsap.to(linkedin, {
      color: '#126bc4'
    })
  });

  linkedin.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.25
    });
    gsap.to(linkedin, {
      color: 'white'
    })
  });

  facebook.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 0,
      duration: 0.25,
    });
    gsap.to(facebook, {
      color: '#106afe'
    })
  });

  facebook.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.25
    });
    gsap.to(facebook, {
      color: 'white'
    })
  });

  youtube.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      scale: 0,
      duration: 0.25,
    });
    gsap.to(youtube, {
      color: '#ff0808'
    })
  });

  youtube.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      duration: 0.25
    });
    gsap.to(youtube, {
      color: 'white'
    })
  });
}

function transition1() {
  const transition = document.querySelector("#transition1");

  gsap.to(transition, {
    backgroundColor: "white",
    scrollTrigger: {
      trigger: transition,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      ease: "power2.out"
    }
  })
}


function transition2() {
  const transition = document.querySelector("#transition2");

  gsap.to(transition, {
    backgroundColor: "#101010",
    scrollTrigger: {
      trigger: transition,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      ease: "power2.out"
    }
  })
}