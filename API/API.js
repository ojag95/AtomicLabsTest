import Config from "../Constants/Config";

export async function getTeamMembers() {
  return new Promise((resolve) => {
    const url = `${Config.endpoint}/names`;
    console.log("=== API:getTeamMembers=== url :", url);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let res = null;
        if (responseJson) {
          res = responseJson;
        } else {
          res = { error: "El endpoint no respondio" };
        }
        resolve(res);
      })
      .catch((err) => {
        resolve(null);
      });
  });
}

export async function postNewMemberData(params) {
  return new Promise((resolve) => {
    const url = `${Config.endpoint}/form`;
    const fetchParams = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    fetch(url, fetchParams)
      .then((response) => response.json())
      .then((responseJson) => {
        let res = null;
        if (responseJson) {
          res = responseJson;
        } else {
          res = { error: "El endpoint no respondio" };
        }
        resolve(res);
      })
      .catch((error) => {
        resolve(null);
      });
  });
}
