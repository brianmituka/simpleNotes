document.getElementById("heading").innerHTML = localStorage['title'] || 'Heading goes here';
document.getElementById('content').innerHTML = localStorage['text'] || 'Body of text editor';

setInterval(function () {
  localStorage['title'] = document.getElementById('heading').innerHTML;
  localStorage['text'] = document.getElementById('content').innerHTML;

}, 1000);

function addNote() {
  const heading = document.createElement('div');
  const content = document.createElement('div');
  heading.id = "heading";
  content.id = "content";

  localStorage['title'] = document.getElementById('heading').innerHTML;
  localStorage['text'] = document.getElementById('content').innerHTML;

}
