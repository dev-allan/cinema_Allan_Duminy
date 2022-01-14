export const postToServer = () => {};

// export const getToServer = () => {
//     let arrayData = []
//   fetch("http://localhost:3000/movies/")
//     .then((response) => {
//         arrayData.push(response.json())
//         return arrayData
//     })
//     .then((response) => {
//         arrayData.push(JSON.stringify(response))
//         return arrayData
//     })
//     .catch((error) => alert("Erreur : " + error));
// };

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
              "X-USER-ID": process.env.REACT_APP_USER_ID !== null,
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
              "X-USER-ID": process.env.REACT_APP_USER_ID !== null,
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
        // const response = await fetch(path, {
        //   headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "X-USER-ID": process.env.REACT_APP_USER_ID!,
        //   },
        // });
        // if (!response.ok) return Promise.reject(response);
        // else {
        //   const contentType = response.headers.get("content-type");
        //   if (contentType && contentType.indexOf("application/json") !== -1) {
        //     responseData = await response.json();
        //   } else {
        //     responseData = await response.text();
        //   }
        // }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    console.log("RESPONSE: ", responseData);
    return responseData;
  }
  