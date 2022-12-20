const API_URL =
//  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
  "https://api.npoint.io/146fabca5b352345e178";



class GoodsItem {
  constructor(title, price, id) {
    this.title = title;
    this.price = price;
    this.id = id;
  }
  render() {
    return `<div class="goods-item" itemId=${this.id}><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  async fetchGoods() {
    const responce = await fetch(`${API_URL}`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.goods = catalogItems;
    } else {
      alert("Нет ответа от сервера");
    }
  }
  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(
        good.product_name,
        good.price,
        good.id_product
      );
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}



const init = async () => {
  const list = new GoodsList();
  await list.fetchGoods();
  list.render();
 };

window.onload = init;









