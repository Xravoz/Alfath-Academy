const observer = new IntersectionObserver ((entries) => {
entries.forEach((entry) => {
console.log(entry)
if (entry.isIntersecting) {
entry.target.classList.add('show');
} else {
entry.target.classList.remove('.show');
}
});
});
const hiddenElements = document.querySelectorAll('.section-one');
const hiiddenElements = document.querySelectorAll('.section-container');
const hiiiddenElements = document.querySelectorAll('.coursess');
const hiiiiddenElements = document.querySelectorAll('.bakat');
const hiiiiiddenElements = document.querySelectorAll('.baka2' );


hiddenElements.forEach((el) => observer.observe(el));
hiiddenElements.forEach((el) => observer.observe(el));
hiiiddenElements.forEach((el) => observer.observe(el));
hiiiiddenElements.forEach((el) => observer.observe(el));
hiiiiiddenElements.forEach((el) => observer.observe(el));








/*php */
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'php.php');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('تم إرسال الرسالة بنجاح!');
      // يمكنك هنا إضافة أي شيء تحتاجه بعد إرسال البيانات بنجاح
    }
  };
  xhr.send(formData);
});


 function togglePopup() { 
            const overlay = document.getElementById('popupOverlay'); 
            overlay.classList.toggle('show'); 
} 




