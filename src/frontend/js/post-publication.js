//Получаем DOM-элементы
const textareaHeight = document.getElementById("post-text");
const postBtnShow = document.querySelector('.right-menu__plus-btn');
const post = document.querySelector('.post-publication');


postBtnShow.addEventListener('click', PostBtnClick);

textareaHeight.addEventListener("input", (event) => {
	textareaHeight.style.height = 0;
  textareaHeight.style.height = textareaHeight.scrollHeight + "px";
})


function setValue(text) {
	const textarea = document.getElementById("text");
	textarea.style.height = 0;
	textarea.value = text;
	textarea.style.height = textarea.scrollHeight + "px";
}

function PostBtnClick(){
	if(post.style.display == 'flex'){
		post.style.display = 'none';
	}
	else{
		post.style.display = 'flex';
	}
}
