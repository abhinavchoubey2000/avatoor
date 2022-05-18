function showAvatar() {
    const name = document.getElementById("name");
    const avatar = document.getElementById("avatar");
    const imageBox = document.getElementById("image-box");
    if(name.value==""){
        setTimeout(() => {
            imageBox.innerHTML = `<img class="box-circle my-30" id="avatar" src="./default_avatar.png" alt="">`;    
        }, 5000);
        imageBox.innerHTML = `<h2>The Name Field Is Required!</h2>`;
    }
    else if(name.value!=""){
        const url = `https://joeschmoe.io/api/v1/${name.value}`;
        avatar.src = url;
        setTimeout(() => {
            name.style.borderTopLeftRadius = "1.6rem";
            name.style.borderTopRightRadius = "1.6rem";
            name.style.borderBottomLeftRadius = "0rem";
            name.style.borderBottomRightRadius = "0rem";
        }, 5000);

        name.style.borderTopLeftRadius = "0rem";
        name.style.borderTopRightRadius = "0rem";
        name.style.borderBottomLeftRadius = "1.6rem";
        name.style.borderBottomRightRadius = "1.6rem";
    }
}