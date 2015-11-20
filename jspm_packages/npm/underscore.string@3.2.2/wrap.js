/* */ 
makeString = require("./helper/makeString");
module.exports = function wrap(str, options) {
  str = makeString(str);
  options = options || {};
  width = options.width || 75;
  seperator = options.seperator || '\n';
  cut = options.cut || false;
  preserveSpaces = options.preserveSpaces || false;
  trailingSpaces = options.trailingSpaces || false;
  if (width <= 0) {
    return str;
  } else if (!cut) {
    words = str.split(" ");
    result = "";
    current_column = 0;
    while (words.length > 0) {
      if (1 + words[0].length + current_column > width) {
        if (current_column > 0) {
          if (preserveSpaces) {
            result += ' ';
            current_column++;
          } else if (trailingSpaces) {
            while (current_column < width) {
              result += ' ';
              current_column++;
            }
          }
          result += seperator;
          current_column = 0;
        }
      }
      if (current_column > 0) {
        result += " ";
        current_column++;
      }
      result += words[0];
      current_column += words[0].length;
      words.shift();
    }
    if (trailingSpaces) {
      while (current_column < width) {
        result += ' ';
        current_column++;
      }
    }
    return result;
  } else {
    index = 0;
    result = "";
    while (index < str.length) {
      if (index % width == 0 && index > 0) {
        result += seperator;
      }
      result += str.charAt(index);
      index++;
    }
    if (trailingSpaces) {
      while (index % width > 0) {
        result += ' ';
        index++;
      }
    }
    return result;
  }
};
