const messageComponentTemplate = document.createElement('template');

messageComponentTemplate.innerHTML = `
  <link rel="stylesheet" href="messageComponent.css" />
  <div class="wrapper">
    <div class="settings">
      <section>
        <h4 class="title">Часовой пояс по Гринвичу</h4>
        <select>
          <option value="-12" selected>(UTC-12) Линия перемены дат</option>
          <option value="-11">(UTC-11) Время в формате UTC -11</option>
          <option value="-10">(UTC-10) Гавайи</option>
          <option value="-9">(UTC-9) Аляска</option>
          <option value="-8">(UTC-8) Тихоокеанское время (США и Канада)</option>
          <option value="-7">(UTC-7) Горное время (США и Канада)</option>
          <option value="-6">(UTC-6) Центральное время (США и Канада)</option>
          <option value="-5">(UTC-5) Гавана</option>
          <option value="-4">(UTC-4) Сантьяго</option>
          <option value="-3">(UTC-4) Буэнос-Айрес</option>
          <option value="-2">(UTC-2) Время в формате UTC -2</option>
          <option value="-1">(UTC-1) Кабо-Верде</option>
          <option value="0">(UTC 0) Лондон</option>
          <option value="+1">(UTC +1) Амстердам</option>
          <option value="+2">(UTC +2) Калининград</option>
          <option value="+3">(UTC +3) Москва</option>
          <option value="+4">(UTC +4) Тбилиси</option>
          <option value="+5">(UTC +5) Екатеринбург</option>
          <option value="+6">(UTC +6) Астана</option>
          <option value="+7">(UTC +7) Красноярск</option>
          <option value="+8">(UTC +8) Иркутск</option>
          <option value="+9">(UTC +9) Сеул</option>
          <option value="+10">(UTC +10) Владивосток</option>
          <option value="+11">(UTC +11) Сахалин</option>
          <option value="+12">(UTC +12) Петропавловск-Камчатский</option>
          <option value="+13">(UTC +13) Самоа</option>
          <option value="+14">(UTC +14) О-в Киритимати</option>
        </select>
      </section>
      <section>
        <h4 class="title">Начинать рассылку</h4>
        <span class="timeFrameLable">с</span>
        <input class="timeFrameInput" type="text" />
        <span class="timeFrameLable">утра, до</span>
        <input class="timeFrameInput" type="text" />
        <span class="timeFrameLable">вечера</span>
      </section>
      <section>
        <h4 class="title">Выберите дни для рассылки</h4>
        <div class="daysOfTheWeekBox">
          <div>
            <input type="checkbox" /><p>пн</p>
          </div>
          <div>
            <input type="checkbox" /><p>вт</p>
          </div>
          <div>
            <input type="checkbox" /><p>ср</p>
          </div>
          <div>
            <input type="checkbox" /><p>чт</p>
          </div>
          <div>
            <input type="checkbox" /><p>пт</p>
          </div>
          <div>
            <input type="checkbox" /><p>сб</p>
          </div>
          <div>
            <input type="checkbox" /><p>вс</p>
          </div>
        </div>
      </section>
      <section>
        <h4 class="title">Текст сообщения</h4>
        <textarea class="messageText"></textarea><br />
        <a class="nameVariables" href="#">{name}</a>
        <a class="nameVariables" href="#">{last_name}</a>
        <a class="nameVariables" href="#">{first_name}</a>
      </section>
      <section>
        <h4 class="title">Добавить изображение</h4>
        <div class="messageImgBox"></div>
        <textarea class="imageText"></textarea>
        <p>Добавьте подпись (необязательно)</p>
      </section>
      <section>
        <h4 class="title">Скорость отправки</h4>
        <span>1 сообщений каждые</span>
        <input class="numberInput" type="number" />
        <span>минуты</span>
      </section>
      <section>
        <h4 class="title">Максимальное количество сообщений в день</h4>
        <input class="numberInput" type="number" />
        <span>сообщений</span>
      </section>
      <section>
        <button>Сохранить</button>
      </section>
    </div>
    <div class="list">
      <h4 class="title">База для рассылки</h4>
      <button>Добавить контакт</button>
      <table>
        <tr>
          <td>
            <a href="#">
              <img class="eyeIcon" src="img/botEye.svg" />
            </a>
          </td>
          <td>79147210603</td>
          <td>09.09.20</td>
          <td>07.18</td>
          <td>
            <img class="eyeIcon" src="img/checkBlue.svg" />
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">
              <img class="eyeIcon" src="img/botEye.svg" />
            </a>
          </td>
          <td>79147210603</td>
          <td>09.09.20</td>
          <td>07.18</td>
          <td>
            <img class="eyeIcon" src="img/checkBlue.svg" />
          </td>
        </tr>
        <tr>
          <td>
            <a href="#">
              <img class="eyeIcon" src="img/botEye.svg" />
            </a>
          </td>
          <td>79147210603</td>
          <td>09.09.20</td>
          <td>07.18</td>
          <td>
            <img class="eyeIcon" src="img/checkBlue.svg" />
          </td>
        </tr>
      </table>
      <div class="pagination">
          <a class="paginationLinks" href="#"><<</a>
          <a class="paginationLinks" href="#">1</a>
          <a class="paginationLinks" href="#">2</a>
          <a class="paginationLinks" href="#">3</a>
          <a class="paginationLinks" href="#">..</a>
          <a class="paginationLinks" href="#">17</a>
          <a class="paginationLinks" href="#">18</a>
          <a class="paginationLinks" href="#">19</a>
          <a class="paginationLinks" href="#">>></a>
      </div>
      <p class="totalNumbers">Всего: 402</p>
    </div>
  </div>
`;

class MessageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(messageComponentTemplate.content.cloneNode(true));
  }
}

window.customElements.define('message-component', MessageComponent);
