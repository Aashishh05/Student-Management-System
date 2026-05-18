export const setItem = (post) => {
  localStorage.setItem("Posted", JSON.stringify(post));
};

export const getItem = () => {
  const data = localStorage.getItem("Posted");
  return data ? JSON.parse(data) : [];
};
