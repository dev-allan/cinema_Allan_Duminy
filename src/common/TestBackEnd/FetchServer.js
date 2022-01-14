/**
 * 
 * @param {object a envoyer au serveur} body 
 * @returns la réponse du serveur renvoyant les infos envoyés
 */
export const postToServer = async(body) => {
  let responseData = null;

  if ("http://localhost:3000/movies/" != null) {
    console.log("POST : " + "http://localhost:3000/movies/", body);
    try {
      const response = await fetch("http://localhost:3000/movies/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) return Promise.reject(response);
      else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          responseData = await response.json();
        } else {
          responseData = await response.text();
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
  console.log(responseData);
  return responseData;
};

/**
 * 
 * @returns une promesse contenu les data
 */
export async function getFromServer() {
  let responseData = null;

  if ("http://localhost:3000/movies/" != null) {
    console.log("GET : " + "http://localhost:3000/movies/");
    try {
      if (
        "http://localhost:3000/movies/" ===
        process.env.REACT_APP_DELEGATION_URL +
          "/rightsToDelegate/" +
          process.env.REACT_APP_USER_ID
      ) {
        const response = await fetch("http://localhost:3000/movies/", {
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        if (!response.ok) return Promise.reject(response);
        else {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            responseData = await response.json();
          } else {
            responseData = await response.text();
          }
        }
      } else {
        const response = await fetch("http://localhost:3000/movies/", {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        if (!response.ok) return Promise.reject(response);
        else {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.indexOf("application/json") !== -1) {
            responseData = await response.json();
          } else {
            responseData = await response.text();
          }
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
  console.log("RESPONSE: ", responseData);
  return responseData;
}
