function slide(e) {
    let dflt = document.querySelector(".dflt");
    let nav = e.childNodes[0].innerText;
    let btn = e.childNodes[0];
    let sw = document.querySelector(".section");

    if (nav === "Stop watch") {
        btn.setAttribute("class", "dflt");
        sw.style.animationName = "slide";
        sw.style.animationDuration = "0.6s";
        sw.style.right = "700px";
        e.previousSibling.previousSibling.childNodes[0].removeAttribute("class");
        e.previousSibling.previousSibling.childNodes[0].removeAttribute("disabled");
    } else if (nav === "Timer") {
        btn.setAttribute("class", "dflt")
        sw.style.animationName = "slide-left";
        sw.style.animationDuration = "0.6s";
        sw.style.right = "0px";
        e.nextSibling.nextSibling.childNodes[0].removeAttribute("class");
    }
}

function setTime() {
    let pop = document.getElementById("pop");
    pop.style.display = "inline-block";
    pop.style.animationName = "pop-up";
    pop.style.animationDuration = "0.2s";
}

function ok() {
    let pop = document.querySelector("#pop");
    let h = document.querySelector("#hour");
    let m = document.querySelector("#min");
    let s = document.querySelector("#sec");
    let headh = document.querySelector("#headh");
    let headm = document.querySelector("#headm");
    let heads = document.querySelector("#heads");
    pop.style.animationName = "pop-down";
    pop.style.animationDuration = "0.2s";
    setTimeout(anime, 90)
    function anime() {
        pop.style.display = "none";
    }


    if (h.value === "") {
        h.value = "0";
        if (m.value === "") {
            m.value = "0";
            if (s.value === "") {
                console.log(s.value)
                s.value = "0";
            }
        } else if (s.value === "") {
            s.value = "0";
        }
    } else if (m.value === "") {
        m.value = "0";
        if (s.value === "") {
            s.value = "0";
        }
    } else if (s.value === "") {
        s.value = "0";
    }

    if (h.value == 0 && m.value == 0 && s.value == 0) {
        document.getElementById("tbtn").style.display = "inline-block";
    } else {
        headh.innerHTML = h.value;
        headm.innerHTML = m.value;
        heads.innerHTML = s.value;
        document.getElementById("tbtn").style.display = "none";
        let box = document.querySelector(".tbtn");
        box.innerHTML = `<button class="play" onclick="play()"><i class="fa-solid fa-play"></i></button>`;
        let btn = document.querySelector(".play");
        btn.style.borderRadius = "50px";
        btn.style.width = "60px";
        btn.style.height = "60px";
        btn.style.fontSize = "1.4em";
        btn.style.paddingLeft = "10px";
    }
}


function play() {
    let btn = document.querySelector(".play");
    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    btn.style.paddingLeft = "7px";
    btn.setAttribute("onclick", "pause()");
    let h = +document.querySelector("#headh").innerHTML;
    let m = +document.querySelector("#headm").innerHTML;
    let s = +document.querySelector("#heads").innerHTML;
    intr = setInterval(secDown, 1000);
    
    function secDown() {
        if (s > 0) {
            s -= 1;
            document.querySelector("#heads").innerHTML = s;
        } else if (m > 0 && s === 0) {
            s = 60;
            document.querySelector("#heads").innerHTML = s; 
            m -= 1;
            document.querySelector("#headm").innerHTML = m; 
        } else if (h > 0 && m === 0) {
            m = 60;
            document.querySelector("#headm").innerHTML = m; 
            h -= 1;
            document.querySelector("#headh").innerHTML = h; 
        } else if (h === 0 && m === 0 && s === 0) {
            document.querySelector(".play").style.display = "none";
            document.querySelector(".tbtn").innerHTML = `<button id="tbtn" onclick="setTime()">Set Time</button>`;
            clearInterval(intr);
        }
    }


}

