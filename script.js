const locoMotiveAnimation=()=>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}



const loadingAnimation=()=>{
    let tl=gsap.timeline()



    // tl.to("#loader",{
    //     display:"none"
    // })

tl.from(".line h1",{
    y:170,
    duration:0.6,
    stagger:0.25,
    delay:0.5,
   
})


tl.from("#line1-part1",{
    opacity:0,
    onStart:()=>{
        const h5Timer=document.querySelector('#line1-part1 h5')
let grow=0
setInterval(() => {
    if(grow<100){

        h5Timer.innerHTML=grow++
    }
    else{
        h5Timer.innerHTML=100
    }
}, 20);
    }
})
tl.from(".line #wait",{
    opacity:0,
    
})
tl.to(".line h2",{
animationName:"nowAnimation",
  opacity:1
})



tl.to("#loader",{

    height:"0%",
    padding:"0 auto",
    duration:0.6,
    delay:1.1,
    
    ease:Power4,
   
})
tl.from("#nav",{
    opacity:0
})
tl.from("#hero1" ,{
    opacity:0
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
     y:170,
     stagger:0.2,
})

tl.to("#loader",{
    display:"none"
})


}

const customCursor=()=>{

    document.addEventListener('mousemove',(dets)=>{
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
        
    })


   let videoContainer= document.querySelector('#video-container')
   let cursor = document.querySelector('#video-cursor');

   let videoCover=document.querySelector("#video-container-img")
   let video=document.querySelector("#video-container video")
   
    
    
   let cursorWidth = cursor.offsetWidth;
   let cursorHeight = cursor.offsetHeight;
       
  
   videoContainer.addEventListener('mouseenter',()=>{
    gsap.to("#crsr",{
        opacity:0
      })
 
    videoContainer.addEventListener('click',()=>{
      if(!video.paused){
        video.pause()
        gsap.to(videoCover,{
            opacity:1
          })

          gsap.to('#video-cursor',{
            scale:1
        })

        cursor.innerHTML=' <i class="ri-play-large-fill"></i>'
      }
      else{
        video.play()
        gsap.to(videoCover,{
            opacity:0
          })

          gsap.to('#video-cursor',{
            scale:0.5
        })

        cursor.innerHTML='<i class="ri-pause-large-line"></i>'
      }
    })

    videoContainer.addEventListener('mousemove',(e)=>{
        
        let rect = videoContainer.getBoundingClientRect();
        
        let mouseX = e.clientX - rect.left; 
        let mouseY = e.clientY - rect.top;
        gsap.to('#video-cursor',{
            left: mouseX - cursorWidth / 2,
            top: mouseY - cursorHeight / 2,
        })
     

    })
    })


    videoContainer.addEventListener('mouseleave',()=>{
        gsap.to("#crsr",{
            opacity:1
          })
          gsap.to(videoCover,{
            opacity:1
          })
          video.pause()
            gsap.to('#video-cursor',{
                top:" -10%",
                left: "75%",
                scale:1
            })
      
        })
}



const sheryAnimation=()=>{
   

 
    Shery.imageEffect('.card .img-div',{
        style: 2,
        config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-10},"mousemove":{"value":3},"modeA":{"value":1},"modeN":{"value":3},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"1","range":[1,9]},"aspect":{"value":0.7272749866888861},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.6,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.37,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]},"a":{"value":1.37,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]}},
        gooey: true,
   
      
    })

}
let isOpen = 0;

const navbarAnimation = () => {

  const navTl = gsap.timeline();
  if (isOpen === 0) {
    isOpen = 1;
    
    navTl.from('#navpage', {
        opacity:0,
        
   }).to('#navpage', {
      opacity: 1,
      padding: "3vw"
    }).to('#navpage', {
      height: "100vh",
      duration: 0.8
    }).from('.nav-option', {
      y: '200px',
      duration: 0.6,
      stagger: 0.15
    }).from('.navpage-box', {
      opacity: 0,
      duration: 0.6
    });
     
   
  } else {
    isOpen = 0;

   navTl.to('#navpage', {
      height: "0",
      duration: 0.8,
     padding:0 ,
    //  opacity:0.5
    })
    .to('#navpage', {
         opacity:0,
         display:none
    })
   

  }


 
};

document.querySelector('#menu-svg').addEventListener('click', () => {
   

    isOpen===0?
    gsap.to('.close', {
      opacity: 0,
    
    }) 
      :
    gsap.to('.close', {
      opacity: 1,
     
    })
    navbarAnimation()
});



// for  magent hover effect
const items=document.querySelectorAll(".gravity")

items.forEach(item => {


    const updateBoundingRect = () => item.getBoundingClientRect();

    
    item.addEventListener('mousemove', (e) => {
        const boundingRect = updateBoundingRect();

        //set x and y center of item
        const itemCenterX = boundingRect.left + boundingRect.width / 2;
        const itemCenterY = boundingRect.top + boundingRect.height / 2;


        //calculating distace between page item
        const distanceX = e.pageX - itemCenterX;
        const distanceY = e.pageY - itemCenterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // Set a threshold for how close the cursor needs to be to pull the item
        const threshold = 100; // Adjust this value as needed
        const pullStrength = 0.1; // Adjust for more or less pull

        if (distance < threshold) {
            // Calculate pull effect
            const pullX = (distanceX / distance) * pullStrength * (threshold - distance);
            const pullY = (distanceY / distance) * pullStrength * (threshold - distance);

            gsap.to(item, {
                x: pullX,
                y: pullY,
                duration: 0.5,
                ease: "power3.out"
            });
        }
    });

    item.addEventListener('mouseleave', () => {
        // Reset the position when the mouse leaves the element
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power3.out"
        });
    });
});




locoMotiveAnimation()
loadingAnimation()





document.addEventListener('mousemove',(e)=>{

     gsap.to('#flag',{
        x:e.clientX,
        y:e.clientY,
     })
})

document.querySelector('#hero3').addEventListener('mouseenter',()=>{
    gsap.to('#flag',{
       opacity:1
    })
})
document.querySelector('#hero3').addEventListener('mouseleave',()=>{
    gsap.to('#flag',{
       opacity:0
    })
})



//underline animation
const underlineAnimation=()=>{



gsap.from('#page3-underline',{
       x:'100%',
    scrollTrigger:{
        trigger:'#page3',
        scroller:'#main',
     
        start:'top 50%',
        duration:1.5
    }
})


gsap.from('#footer-underline',{
    x:'100%',
 scrollTrigger:{
     trigger:'#footer',
     scroller:'#main',
    
     start:'top 80%',
     duration:1.5
 }
})



gsap.from('#we-work',{
    x:'100%',
 scrollTrigger:{
     trigger:'#page4-underline',
     scroller:'#main',
  
     start:'top 80%',
     duration:1.5
 }
})

gsap.from('#page4-underline',{
    x:'100%',
 scrollTrigger:{
     trigger:'#page4-underline',
     scroller:'#main',
  
     start:'top 80%',
     duration:1.5
 }
})

gsap.from('#underline',{
    x:'100%',
 scrollTrigger:{
     trigger:'#underline',
     scroller:'#main',
    
     start:'top 80%',
     duration:1.5
 }
})

}


if (!/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  customCursor()
  sheryAnimation()
 
  underlineAnimation()
}
else {
  var extraImg = document.querySelectorAll(".extraImg");
  extraImg.forEach(function (img) {
      img.style.display = "none";
  })
  
}