// document.write('<header class="p-header" id="header">ヘッダー</header>');

fetch("index.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementsById("header").innerHTML = html;
  });

fetch("index.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("読み込みエラー: " + response.status);
    }
    return response.text();
  })
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  })
  .catch((error) => {
    console.error("ヘッダーの読み込みに失敗しました:", error);
  });
