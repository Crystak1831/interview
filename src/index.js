import "./styles.css";

//simulate the api call
const getAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: "data" }), Math.random() * 1000);
  });
};

const call = async function () {
  const res = await getAll();
  return res;
};

const res = call().then((res) => console.log(`Data fetched: ${res.data}`));
