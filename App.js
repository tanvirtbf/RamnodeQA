var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

const faqs = document.querySelectorAll('.FAQ1');
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})


const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");
showPassword.addEventListener("click",function(){
  this.classList.toggle("fa-eye");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type",type)
})

const according = document.querySelectorAll('.contentBx');

for(i = 0; i<according.length; i++){
  according[i].addEventListener('click',function(){
    this.classList.toggle("active");
  })
}


const Faqss = document.querySelector('.FAQs-btn');
  Faqss.addEventListener('click', function() {
    const FaqssContent = document.querySelector('#question-section-collapse');
    FaqssContent.style.display='none';
  })



