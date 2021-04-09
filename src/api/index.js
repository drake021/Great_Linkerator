const BASE_URL = 'http://localhost:5000';

async function fetchLinks() {
  try {
      const response = await fetch(`${BASE_URL}/api/links`)
      const data = await response.json();
      return data;
  } catch (error) {
      throw error;
  }
}

const createNewLink = async (link, tags, comment) => {
  const resp = await fetch(`${BASE_URL}/links`,
      {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              link,
              tags,
              comment
          })
      }
  );
  return await resp.json();
};

export {
  fetchLinks,
  createNewLink
};