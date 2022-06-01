// lev2_6: Random Image
// Schreibe eine Funktion, die beim Anklicken des Buttons ein zufälliges Bild anzeigt.
// Verwende die Arrays in dem Kommentarbereich
// Nutze
// Math.random()
// getElementById
// createElement x
// appendChild x
// length
// Deine HTML sollte nur dies beinhalten: <div id="content"></div>

let data = [
    {
        id: "0",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/yC-Yzbqy7PY",
        download_url: "https://picsum.photos/id/0/5616/3744"
    },
    {
        id: "1",
        author: "Alejandro Escamilla",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/LNRyGwIJr5c",
        download_url: "https://picsum.photos/id/1/5616/3744"
    },
    {
        id: "10",
        author: "Paul Jarvis",
        width: 2500,
        height: 1667,
        url: "https://unsplash.com/photos/6J--NXulQCs",
        download_url: "https://picsum.photos/id/10/2500/1667"
    },
    {
        id: "100",
        author: "Tina Rataj",
        width: 2500,
        height: 1656,
        url: "https://unsplash.com/photos/pwaaqfoMibI",
        download_url: "https://picsum.photos/id/100/2500/1656"
    },
    {
        id: "1000",
        author: "Lukas Budimaier",
        width: 5626,
        height: 3635,
        url: "https://unsplash.com/photos/6cY-FvMlmkQ",
        download_url: "https://picsum.photos/id/1000/5626/3635"
    },
    {
        id: "1001",
        author: "Danielle MacInnes",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/1DkWWN1dr-s",
        download_url: "https://picsum.photos/id/1001/5616/3744"
    },
    {
        id: "1002",
        author: "NASA",
        width: 4312,
        height: 2868,
        url: "https://unsplash.com/photos/6-jTZysYY_U",
        download_url: "https://picsum.photos/id/1002/4312/2868"
    },
    {
        id: "1003",
        author: "E+N Photographies",
        width: 1181,
        height: 1772,
        url: "https://unsplash.com/photos/GYumuBnTqKc",
        download_url: "https://picsum.photos/id/1003/1181/1772"
    },
    {
        id: "1004",
        author: "Greg Rakozy",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/SSxIGsySh8o",
        download_url: "https://picsum.photos/id/1004/5616/3744"
    },
    {
        id: "1005",
        author: "Matthew Wiebe",
        width: 5760,
        height: 3840,
        url: "https://unsplash.com/photos/tBtuxtLvAZs",
        download_url: "https://picsum.photos/id/1005/5760/3840"
    },
    {
        id: "1006",
        author: "Vladimir Kudinov",
        width: 3000,
        height: 2000,
        url: "https://unsplash.com/photos/-wWRHIUklxM",
        download_url: "https://picsum.photos/id/1006/3000/2000"
    },
    {
        id: "1008",
        author: "Benjamin Combs",
        width: 5616,
        height: 3744,
        url: "https://unsplash.com/photos/5L4XAgMSno0",
        download_url: "https://picsum.photos/id/1008/5616/3744"
    },
    {
        id: "1009",
        author: "Christopher Campbell",
        width: 5000,
        height: 7502,
        url: "https://unsplash.com/photos/CMWRIzyMKZk",
        download_url: "https://picsum.photos/id/1009/5000/7502"
    },
    {
        id: "101",
        author: "Christian Bardenhorst",
        width: 2621,
        height: 1747,
        url: "https://unsplash.com/photos/8lMhzUjD1Wk",
        download_url: "https://picsum.photos/id/101/2621/1747"
    },
    {
        id: "1010",
        author: "Samantha Sophia",
        width: 5184,
        height: 3456,
        url: "https://unsplash.com/photos/NaWKMlp3tVs",
        download_url: "https://picsum.photos/id/1010/5184/3456"
    },
    {
        id: "1011",
        author: "Roberto Nickson",
        width: 5472,
        height: 3648,
        url: "https://unsplash.com/photos/7BjmDICVloE",
        download_url: "https://picsum.photos/id/1011/5472/3648"
    },
    {
        id: "1012",
        author: "Scott Webb",
        width: 3973,
        height: 2639,
        url: "https://unsplash.com/photos/uAgLGG1WBd4",
        download_url: "https://picsum.photos/id/1012/3973/2639"
    },
    {
        id: "1013",
        author: "Cayton Heath",
        width: 4256,
        height: 2832,
        url: "https://unsplash.com/photos/D8LcRLwZyPs",
        download_url: "https://picsum.photos/id/1013/4256/2832"
    },
    {
        id: "1014",
        author: "Oscar Keys",
        width: 6016,
        height: 4000,
        url: "https://unsplash.com/photos/AmPRUnRb6N0",
        download_url: "https://picsum.photos/id/1014/6016/4000"
    },
    {
        id: "1015",
        author: "Alexey Topolyanskiy",
        width: 6000,
        height: 4000,
        url: "https://unsplash.com/photos/-oWyJoSqBRM",
        download_url: "https://picsum.photos/id/1015/6000/4000"
    },
    {
        id: "1016",
        author: "Philippe Wuyts",
        width: 3844,
        height: 2563,
        url: "https://unsplash.com/photos/_h7aBovKia4",
        download_url: "https://picsum.photos/id/1016/3844/2563"
    },
    {
        id: "1018",
        author: "Andrew Ridley",
        width: 3914,
        height: 2935,
        url: "https://unsplash.com/photos/Kt5hRENuotI",
        download_url: "https://picsum.photos/id/1018/3914/2935"
    },
    {
        id: "1019",
        author: "Patrick Fore",
        width: 5472,
        height: 3648,
        url: "https://unsplash.com/photos/V6s1cmE39XM",
        download_url: "https://picsum.photos/id/1019/5472/3648"
    },
    {
        id: "102",
        author: "Ben Moore",
        width: 4320,
        height: 3240,
        url: "https://unsplash.com/photos/pJILiyPdrXI",
        download_url: "https://picsum.photos/id/102/4320/3240"
    },
    {
        id: "1020",
        author: "Adam Willoughby-Knox",
        width: 4288,
        height: 2848,
        url: "https://unsplash.com/photos/_snqARKTgoc",
        download_url: "https://picsum.photos/id/1020/4288/2848"
    },
    {
        id: "1021",
        author: "Frances Gunn",
        width: 2048,
        height: 1206,
        url: "https://unsplash.com/photos/8BmNurlVR6M",
        download_url: "https://picsum.photos/id/1021/2048/1206"
    },
    {
        id: "1022",
        author: "Vashishtha Jogi",
        width: 6000,
        height: 3376,
        url: "https://unsplash.com/photos/bClr95glx6k",
        download_url: "https://picsum.photos/id/1022/6000/3376"
    },
    {
        id: "1023",
        author: "William Hook",
        width: 3955,
        height: 2094,
        url: "https://unsplash.com/photos/93Ep1dhTd2s",
        download_url: "https://picsum.photos/id/1023/3955/2094"
    },
    {
        id: "1024",
        author: "Мартин Тасев",
        width: 1920,
        height: 1280,
        url: "https://unsplash.com/photos/7ALI0RYyq6s",
        download_url: "https://picsum.photos/id/1024/1920/1280"
    },
    {
        id: "1025",
        author: "Matthew Wiebe",
        width: 4951,
        height: 3301,
        url: "https://unsplash.com/photos/U5rMrSI7Pn4",
        download_url: "https://picsum.photos/id/1025/4951/3301"
    }
]

