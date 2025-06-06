export const formatBrazilianDateTime = (isoString) => {
  if (!isoString) return "";
  const date = new Date(isoString);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "America/Sao_Paulo",
  };
  return date.toLocaleString("pt-BR", options).replace(/\//g, "-");
};
