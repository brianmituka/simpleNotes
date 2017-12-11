var intervalSet;

function addNote() {
  const heading = document.createElement('div');
  heading.setAttribute('contenteditable', true)
  heading.id = 'heading';

  const content = document.createElement('div');
  content.setAttribute('contenteditable', true);
  content.id = 'content';
// setting the heading and content  to local storage default text object
  heading.innerHtml = window.localStorage.getItem('title') || 'Heading goes here';
  content.innerHtml = window.localStorage.getItem('text') || 'body of text editor';
  // appending the divs to the DOM
  document.getElementsByTagName("body")[0].append(heading);
  document.getElementsByTagName("body")[0].append(content);

  // creating the interval function
 setInterval(function () {
    localStorage.setItem('title', document.getElementById('heading').innerHtml);
    localStorage.setItem('text', document.getElementById('content').innerHtml);

  }, 1000);
}
