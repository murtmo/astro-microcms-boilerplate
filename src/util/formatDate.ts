const formatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export const formatDateJa = (date: Date) => {
  const formattedDate = formatter
    .format(date)
    .split("/")
    .map((part, index) => {
      if (index === 0) return `${part}年`;
      if (index === 1) return `${part}月`;
      return `${part}日`;
    })
    .join("");
  return formattedDate;
};

export const formatDateByYM = (date: Date) => {
  const formattedDate = formatter
    .format(date)
    .split("/")
    .map((part, index) => {
      if (index === 0) return `${part}`;
      if (index === 1) return `_${part}`;
    })
    .join("");
  return formattedDate;
};
