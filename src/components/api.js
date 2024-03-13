import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 7MSv-EESVpd53P__weNlVDIGhAqgd24kUEq06QaGufY",
    },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImages;
