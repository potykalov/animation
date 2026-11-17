import CallbackChat from "./callbackChat.js";

document.addEventListener("DOMContentLoaded", () => {
  const buttonEl = document.querySelector(".collapsible__button");
  const contentEl = document.querySelector(".collapsible__content");

  buttonEl.addEventListener("click", () => {
    const isOpen = contentEl.classList.contains("show");

    if (!isOpen) {
      contentEl.style.height = `${contentEl.scrollHeight}px`;
      contentEl.classList.add("show");

      return;
    }

    contentEl.style.height = "0px";
    contentEl.classList.remove("show");
  });

  const callbackChat = new CallbackChat(document.body);

  callbackChat.create();
});
