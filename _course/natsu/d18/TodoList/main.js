let TodoItem = {
    props: ["todo", "checkItemHandler", "deleteItemHandler"],
    data: () => ({
        show: false,
    }),
    methods: {
        deleteThis() {
            if (!this.todo.done && !confirm("当前任务还未完成，确认删除吗？")) return;

            this.deleteItemHandler?.(this.todo.id);
        }
    },
    template: `
        <li @click="checkItemHandler(todo.id)">
            <label>
                <input type="checkbox" :checked="todo.done" @change="checkItemHandler(todo.id)"/>
                <span>{{ todo.name }}</span>
            </label>
            <button class="btn btn-danger" @click="deleteThis">删除</button>
        </li>
    `,
};

let TodoList = {
    props: ["todos", "checkItemHandler", "deleteItemHandler"],
    template: `
        <ul class="todo-main">
            <TodoItem v-for="todo in todos" 
                      :todo="todo" 
                      :checkItemHandler="checkItemHandler"
                      :deleteItemHandler="deleteItemHandler"
                      :key="todo.id"></TodoItem>
        </ul>
    `,
    components: {
        TodoItem,
    }
};

let ListHeader = {
    props: ["additionHandler"],
    data: () => ({
        name: "",
    }),
    methods: {
        addItem() {
            this.additionHandler?.(this.name);
            this.name = "";
        },
    },
    template: `
        <div class="todo-header">
            <input type="text" 
                   placeholder="请输入你的任务名称，按回车键确认"
                   v-model="name"
                   @keydown.enter="addItem"/>
        </div>
    `
};

let ListFooter = {
    props: ["todos", "checkAllHandler", "deleteCheckedHandler"],
    computed: {
        completed() {
            return this.todos.reduce((pre, cur) => pre + cur.done, 0);
        },
        total() {
            return this.todos.length;
        },
        isAll: {
            get() {
                return this.completed === this.total;
            },
            set(value) {
                this.checkAllHandler?.(value);
            },
        }
    },
    methods: {
        deleteChecked() {
            this.deleteCheckedHandler?.();
        }
    },
    template: `
        <div class="todo-footer">
            <label><input type="checkbox" v-model="isAll"/></label>
            <span><span>已完成{{completed}}</span> / 全部{{total}}</span>
            <button class="btn btn-danger" @click="deleteChecked">清除已完成任务</button>
        </div>
    `
};


new Vue({
    el: "#root",
    data: () => ({
        todos: [
            {id: 1, name: "xxx", done: false},
            {id: 2, name: "yyy", done: false},
            {id: 3, name: "zzz", done: true},
            {id: 4, name: "ttt", done: false},
        ]
    }),
    computed: {
        maxID() {
            return Math.max(0, ...this.todos.map(val => val.id));
        }
    },
    methods: {
        addItem(name) {
            this.todos.unshift({
                id: this.maxID + 1,
                name: name,
                done: false,
            });
        },
        deleteItem(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        },
        checkItem(id) {
            this.todos.forEach(todo => {
                if (todo.id === id) todo.done = !todo.done;
            });
        },
        checkAll(state) {
            this.todos.forEach(todo => todo.done = state);
        },
        deleteChecked() {
            this.todos.forEach(todo => {
                this.todos = this.todos.filter(todo => !todo.done);
            });
        }
    },
    components: {
        ListHeader,
        TodoList,
        ListFooter,
    },
    template: `
        <div class="todo-container">
            <div class="todo-wrap">
                <ListHeader :additionHandler="addItem"></ListHeader>
                <TodoList :todos="todos"
                          :checkItemHandler="checkItem"
                          :deleteItemHandler="deleteItem"></TodoList>
                <ListFooter :todos="todos"
                            :checkAllHandler="checkAll" 
                            :deleteCheckedHandler="deleteChecked"></ListFooter>
            </div>
        </div>
    `,
});

