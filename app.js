const tweetForm = document.querySelector('#tweetform');
const userName = document.querySelector('#user');
const tweet = document.querySelector('#tweet');
const tweetSection = document.querySelector('#tweetslist');
const button = document.querySelector('#sbmt');
const section = document.querySelector('#sect');
const tweetList = document.createElement('ol');

//this retrieves what was set into the localStorage. So when you reload the page, the answers/tweets are not lost.
/*window.addEventListener('load', () => {
  const storedTweets = localStorage.getItem('tweets');
  if (storedTweets) {
    tweetList.innerHTML = storedTweets;
    section.appendChild(tweetList).hidden = false;
    tweetSection.hidden = false;
  }
});*/

tweetSection.hidden = true;
section.appendChild(tweetList).hidden = true;

tweetForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (userName.value === '' || tweet.value === '') {
    alert('Please fill in all fields!');
  } else {
    section.appendChild(tweetList).hidden = false;
    const tweetListItem = document.createElement('li');
    tweetList.appendChild(tweetListItem);

    tweetListItem.innerText = `${userName.value}: ${tweet.value}`;
    tweetSection.hidden = false;

    userName.value = '';
    tweet.value = '';

    //this sets tweetList.innerHTML to localStorage.
    //localStorage.setItem('tweets', tweetList.innerHTML);
  }
});
