export const Setitem = (post) => {
  localStorage.setItem("Posted", JSON.stringify(post));
};

export const Getitem = () => {
  const data = localStorage.getItem("Posted");
  return data ? JSON.parse(data) : [];
};
