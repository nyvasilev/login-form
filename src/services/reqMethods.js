export const get = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
