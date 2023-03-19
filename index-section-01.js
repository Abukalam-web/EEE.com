
function sectionOneBtn (){
    var btn1 = document.getElementById("readMoreBtn");
    btn1.addEventListener("click", function(){
        var btn2 = document.getElementById("readMore");
        btn2.style.display = "block";
        btn1.style.display = "none";
    });
}
sectionOneBtn();

function sectionOneBtn2 (){
    var btn2 = document.getElementById("showLessBtn");
    btn2.addEventListener("click", function(){
        var btn3 = document.getElementById("readMore");
        var btn4 = document.getElementById("readMoreBtn");
        btn3.style.display = "none";
        btn4.style.display = "block";
    });
}
sectionOneBtn2();



/* section 02 body start */
function TeachersInfo (){
    var btn11 = document.getElementById("TB00");
    btn11.addEventListener("click", function(){
        var btn22 = document.getElementById("TB223");
        var pageTeacherAll = document.getElementById("allTeacherInfo");
        btn11.style.display = "none" ;
        pageTeacherAll.style.display = "block" ;
        
    });
}
TeachersInfo();

// function teacherClose(){
//     var btn23 = document.getElementById("TB223");
//     btn23.addEventListener("click", function(){
//         var btn33 = document.getElementById("allTeacherInfo");
//         btn33.style.display = "none";
//     });
// }
// teacherClose();
/* section 02 body end */


function inputBox(){
    var input1 = document.getElementById("inputBtn1");
    input1.addEventListener("click", function(){
        var shaddoNone = document.getElementById("inputBtn2");
        input1.style.boxShadow = "2px 3px 9px #00DBDE,-2px 3px 18px #21D4FD,-2px -3px 9px #21D4FD,2px -3px 36px #00DBDE ";
        shaddoNone.style.boxShadow = "none";

    });
}
inputBox();

function inputBox2(){
    var input1 = document.getElementById("inputBtn2");
    input1.addEventListener("click", function(){
        var shaddoNone = document.getElementById("inputBtn1");
        input1.style.boxShadow = "2px 3px 9px #00DBDE,-2px 3px 18px #21D4FD,-2px -3px 9px #21D4FD,2px -3px 36px #00DBDE ";
        shaddoNone.style.boxShadow = "none";
    });
}
inputBox2();

// function bodyClick (){
//     const clickOutside = document.getElementById("login-body"); 
    
//     clickOutside.addEventListener("click", function(){
//         const box1 = document.getElementById("inputBtn1");
//         const box2 = document.getElementById("inputBtn2");
//         box1.style.boxShadow = "none";
//         box2.style.boxShadow = "none";

//     })
// }

// bodyClick();


function forNav (){
    const barIcon = document.getElementById("open");
    const closeIcon = document.getElementById("close");
    barIcon.addEventListener("click", function(){
        const dispalyNav = document.getElementById("fNav");
        dispalyNav.style.display = "block";
        barIcon.style.display = "none";
        closeIcon.style.display = "block";
    })
    closeIcon.addEventListener("click", function(){
         const dispalyNav1 = document.getElementById("fNav");
        dispalyNav1.style.display = "none";
        barIcon.style.display = "block";
        closeIcon.style.display = "none";
    })
}

forNav();