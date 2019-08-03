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