//HEADLINE
let headline = document.createElement("h1");
headline.textContent = "Zufälliges Bild mit Javascript anzeigen";
document.body.appendChild(headline);

//CLICK ME
let button = document.createElement("a");
let br = document.createElement("br");
button.textContent = "Click Me";
document.body.appendChild(button);
document.body.appendChild(br);

//IMAGE
let image = document.createElement("img");
image.style.width = "30%";
image.style.height = "30%";
image.after(button); //das Image soll nach dem Button erscheinen
document.body.appendChild(image);
// console.log(data[0].url);

//STYLING
document.body.style.fontFamily = "Helvetica, sans-serif";
button.style.borderStyle = "solid";
button.style.borderStyle = "padding: 20%";

//function randomImage() {
//console.log("worksss"); //✔️
//console.log(Math.floor(Math.random() * 28)); //✔️

button.addEventListener("click", () => {
    //0 = Image 1, 1 = Image 2, etc..
    let randomChoice = Math.floor(Math.random() * data.length);
    //console.log("Test");
    //console.log(randomChoice);
    switch (randomChoice) {
        case 0:
            console.log(randomChoice);
            image.src = data[0].download_url;
            //image.innerHTML = randomChoice;
            //image.setAttribute("src", url);
            break;
        case 1:
            console.log(randomChoice);
            image.src = data[1].download_url;
            break;
        case 2:
            console.log(randomChoice);
            image.src = data[2].download_url;
            break;
        case 3:
            console.log(randomChoice);
            image.src = data[3].download_url;
            break;
        case 4:
            console.log(randomChoice);
            image.src = data[4].download_url;
            break;
        case 5:
            console.log(randomChoice);
            image.src = data[5].download_url;
            break;
        case 6:
            console.log(randomChoice);
            image.src = data[6].download_url;
            break;
        case 7:
            console.log(randomChoice);
            image.src = data[7].download_url;
            break;
        case 8:
            console.log(randomChoice);
            image.src = data[8].download_url;
            break;
        case 9:
            console.log(randomChoice);
            image.src = data[9].download_url;
            break;
        case 10:
            console.log(randomChoice);
            image.src = data[10].download_url;
            break;
        case 11:
            console.log(randomChoice);
            image.src = data[2].download_url;
            break;
        case 12:
            console.log(randomChoice);
            image.src = data[11].download_url;
            break;
        case 13:
            console.log(randomChoice);
            image.src = data[12].download_url;
            break;
        case 14:
            console.log(randomChoice);
            image.src = data[13].download_url;
            break;
        case 15:
            console.log(randomChoice);
            image.src = data[14].download_url;
            break;
        case 16:
            console.log(randomChoice);
            image.src = data[15].download_url;
            break;
        case 17:
            console.log(randomChoice);
            image.src = data[16].download_url;
            break;
        case 18:
            console.log(randomChoice);
            image.src = data[17].download_url;
            break;
        case 19:
            console.log(randomChoice);
            image.src = data[18].download_url;
            break;
        case 20:
            console.log(randomChoice);
            image.src = data[19].download_url;
            break;
        case 21:
            console.log(randomChoice);
            image.src = data[20].download_url;
            break;
        case 22:
            console.log(randomChoice);
            image.src = data[21].download_url;
            break;
        case 23:
            console.log(randomChoice);
            image.src = data[22].download_url;
            break;
        case 24:
            console.log(randomChoice);
            image.src = data[23].download_url;
            break;
        case 25:
            console.log(randomChoice);
            image.src = data[24].download_url;
            break;
        case 26:
            console.log(randomChoice);
            image.src = data[25].download_url;
            break;
        case 27:
            console.log(randomChoice);
            image.src = data[26].download_url;
            break;
        case 28:
            console.log(randomChoice);
            image.src = data[27].download_url;
            break;
        case 29:
            console.log(randomChoice);
            image.src = data[28].download_url;
            break;
        case 30:
            console.log(randomChoice);
            image.src = data[29].download_url;
            break;
    }
});  //man kann keine Variable als Argument übergeben, nur function 