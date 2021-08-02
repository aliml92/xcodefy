window.addEventListener('DOMContentLoaded', (event) => {
    let current = window.location.pathname;
    let a = document.querySelector('li.d-nav-item a[href="'+ current +'"]');
    if (a){
        a.parentElement.className += " nav-item-current";
    }

    function lazy() {
        let img = document.querySelector('img[data-src]');
        let src = img.getAttribute('data-src');
        img.setAttribute('src', src);
        img.onload = function (){
            img.classList.add('vis');
        }
    }
    setTimeout(function() {
        lazy();
    }, 50)

});
let myForm = document.getElementById("search-form");
let searchIcon = document.getElementById("search-icon");
let searchInput = document.getElementById("search-input");
let submitButton = document.getElementById("d-submit");
let name = document.getElementById("d-name");
let email = document.getElementById("d-email");
let textArea = document.querySelector("#d-comment-body textarea");


if(myForm) myForm.addEventListener('submit', function (e){ e.preventDefault()}, false);
if(searchIcon) searchIcon.addEventListener('click', sendSearchTerm, false);
if(searchInput) searchInput.addEventListener('keyup', sendSearchTerm, false);
if(submitButton) submitButton.addEventListener("click", sendComment, false);
if(name) name.addEventListener("focusout", checkName, false);
if(email) email.addEventListener("focusout", checkEmail, false);

function checkTextAreaLength(){
    const textAreaLength = textArea.value.length;
    let textAreaErr = document.getElementById("textarea-err");
    if (textAreaLength !==0 && textAreaLength <= 2000){
        return true;
    } else {
        textAreaErr.textContent = "Comment must not exceed 1000 chars"
        textAreaErr.style.visibility = "visible";
        setTimeout(hideError,10000, textAreaErr);
        return false;
    }
}
function hideError(errEl){
    errEl.style.visibility = "hidden";
    errEl.textContent = "error";
}

function checkEmail(){
    if (email.value.length !== 0) {
        let emailErr = document.getElementById("email-err");
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,4})$/;
        if (!email.value.match(re)) {
            emailErr.textContent = "Wrong email format";
            emailErr.style.visibility = "visible";
            setTimeout(hideError,10000, emailErr);
            return false;
        } else {
            return true
        }
    }
}



function checkName(){
    if (name.value.length !== 0 && name.value.length <= 30) {
        const rn = /^[\p{L}0-9-_,'.]+$/iu;
        let nameErr = document.getElementById("name-err");
        if (!name.value.match(rn)) {
            nameErr.textContent = "Name/Username is allowed, like John Doe or 송일국 or Tim_95";
            nameErr.style.visibility = "visible";
            setTimeout(hideError,10000, nameErr);
            return false;
        } else {
            return true;
        }
    } else if(name.value.length !== 0){
        let nameErr1 = document.getElementById("name-err");
        nameErr1.textContent = "Name must not exceed 30 chars";
        nameErr1.style.visibility = "visible";
        setTimeout(hideError,10000, nameErr1);
        return false;
    }
}


function sendComment(e){
    e.preventDefault();
    if (checkName() && checkEmail() && checkTextAreaLength()){
        const commentForm = {
            name : name.value,
            email: email.value,
            commentBody : textArea.value,
            sfid: window.location.pathname,
        }
        let url = '/saveComment';
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentForm),
        })
        .then(response => {
            if(response.ok){
                let init1 = document.getElementById("commentInit1");
                let init2 = document.getElementById("commentInit2");
                if (init1){
                    let div = document.createElement('div');
                    div.classList.add('about-author' , 'flex');
                    let output = `
                    <div class="avatar-wrap">
                        <img class="avatar" src="/assets/image/icon.png" alt="User">
                    </div>
                    <div class="author-info">
                        <h4 class="name h6 d-author"">${commentForm.name}</h4>&nbsp;
                        <div class="comment-date">moments ago</div>
                        <div class="bio comment-body" >${commentForm.commentBody}</div>
                    </div>
                `;
                    div.innerHTML = output;
                    init1.parentNode.insertBefore(div,init1.nextSibling);
                } else {
                    let output = `
                    <div class="col" >
                        <h3 id="commentInit1">Comments</h3>
                        <div class="about-author flex" >
                            <div class="avatar-wrap">
                                <img class="avatar" src="/assets/image/icon.png" alt="User">
                            </div>
                            <div class="author-info">
                                <h4 class="name h6 d-author"">${commentForm.name}</h4>&nbsp;
                                <div class="comment-date">moments ago</div>
                                <div class="bio comment-body" >${commentForm.commentBody}</div>
                            </div>
                        </div>
                    </div> `;
                    init2.innerHTML = output;
                }

            }})
        } else {
            console.log("Unsuccessful");
        }

}

function sendSearchTerm(e){
    if (e.code === "Enter"){
        let searchTerm = document.getElementById("search-input").value;
        let url = '/search?s=' + searchTerm;

        fetch(url, {
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(posts => {
                let output = '';
                posts.forEach(function (post){
                    output += `
                        <div class="result-item">
                        <a href="${post.sfid}" >
                             <div class="header"><div class="title h5">${post.title}</div> - <span class="tag">${post.category}</span></div>
                                <div class="excerpt">${post.contentPart}</div>
                        </a> </div>`;
                });
                document.getElementById("search-results").innerHTML = output;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

