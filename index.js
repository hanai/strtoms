module.exports = function strtoms(str) {
  if (typeof str !== "string") {
    throw new TypeError("argument str is not a string");
  }

  var num, unit;
  str.replace(/^(\d+)(.+)$/, function ($$, $1, $2) {
    num = parseInt($1);
    unit = $2;
  });

  if (
    Number.isNaN(num) ||
    ["M", "d", "h", "m", "s", "ms"].indexOf(unit) === -1
  ) {
    throw new Error("argument str is not a valid time string");
  }

  while (unit !== "ms") {
    switch (unit) {
      case "M":
        num *= 30;
        unit = "d";
        break;
      case "d":
        num *= 24;
        unit = "h";
        break;
      case "h":
        num *= 60;
        unit = "m";
        break;
      case "m":
        num *= 60;
        unit = "s";
        break;
      case "s":
        num *= 1000;
        unit = "ms";
        break;
    }
  }
  return num;
};
