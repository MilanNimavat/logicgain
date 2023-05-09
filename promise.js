function getArticle(id) {
    // return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetching data....");
        // resolve({ id: id, name: "derik" });
        return({ id: id, name: "derik" });

      }, 5000);
    // });
  }
  console.log('before');
  getArticle("1").then(res=> console.log(res))
  console.log('after');