function pause() {
    let btn = document.querySelector(".play");
    btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    btn.style.width = "60px"; 
    btn.style.height = "60px";
    btn.style.fontSize = "1.4em";
    btn.style.paddingLeft = "10px";
    btn.setAttribute("onclick", "play()");
    clearInterval(intr);
}

function playsw() {
    let btn = document.querySelector("#swbtn");
    btn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    btn.style.paddingLeft = "7px";
    btn.setAttribute("onclick", "pausesw()");
    let stopbtn = document.querySelector(".stopbtn");
    stopbtn.style.display = "inline-block";
    swintr = setInterval(incr, 1000)

    function incr() {
        let swh = document.getElementById("swh");
        let swm = document.getElementById("swm");
        let sws = document.getElementById("sws");
        +sws.innerHTML++;
        
        if (sws.innerHTML == 60) {
            +swm.innerHTML++;
            sws.innerHTML = 0;
        } else if (swm.innerHTML == 60) {
            +swh.innerHTML++;
            swm.innerHTML = 0;
        }
    }

}

function pausesw() {
    let btn = document.querySelector("#swbtn");
    btn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    btn.style.width = "60px";
    btn.style.height = "60px";
    btn.style.fontSize = "1.4em";
    btn.style.paddingLeft = "10px";
    btn.setAttribute("onclick", "playsw()");
    clearInterval(swintr);

}

function stop(e) {
    let playBtn = document.getElementById("swbtn"); 
    document.getElementById("swh").innerHTML = "0";
    document.getElementById("sws").innerHTML = "0";
    document.getElementById("swm").innerHTML = "0";
    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    playBtn.setAttribute("onclick", "playsw()");
    e.style.display = "none";
    clearInterval(swintr);
}


function darkMode(e) {
    let btn = document.querySelector(".golBtn");
    let narrow = document.querySelector(".narrow");
    let container = document.querySelector(".container");
    let main = document.querySelector(".main");
    let secret = document.querySelector(".secret");
    let link = document.querySelectorAll(".link");
    let num = document.querySelectorAll(".num");
    link.forEach((v, i) => {
        v.setAttribute("class", "dark-link");
    })
    num.forEach((v, i) => {
        v.setAttribute("class", "dark-num")
    })
    container.setAttribute("class", "dark-container");
    main.setAttribute("class", "dark-main");
    secret.setAttribute("class", "dark-secret");
    e.style.animationName = "modeOn";
    e.style.animationDuration = "0.4s";
    e.style.left = "16px";
    e.style.backgroundColor = "white";
    e.style.color = "rgb(71, 71, 71)";
    narrow.style.borderColor = "white";
    e.setAttribute("onclick", "lightMode(this)");
    e.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}

function lightMode(e) {
    let btn = document.querySelector(".golBtn");
    let narrow = document.querySelector(".narrow");
    let darkContainer = document.querySelector(".dark-container");
    let darkMain = document.querySelector(".dark-main");
    let darkSecret = document.querySelector(".dark-secret");
    let darkLink = document.querySelectorAll(".dark-link");
    let darkNum = document.querySelectorAll(".dark-num");
    darkLink.forEach((v, i) => {
        v.setAttribute("class", "link")
    })
    darkNum.forEach((v, i) => {
        v.setAttribute("class", "num")
    })
    darkContainer.setAttribute("class", "container");
    darkMain.setAttribute("class", "main");
    darkSecret.setAttribute("class", "secret");
    e.style.animationName = "modeOff";
    e.style.animationDuration = "0.4s";
    e.style.left = "-1px";
    e.style.backgroundColor = "rgb(71, 71, 71)";
    e.style.color = "white";
    narrow.style.borderColor = "rgb(71, 71, 71)"
    e.setAttribute("onclick", "darkMode(this)");
    e.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}



// <i class="fa-solid fa-pause"></i>
// <i class="fa-solid fa-stop"></i>
// {/* <i class="fa-solid fa-bookmark"></i>/ */}