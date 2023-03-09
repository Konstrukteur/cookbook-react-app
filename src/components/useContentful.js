import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN,
  });

  const getRecipes = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "recipes",
        select: "fields",
        order: "fields.title",
      });
      const sanitizedEntries = entries.items.map((entry) => {
        // const uniqueId = crypto.randomUUID();
        const uniqueId = entry.sys.id;
        const recipe = entry.fields;
        const images = entry.fields.images.map((image) => [
          image.fields.title,
          image.fields.file.url,
        ]);
        return {
          ...entry.fields,
          uniqueId,
          recipe,
          images,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(error.message);
    }
  };
  // return an object that contains the recipes
  return { getRecipes };
};
export default useContentful;
