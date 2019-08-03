// (--------------------------------1----------------------------------)
// Write a JavaScript program to copy a string to the clipboard.

const copy_to_Clipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    // <textarea readonly="" style="position: absolute; left: -9999px;"></textarea>
  
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    // getSelection().getRangeAt(0) : lấy range từ đoạn text được bôi đen
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      // xóa range
      document.getSelection().addRange(selected);
    }
};

// _______________________2______________________________________________________________________________________________________________________
// Paragraph

document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector.bind(document);
    const bold_btn = p('#bold-btn'),
          italic_btn = p('#italic-btn'),
          underline_btn = p('#underline-btn'),
          strike_through_btn = p('#strike-through-btn'),
          subscript_btn = p('#subscript-btn'),
          superscript_btn = p('#superscript-btn'),
          color_btn = p('#color-btn'),
          size_btn = p('#size-btn'),
          delete_btn = p('#delete-btn'),
          undo_btn = p('#undo-btn'),
          redo_btn = p('#redo-btn');
    bold_btn.addEventListener('click', () => {
        document.execCommand('bold');
    });
    italic_btn.addEventListener('click', () => {
        document.execCommand('italic');
    });
    underline_btn.addEventListener('click', () => {
        document.execCommand('underline');
    });
    strike_through_btn.addEventListener('click', () => {
        document.execCommand('strikeThrough');
    });
    subscript_btn.addEventListener('click', () => {
        document.execCommand('subscript');
    });
    superscript_btn.addEventListener('click', () => {
        document.execCommand('superscript');
    });
    color_btn.addEventListener('click', () => {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('foreColor', false, 'red');
    });
    size_btn.addEventListener('click', () => {
        document.execCommand('styleWithCSS', false, true);
        document.execCommand('fontSize', false, '30px');
    });
    delete_btn.addEventListener('click', () => {
        document.execCommand('delete');
    });
    undo_btn.addEventListener('click', () => {
        document.execCommand('undo');
    });
    redo_btn.addEventListener('click', () => {
        document.execCommand('redo');
    });
});
// ??????????????????????????