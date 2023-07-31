new Vue({
    el: "#app",
    data() {
        return {
            sum: 0,
        };
    },
    methods: {
        addToCart(item) {
            let obj = JSON.parse(item);
            let cart = this.$refs["cart"];
            for (let i = 0; i < cart.list.length; i++) {
                if (cart.list[i].id === obj.id) {
                    cart.$refs["cart-items"][i].count++;
                    return;
                }
            }
            this.$refs["cart"].list.push(obj);
        }
    },
});

