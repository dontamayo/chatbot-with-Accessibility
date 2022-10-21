//General Chatbot - let user start the conversation

//elements
let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');
let ticket = new Date().getTime();

let user = { message: '' };

function getDate() {
  let date = new Date();
  let day = date.getDay();
  let month = date.getMonth();
  let dayOfMonth = date.getDate();

  let dayArray = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednsday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let monthArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  //   return dayArray[day] + ' , ' + monthArray[month] + ' ' + dayOfMonth;
  return `Today is: ${dayArray[day]} ${monthArray[month]} ${dayOfMonth}`;
}
let r_text = new Array();
r_text[0] = 'All the leaves are brown';
r_text[1] = 'And the sky is grey';
r_text[2] = "I've been for a walk";
r_text[3] = "On a winter's day";
r_text[4] = "I'd be safe and warm";
r_text[5] = 'If I was in L.A.';
r_text[6] = "California dreaming, On such a winter's day";
let i = Math.floor(7 * Math.random());

let arrayOfPossibleMessages = [
  { message: 'humor me', response: r_text[i] },
  { message: 'how are you?', response: "I'm great" },
  { message: 'hi', response: 'hi!' },
  { message: 'who are you?', response: "I'm your assistant" },
  { message: "what's your name?", response: "I'm a chatbot" },
  { message: 'what is your name?', response: "I'm a chatbot" },
  { message: 'how old are you?', response: "I'm ageless" },
  { message: 'do you have kids?', response: "No I don't!" },

  { message: 'do you sleep early?', response: "No I don't!" },
  { message: 'do you have a car?', response: 'I travel th,rough space :)' },
  { message: 'can you dance?', response: 'yes,tango.' },
  { message: "what's your fav food?", response: 'Pizza' },
  { message: 'what is your fav food?', response: 'fish' },
  { message: 'do you have a job?', response: 'yes' },
  { message: 'where do you live?', response: 'in the web' },
  { message: 'where were you born?', response: 'on mars' },
  { message: 'do you have siblings?', response: 'Yes, I have got 3' },
  {
    message: 'find me a job',
    response:
      "<a href='https://www.indeed.com/jobs?q=engineer&l=' target='_blank'>Click here</a>",
  },
  { message: "today's date", response: getDate() },
  {
    message: 'password reset' || 'password',
    response:
      "Great, we'll get someone as soon as they're free" ||
      'my name is galvan, i am your virtual assistant today, may I know your name?',
  },
  {
    message: 'thank you',
    response:
      'Sure, Hi my name is galvan, i am your virtual assistant today, may I know your name?',
  },
  {
    message: 'my name is inigo montoya',
    response:
      'you killed my father, prepare to die, i am a skilled swordman from Spain',
  },
];

function chatbotSendMessage(messageText) {
  let messageElement = document.createElement('div');
  messageElement.classList.add('w-50');
  messageElement.classList.add('float-left');
  messageElement.classList.add('shadow-sm');
  messageElement.style.margin = '10px';
  messageElement.style.padding = '5px';

  messageElement.innerHTML =
    '<span>Galvan: </span>' +
    '<span style=' +
    'margin-top:10px; padding:10px' +
    '>' +
    messageText +
    '</span>';

  messageElement.animate(
    [{ easing: 'ease-in', opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  );
  chatContainer.appendChild(messageElement);

  //scroll to last message
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {
  let messageElement = document.createElement('div');
  messageElement.classList.add('w-50');
  messageElement.classList.add('float-right');
  messageElement.classList.add('shadow-sm');
  messageElement.style.margin = '10px';
  messageElement.style.padding = '5px';
  messageElement.style.background = '#f6f6f6';
  messageElement.style.fontSize = '14px';

  messageElement.innerHTML =
    '<span>You: </span>' +
    '<span style=' +
    'margin-top:10px; padding:10px' +
    '>' +
    messageText +
    '</span>';

  messageElement.animate(
    [{ easing: 'ease-in', opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 }
  );

  chatContainer.appendChild(messageElement);

  //scroll to last message
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

//let user start convo
function processMessage() {
  if (user.message.length > 5 || user.message.includes('hi')) {
    //array of results
    let result = arrayOfPossibleMessages.filter((val) =>
      val.message.includes(user.message.toLowerCase())
    );

    if (result.length > 0) {
      let response = result[0].response;

      setTimeout(function () {
        chatbotSendMessage(response);
      }, 1000);
    } else {
      setTimeout(function () {
        chatbotSendMessage("I don't understand!");
      }, 1000);
    }
  } else if (user.message == 'how' || user.message == 'who') {
    setTimeout(function () {
      chatbotSendMessage('?');
    }, 1000);
  } else {
    setTimeout(function () {
      chatbotSendMessage('Please send me a complete sentence');
    }, 1000);
  }
}

sendBtn.addEventListener('click', function (e) {
  if (textbox.value == '') {
    alert('Please type in a message');
  } else {
    let messageText = textbox.value.trim();
    user.message = messageText;
    sendMessage(messageText);
    textbox.value = '';

    processMessage();
  }
});

textbox.addEventListener('keypress', function (e) {
  //if user hits the enter button on keyborad (13)
  if (e.which == 13) {
    if (textbox.value == '') {
      alert('Please type in a message');
    } else {
      let messageText = textbox.value.trim();
      user.message = messageText;
      sendMessage(messageText);
      textbox.value = '';

      processMessage();
    }
  }
});
