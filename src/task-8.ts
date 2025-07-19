import axios from "axios";

interface Post {
    id: number,
    title: string,
    body: string,
}

async function fetchPosts(): Promise<Post[] | null > {
    try {
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      console.error("Error retrieving posts:", error);
      return null;
    }
}

fetchPosts().then((posts) => {
  if (posts && posts.length > 0) {
    console.log(posts[0].title);
  } else {
    console.log("Posts not loaded or array is empty");
  }
});
