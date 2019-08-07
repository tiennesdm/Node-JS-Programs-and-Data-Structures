function Stack() {
    this.count = 0;
    this.stack = [];
}
Stack.prototype.push = function(value) {

    this.stack[this.count] = value;
    this.count++;
    // console.log(this.stack[this.count]);
    // this.count++;
}
Stack.prototype.pop = function() {
    if (this.count != -1) {
        //        element = this.stack[this.count];

        this.count = this.count - 1;

    }

    //  this.stack[this.count] = this.stack[this.count];


    //this.stack = this.stack[this.count];

    console.log('this stack', this.stack);
    console.log('cout', this.count);
}
Stack.prototype.length = function() {
    return this.count;
}
Stack.prototype.peek = function() {
    arr = new Array();
    for (i = 0; i < this.count; i++) {
        arr.push(this.stack[i]);
    }
    return arr;

}

module.exports = Stack;