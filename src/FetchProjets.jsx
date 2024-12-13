import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "symql57bv7xg",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "project" });
      const project = response.items.map((item) => {
        const { project, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { project, url, id, img };
      });
      setProject(project);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, project };
};
