const $ = {};

function _createModal(options) {
  const modal = document.createElement("div");
  modal.classList.add("vmodal");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="modal-overlay" onclick='console.log('ov')' data-close="true">
        <div class="modal-window" data-content>
            <img src="#" alt="#" class="modal-image" />
        </div>
    </div>`
  );
  document.body.appendChild(modal);
  return modal;
}

$.modalImg = function (options) {
  const qmodal = _createModal(options);
  const mod = document.querySelector(".vmodal");

  const listener = function (e) {
    e.target.dataset.close && mod.classList.remove("open");
  };

  qmodal.addEventListener("click", listener);

  return {
    open() {
      mod.classList.add("open");
    },
    close() {
      mod.classList.remove("open");
    },
  };
};
