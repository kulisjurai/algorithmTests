const lookup = (obj, path) => {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    path = path.split(".");
    if (path.length > 1 && typeof obj[path[0]] === "object") {
      return lookup(obj[path.shift()], path.join("."));
    } else if (obj[path[0]] == undefined || path.length > 1) {
      return -1;
    } else {
      return obj[path[0]];
    }
  }
  return -1;
};

const obj = {
  something1: {
    something2: {
      something3: {
        something4: "Mouse",
      },
    },
  },
};
const path = "something1.something2.something3.something4";

console.log(lookup(obj, path));
