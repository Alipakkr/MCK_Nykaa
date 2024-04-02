export const critItems = [
  { id: "AW0546", name: " Bug 1 " },
  { id: "JV6275", name: " Bug 2 " },
];
export const majItems = [
  { id: "ZM5019", name: " Bug 3 " },
  { id: "TZ3141", name: " Bug 4 " },
];
export const medItems = [
  { id: "RN8828", name: " Bug 5 " },
  { id: "WZ0068", name: " Bug 6 " },
];
export const lowItems = [
  { id: "AZ5902", name: " Bug 7 " },
  { id: "IR0291", name: " Bug 8 " },
];
export const columnsFromBackend = {
  ["RL2118"]: {
    name: "CRITICAL SEVERITY",
    items: critItems,
    bg: "red",
  },
  ["IX5270"]: {
    name: "MAJOR SEVERITY",
    items: majItems,
    bg: "yellow",
  },
  ["QY6864"]: {
    name: "MEDIUM SEVERITY",
    items: medItems,
    bg: "blue",
  },
  ["QW5430"]: {
    name: "LOW SEVERITY",
    items: lowItems,
    bg: "green",
  },
};
