function showNum() {
    const contact = document.getElementById("contactMeBtn");
    contact.innerHTML = "+91 7040121294 <span><img class='callImg' src='./css/icon/icons8-phone-ios-filled-96.png'></span>"
}

function hideNum() {
    const contact = document.getElementById("contactMeBtn");
    contact.innerHTML = "Contact Me <span><img class='callImg' src='./css/icon/icons8-phone-ios-filled-96.png'></span>"
}


function openProject(id, btn) {
    for (var i = 0; i < 5; i++) {
        document.getElementById('content' + (i + 1)).style.visibility = 'hidden';
        document.getElementById('tab-btn-' + (i + 1)).style.color = '#000000';
    }
    const divcont = document.getElementById(id);
    divcont.style.visibility = 'visible';
    document.getElementById(btn).style.color = '#ff7846';
}
function ancher_scrolled(){
    autohide_element = document.querySelector('.autohide');
    autohide_element.classList.add('scrolled-up');
}




document.addEventListener("DOMContentLoaded", function () {
    autohide_element = document.querySelector('.autohide');
    nav_height = document.querySelector('.navbar').offsetHeight;
    // document.body.style.paddingTop = nav_height + 'px'
  
    if (autohide_element) {
        var last_scrollup_top = 0;
        window.addEventListener('scroll', function () {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scrollup_top) {
                autohide_element.classList.remove('scrolled-down');
                autohide_element.classList.add('scrolled-up');
            } else {
                autohide_element.classList.add('scrolled-down');
                autohide_element.classList.remove('scrolled-up');
            }
            last_scrollup_top = scroll_top;
        })
    }
})