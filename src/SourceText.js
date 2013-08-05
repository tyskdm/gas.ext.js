/**
 * @param {string} str
 * @constructor
 */
function SourceText(str) {
  this.text = str;
}

SourceText.prototype = {
  /**
   * @param {string} str
   */
  moveBefore: function(str) {
    var index = this.text.indexOf(str);
    this.text = index < 0 ? '' : this.text.substring(index);
  },

  /**
   * @param {string} str
   */
  moveAfter: function(str) {
    var index = this.text.indexOf(str);
    this.text = index < 0 ? '' : this.text.substring(index + str.length);
  },

  /**
   * @param {string} start
   * @param {string} end
   * @return {string}
   */
  getBetween: function(start, end) {

    var s = this.text.indexOf(start);
    if (s < 0) {
      s = 0;
    } else {
      s += start.length;
    }

    var str = '';
    var e = this.text.indexOf(end);
    if (e < 0) {
      str = this.text.substring(s);
    } else {
      str = this.text.substring(s, e);
    }

    return str;
  },

  /**
   * @param {string} str
   * @return {number}
   */
  indexOf: function(str) {
    return this.text.indexOf(str);
  }
};
