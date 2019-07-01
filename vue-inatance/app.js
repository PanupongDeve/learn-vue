var data = { a: 1}

var vm = new Vue({
    data
})


vm.a = 2;
console.log('see data.a:' + data.a);

vm.a = 3;
console.log('see data.a:' + data.a);

console.log(vm.a == data.a);

// section 2


var obj = {
    foo: 'bar'
}

// Object.freeze(obj);

var vm2 = new Vue({
    el: '#app-2',
    data: obj
});


var vm3 = new Vue({
    el: '#app-3',
    data: data,
    methods: {
        increase: function() {
            
            this.a = this.a+1;
        },

        decrease: function() {
            this.a = this.a-1;
        }
    }
})

console.log('$el', vm3.$el);

console.log('$data', vm3.$data);

vm3.$watch('a', (newValue, oldValue) => {
    console.log('newValue Updated', newValue);
    console.log('oldValue destroyed', oldValue);
})