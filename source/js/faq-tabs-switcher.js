const buttons = document.querySelectorAll('.faq__button');
const centerButton = document.querySelector('.faq__button-center');
const subscriptionButton = document.querySelector('.faq__button-subscription');
const servicesButton = document.querySelector('.faq__button-services');
const rulesButton = document.querySelector('.faq__button-rules');

const accordionHeaders = document.querySelectorAll('.faq__item-accordion summary');
const accordionTextCollection = document.querySelectorAll('.faq__item-accordion p');


centerButton.addEventListener('click', () => {
  accordionHeaders[0].textContent = 'Как стать членом фитнес-центра?';
  accordionHeaders[1].textContent = 'Где можно посмотреть расписание?';
  accordionHeaders[2].textContent = 'Есть кулеры в центре? Предоставляются полотенца?';
  accordionHeaders[3].textContent = 'Сколько тренеров работает в клубе и какова их квалификация?';

  accordionTextCollection.forEach((item) => {
    item.textContent = 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придет вам на почту.'
  });

  buttons.forEach((button) => {
    button.classList.remove('faq__button--active')
  })

  centerButton.classList.add('faq__button--active');
});

subscriptionButton.addEventListener('click', () => {
  accordionHeaders[0].textContent = 'Занятия с тренером входят в абонемент?';
  accordionHeaders[1].textContent = 'Можно ли заморозить абонемент?';
  accordionHeaders[2].textContent = 'Есть ли лимит по посещениям тренажерного зала и групповых занятий?';
  accordionHeaders[3].textContent = 'Что такое семейный доступ и доступ для друзей?';

  accordionTextCollection.forEach((item) => {
    item.textContent = 'При посещении тренажерного зала вам необходимо оплатить занятия с тренером отдельно. В зале всегда присутствует дежурный тренер, которому можно задать вопрос,  получить небольшую консультацию по тренажеру или технике выполнения упражнения.'
  });

  buttons.forEach((button) => {
    button.classList.remove('faq__button--active')
  })

  subscriptionButton.classList.add('faq__button--active')
})

servicesButton.addEventListener('click', () => {
  accordionHeaders[0].textContent = 'Предлагает ли клуб услуги по консультированию по вопросам питания?';
  accordionHeaders[1].textContent = 'Проводятся ли в клубе какие-либо мероприятия или соревнования?';
  accordionHeaders[2].textContent = 'Можно ли приобрести в центре спортивное питание?';
  accordionHeaders[3].textContent = 'Есть ли в центре детская комната?';

  accordionTextCollection.forEach((item) => {
    item.textContent = 'Да. Вы можете обратиться как к своему тренеру, так и к нашему нутрициологу. Специалист уточнит ваши данные, цели и предложит программу питания.'
  });

  buttons.forEach((button) => {
    button.classList.remove('faq__button--active')
  })

  servicesButton.classList.add('faq__button--active');
});

rulesButton.addEventListener('click', () => {
  accordionHeaders[0].textContent = 'Есть в фитнес-центре дресс-код?';
  accordionHeaders[1].textContent = 'Можно ли приводить с собой детей на тренировки?';
  accordionHeaders[2].textContent = 'Какие дополнительные правила посещения центра?';
  accordionHeaders[3].textContent = 'Нужна ли медицинская справка для посещения залов и бассейна?';

  accordionTextCollection.forEach((item) => {
    item.textContent = 'Для тренировок необходимо иметь предназначенную для этого закрытую спортивную обувь и одежду. Верхняя и нижняя части тела должны быть закрыты (используйте футболки, майки, спортивные брюки, шорты, кроссовки). В целях безопасности, запрещается тренироваться босиком, в пляжных или домашних тапочках и т. п., исключения составляют специальные классы (например, йога, пилатес). '
  });

  accordionTextCollection[1].textContent = 'Да, можно. В рамках комплексов прекрасные детские комнаты и тренеры со специальным образованием.';

  buttons.forEach((button) => {
    button.classList.remove('faq__button--active')
  })

  rulesButton.classList.add('faq__button--active');
})
