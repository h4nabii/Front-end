let ListItem = {
    props: ["item"],
    emits: ["add-to-cart"],
    template: `
      <li class="list-item" draggable="true">
        <img src="" alt="">
        <div class="list-item-name">{{ item.name }}</div>
        <div class="list-item-price">￥{{ item.price }}</div>
        <button @click="$emit('add-to-cart', item.toString())">添加至购物车</button>
      </li>
    `
};

Vue.component("list", {
        emits: ["add-to-cart"],
        data() {
            return {
                list: [
                    new Item("Test1", 10),
                    new Item("Test2", 20),
                    new Item("Test3", 30),
                    new Item("Test4", 40),
                    new Item("Test5", 50),
                    new Item("Test6", 60),
                ]
            };
        },
        components: {
            "list-item": ListItem,
        },
        template: `
          <div>
            <h2>商品</h2>
            <ul>
              <list-item v-for="item in list"
                         :key="item.id"
                         :item="item"
                         @add-to-cart="$emit('add-to-cart', $event)">
              </list-item>
            </ul>
          </div>
        `,
    }
);
