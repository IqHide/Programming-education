// task1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // будет ошибка

//task2
let calculator() {
    a: 1,
    b: 1,
    read() {
        this.a = Number(prompt("введите 1 число", 1));
        this.b = Number(prompt("введите 2 число", 1));
    }
    sum() {
        return this.a + this.b;
    }
    mul() {
        return this.a * this.b;
    }
}

//task3
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};



