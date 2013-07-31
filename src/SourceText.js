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
      return null;
    }
    s += start.length;

    var e = this.text.indexOf(end);
    if (e < 0) {
      return null;
    }

    return this.text.substring(s, e);
  },

  /**
   * @param {string} str
   * @return {number}
   */
  indexOf: function(str) {
    return this.text.indexOf(str);
  }
};
