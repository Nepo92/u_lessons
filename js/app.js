const data = {
  '06.01.2021': [
    {
      id: 1457,
      idCourse: 3,
      idProject: 0,
      dealsCounter: 0,
      nameCourse: 'Начинающий кондитер',
      nameProject: null,
      startDate: '06.01.2021',
      startTime: null,
      isStarted: true,
    },
    {
      id: 1481,
      idCourse: 5,
      idProject: 0,
      dealsCounter: 0,
      nameCourse: 'Фитнес-десерты',
      nameProject: null,
      startDate: '06.01.2021',
      startTime: null,
      isStarted: true,
    },
    {
      id: 1465,
      idCourse: 18,
      idProject: 0,
      dealsCounter: 0,
      nameCourse: 'Кондитер 2.0',
      nameProject: null,
      startDate: '06.01.2021',
      startTime: null,
      isStarted: true,
    },
    {
      id: 1473,
      idCourse: 21,
      idProject: 0,
      dealsCounter: 0,
      nameCourse: 'Декор Набор',
      nameProject: null,
      startDate: '06.01.2021',
      startTime: null,
      isStarted: true,
    },
  ],
};

/* Добавление класс active к меню */
const menuItems = document.querySelectorAll('.nav__item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((elem) => {
      elem.classList.remove('active');
    });

    item.classList.add('active');
  });
});

const menu = document.querySelector('.menu');

menu.style.zIndex = '2';

/* Отрисовываем блок с курсами */
const coursesList = document.querySelector('.available-courses__list');

const getContainerTemplate = (data) => {
  const value = data;
  const dataItems = Object.entries(value);

  const items = dataItems[0][1].map((item) => {
    const date = item.startDate.split('.');
    const dateYear = date[2];
    const newYear = dateYear[2] + dateYear[3];
    const newDate = date.splice(0, 2);
    newDate.push(newYear);

    let homeWork;

    const home = window.onresize = () => {
      if (innerWidth > 768) {
        homeWork = 'домашних заданий';
        return homeWork;
      }
      homeWork = 'заданий';
      return homeWork;
    };

    return `
     
    <a class="available-course">
  <div class="available-course__wrapper">

    <div class="available-course__main">

      <div class="available-course__start -gap_4">

        <div class="info-blocks">
          <div class="info-blocks__wrapper">
            <div class="info-block info-block_icon info-block_icon_play">
              <svg class="info-block__icon">
                <use xlink:href="sprite.svg#available-course--start"></use>
              </svg>
              <span class="info-block__text info-block__text_big">${newDate.join('.')} </span>
            </div>
            <div class="info-block">
              <span class="info-block__text info-block__text_big">${item.startTime}</span>
            </div>
            <div class="info-block">
              <span class="info-block__text info-block__text_big">${item.isStarted}</span>
            </div>
          </div>
        </div>

        <img src="../img/available-course/SweetsAcademy.png" alt="academy">
      </div>

      <div class="available-course__title -gap_2">${item.nameCourse}</div>

      <div class="available-course__type -gap_3">
        <div class="outline-text">
          <div class="outline-text__content outline-text__content_dark">
            <div class="outline-text__text">${item.nameProject}</div>
          </div>
        </div>
      </div>

      <div class="available-course__desc">Какой-то подзаголовок</div>

      <div class="available-course__progress -gap_4">
        <div class="progress-bar">
          <div class="progress-bar__wrapper">
            <div class="progress-bar__progress"></div>
            <span class="progress-bar__text">25%</span>
            <span class="progress-bar__text">3 модуля пройдено</span>
          </div>
        </div>
      </div>

      <div class="available-course__info">
        <div class="info-blocks">
          <div class="info-blocks__wrapper">
            <div class="info-block info-block_icon info-block_icon_module">
              <span class="info-block__text">
              
              <svg class="info-block__icon">
              <use xlink:href="sprite.svg#available-course--lessons"></use>
            </svg>
              6 модулей


              </span>
            </div>
            <div class="info-block info-block_icon info-block_icon_video">
              <span class="info-block__text">
                <svg class="info-block__icon">
                  <use xlink:href="sprite.svg#available-course--video-lesson"></use>
                </svg>
              6 уроков
              </span>
            </div>
            <div class="info-block info-block_icon info-block_icon_work">
              <span class="info-block__text"> 
                <svg class="info-block__icon">
                  <use xlink:href="sprite.svg#available-course--homework"></use>
                </svg>
              3 ${home()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="available-course__side">
      <div class="available-course__image">
        <img src="../img/available-course/bg.png" alt="bg">
      </div>
    </div>
  </div>
</a>
`;
  });

  return `
    <div>
      ${items.join('')}
    </div>
  `;
};

coursesList.innerHTML = getContainerTemplate(data);
