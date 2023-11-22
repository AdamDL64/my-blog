import axios from "axios";

export const list = async (authtoken) =>
  await axios.get("http://localhost:5000/api/user", {
    headers: {
      authtoken,
    },
  });
export const changeRole = async (authtoken,data) =>
  await axios.post( "http://localhost:5000/api/change-role",{data}, {
    headers: {
      authtoken,
    },
  });




