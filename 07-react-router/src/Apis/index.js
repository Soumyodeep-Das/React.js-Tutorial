export const getAllPost = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result.json();
};

export const getPostById = async (id) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json();
  };
