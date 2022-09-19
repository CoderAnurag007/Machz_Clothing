export const categroymapselector = (state) => {
  // console.log(state, " from Selector se bhai");
  const cate = state.category.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  // console.log(cate);
  return cate;
};

// export const categroymapselector = (state) => state.categories;
