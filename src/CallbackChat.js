class CallbackChat {
  constructor(root) {
    this.root = root;
  }

  create() {
    this.bindToDom();
    this.initEvenListeners();
  }

  bindToDom() {
    const callbackChatEl = document.createElement("div");
    callbackChatEl.className = "callback-chat";
    callbackChatEl.innerHTML = `
              <button
        class="callback-chat__button"
        type="button"
        popovertarget="callback-chat"
      ></button>
      <div class="callback-chat__modal" id="callback-chat" popover>
        <div class="callback-chat__content">
          <div class="callback-chat__content-top">
            <h2 class="callback-chat__header">Напишите нам</h2>
            <button class="callback-chat__close" type="button">X</button>
          </div>
          <form class="callback-chat__form" name="callback-chat">
            <textarea
              class="callback-chat__field"
              name="callback-text"
            ></textarea>
            <button class="callback-chat__submit" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
      `;

    this.root.append(callbackChatEl);

    this.popoverBtn = document.querySelector(".callback-chat__button");
    this.popover = document.querySelector(".callback-chat__modal");
  }

  initEvenListeners() {
    this.popoverBtn.addEventListener("click", (e) => {
      e.preventDefault();

      e.currentTarget.togglePopover();
    });
  }
}

export default CallbackChat;
