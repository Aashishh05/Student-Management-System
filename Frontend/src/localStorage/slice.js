export const setPosted = (post) => {
  localStorage.setItem("Posted", JSON.stringify(post));
};

export const getPosted = () => {
  const data = localStorage.getItem("Posted");
  return data ? JSON.parse(data) : [];
};
