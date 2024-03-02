import axios from "axios";
const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: ` Client-ID ${apiKey}`,
  },
});

export default customFetch;

// https://api.unsplash.com/search/photos?page=1&query=office
//https://api.unsplash.com/search/photos?
//client_id=anjqdVzVPYJMHVrQAkf8aAx8g1wEXVzvSGMFQ5hEcOo&
//page=1&&per_page=20&query=tbilisi
