document.addEventListener("DOMContentLoaded", () => {
  lenis();
  cursorMove();
  mainButton();
  tagBreak();
  homeReveal();
  secondReveal();
  thirdReveal();
  tabHoriScroll();
  fourthReveal();
  hrAnimate();
  fifthReveal();
  footerReveal();
  tagHover();
  cursorScale();
  logoHover();
  imgsHover();
  rowSlide();
  socialHover();
  transition1();
  transition2();
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

function homeReveal() {
  const tagTextElements = document.querySelectorAll(".tagText");
  const homeLogo = document.querySelectorAll(".homelogo");
  const subtag = document.querySelector(".subtag");
  const last = document.querySelectorAll(".last");
  const mainButton = document.querySelectorAll(".mainButton");

  const tl = gsap.timeline()

  tl.from(tagTextElements, {
    y: 50,
    opacity: 0,
    ease: "bounce.out",
    delay: 0.7,
    duration: 1,
    stagger: 0.05
  });

  tl.from(subtag, {
    y: 15,
    opacity: 0,
    ease: "elastic.out(1.5, 1)",
    duration: 0.7,
  });

  tl.from(last, {
    scale: 0.5, 
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  }, 'apple')

  tl.from(mainButton, {
    scale: 0.5, 
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  }, 'apple')

  tl.from(homeLogo, {
    scale: 0.5, 
    opacity: 0,
    duration: 0.6,
    ease: "elastic.out(1, 1)",
  }, 'apple')
}

function thatsWhyBreak(ele) {
  const text = ele.textContent.split(" ").map(words => `<span>${words}</span>`).join(" ");
  ele.innerHTML = text;
  return ele.querySelectorAll("span");
}

function secondReveal() {

  const why = document.querySelector(".why");
  const thatsWhy = document.querySelector(".thatsWhy");

  const broken = thatsWhyBreak(thatsWhy);
  
  gsap.from(why, {
    y: 30,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
      trigger: why,
      start: "top 70%",
      end: "top 40%",
      scrub: 2
    }
  })

  gsap.from(broken, {
    y: 100,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: broken,
      start: "top 80%",
      end: "top 20%",
      scrub: 2
    }
  })
}

function thirdReveal() {
  const text = document.querySelector(".everything");

  gsap.from(text, {
    y: 60,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: text,
      start: "top 50%",
    }
  })
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
      end: () => `+=${container.offsetWidth}`
    }
  })
}

function fourthReveal() {
  const join = document.querySelectorAll(".join");
  const joinDesc = document.querySelector(".joinDesc");
  const joinImg = document.querySelector(".joinImg");
  const block = document.querySelectorAll(".block");
  const block1 = document.querySelectorAll(".block1");

  gsap.from(join, {
    y: 50,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    stagger: 0.05,
    scrollTrigger: {
      trigger: join,
      start: "top 70%",
    }
  })

  gsap.from(joinDesc, {
    y: 15,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: joinDesc,
      start: "top 70%",
    }
  })

  gsap.from(joinImg, {
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    scrollTrigger: {
      trigger: joinImg,
      start: "top 70%",
    }
  })

  gsap.from(block1, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: block,
      start: "top 60%",
    }
  })

  gsap.from(block, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    delay: 0.1,
    scrollTrigger: {
      trigger: block,
      start: "top 60%",
    }
  })
}

function hrAnimate() {
  const hr = document.querySelector('.hr')

  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(hr, 
    { scaleX: 0 }, 
    {
      scaleX: 1,
      scrollTrigger: {
        trigger: hr,
        start: "top 80%",
      }
    }
  );
}

function fifthReveal() {
  const title = document.querySelector(".millionsTitle");
  const subText = document.querySelector(".millionsSubText");

  gsap.from(title, {
    y: 50,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: title,
      start: "top 70%",
    }
  })

  gsap.from(subText, {
    y: 15,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: subText,
      start: "top 70%",
    }
  })
}

function footerReveal() {
  const social = document.querySelectorAll(".social");
  const connect = document.querySelector(".connect");
  const logo = document.querySelector(".footerLogo");
  const footerImg = document.querySelector(".footerImg");
  const linkHead = document.querySelectorAll(".link-heading");
  const linkLink = document.querySelectorAll(".link-link");

  console.log(linkLink)

  gsap.from(logo, {
    y: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: footer,
      start: "top 30%",
    }
  })


  gsap.from(connect, {
    y: -50,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: connect,
      start: "top 10%",
    }
  })

  gsap.from(social, {
    y: -50,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    stagger: 0.05,
    scrollTrigger: {
      trigger: connect,
      start: "top top",
    }
  })

  gsap.from(footerImg, {
    x: -100,
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: footerImg,
      start: "top 40%",
    }
  })

  gsap.from(linkHead, {
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    stagger: 0.05,
    scrollTrigger: {
      trigger: linkHead,
      start: "top 70%",
    }
  })

  gsap.from(linkLink, {
    opacity: 0,
    ease: "power2.out",
    duration: 0.5,
    stagger: 0.01,
    scrollTrigger: {
      trigger: linkLink,
      start: "top 70%",
    }
  })
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
  // const mainLogo = document.querySelector(".mainLogo");
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