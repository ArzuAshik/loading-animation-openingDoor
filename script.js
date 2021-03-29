function handleChange(value){
    console.log(value);
}

const progressBar = document.getElementById("progress-bar"),
    glass1 = document.getElementById("glass1"),
    glass2 = document.getElementById("glass2"),
    glass3 = document.getElementById("glass3"),
    glass4 = document.getElementById("glass4"),
    progressCount = document.getElementById("progress-count");

const setInter = setInterval(changeValue, 150);

let counter = 0;

function changeValue(){
    console.log(counter);

    if(counter <= 100){
        const heightWidth = (100 - counter) / 2 + "%";
        progressCount.innerText = counter;
        progressBar.style.width = counter + "%";
        glass1.style.height = heightWidth;
        glass2.style.height = heightWidth;
        glass3.style.height = heightWidth;
        glass4.style.height = heightWidth;
        glass1.style.width = heightWidth;
        glass2.style.width = heightWidth;
        glass3.style.width = heightWidth;
        glass4.style.width = heightWidth;
        if(counter > 50){
            progressBar.style.background = "yellow";
        }
        if(counter > 80){
            progressBar.style.background = "green";
        }
    }else{
        clearInterval(setInter);
        setTimeout(()=>{
            document.querySelector("body").removeChild(document.querySelector(".loader"));
        }, 500);
    }
    counter++;
}
