async function fetchLinks() {
  try {
      const response = await fetch(`/api/links`)
      const data = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      throw error;
  }
}

const createNewLink = async (link, comment) => {
  const resp = await fetch(`/api/links`,
      {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              link,
              comment
          })
      }
  );
  return await resp.json();
};

const addClick_ = async (link) => {
  return await fetch(`/api/links`, {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(result => {
        return result;
    })
    .catch(console.error)
}

export {
  fetchLinks,
  createNewLink,
  addClick_
};