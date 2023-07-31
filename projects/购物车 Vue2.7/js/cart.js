let CartItem = {
    props: ["item"],
    emits: ["update", "delete"],
    template: `
      <li class="cart-item" draggable="true">
        <img src="" alt="">
        <div class="cart-item-name">{{ item.name }}</div>
        <div class="cart-item-price">￥{{ item.price }}</div>
        <div class="counter">
          <div @click="decrease" class="cart-dec">-</div>
          <div class="number">{{ count }}</div>
          <div @click="increase" class="cart-inc">+</div>
        </div>
        <button @click="$emit('delete', item.id)">删除</button>
      </li>
    `,
    data() {
        return {
            count: 0,
        };
    },
    mounted() {
        this.count++;
    },
    methods: {
        increase() {
            this.count++;
        },
        decrease() {
            if (this.count) this.count--;
            if (!this.count) this.$emit("delete", this.$props["item"].id);
        },
    },
    watch: {
        count: function () {
            this.$emit("update");
        }
    },
};

Vue.component("cart", {
    emits: ["update"],
    data() {
        return {
            list: []
        };
    },
    methods: {
        calcSum() {
            return this.list.reduce(
                (pre, cur, index) =>
                    pre + (cur.price * this.$refs["cart-items"][index].count),
                0
            );
        },
        remove(id) {
            this.list.forEach((val, index) => {
                if (val.id === id) {
                    this.list.splice(index, 1);
                }
            });
        },
    },
    components: {
        "cart-item": CartItem,
    },
    template: `
      <div>
        <h2>购物车</h2>
        <ul>
          <cart-item v-for="item in list"
                     :key="item.id"
                     :item="item"
                     ref="cart-items"
                     @update="$emit('update', calcSum())"
                     @delete="remove($event); $emit('update', calcSum())">
          </cart-item>
        </ul>
      </div>
    `,
});
