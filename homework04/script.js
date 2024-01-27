// Необходимо получить список всех пользователей с помощью бесплатного API:
// https://jsonplaceholder.typicode.com/users и отобразить их на странице.

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const URL_API = "https://jsonplaceholder.typicode.com/users";

try {
  const data = await getData(URL_API);
  const list = document.querySelector("ul");
  data.forEach((element) => {
    // вывод в консоль для сверки
    console.log(element.name);
    // загон в список
    list.insertAdjacentHTML("beforeend", `<li>${element.name}</li>`);
  });
} catch (error) {
  console.log(error);
}
