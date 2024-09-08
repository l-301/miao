class MyMap{

    constructor(){
        this.boddy = []
        this._length = 0
    }

    set (key,val){
        for(var i = 0; i < this.boddy.length; i += 2){
            if(key == this.boddy[i]){
                this.boddy[i + 1] = val
                return
            }
        }
        this._length += 1
        this.boddy.push(key)
        this.boddy.push(val)
    }
    get (val){
        for(var i = 0; i < this.boddy.length; i += 2){
            if(val == this.boddy[i]){
                return this.boddy[i + 1]
            }
        }
    }

    get size(){
        return this._length
    }

    delete (val){
        this._length -= 1
        for(var i = 0; i < this.boddy.length; i += 2){
            if(val == this.boddy[i]){
                this.boddy.splice(i,2)
            }
        }
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this._length = 0 
    }

    append(val){
        this._length += 1
        var node = {val:val,next:null}
        var a = this.head
        if(!this.head){
            this.head = node
        }else if(!this.head.next){
            this.head.next = node
        }else{
            while(a.next){
                a = a.next
            }
            a.next = node
        }
    }

    at(idx){
        var a = this.head
        var count = 0
        for(var i = 0; i < this._length; i++){
            if(i == idx){
                return a.val
            }
            count += 1
            a = a.next
        }
    }

    prepend(val){
        this._length += 1
        var node = {val:val,next:null}
        node.next = this.head
        this.head = node
    }

    get size(){
        return this._length
    }

    at(val){

    }
}

class MySet{
    constructor(){
        this.boddy = []
    }

    add(val){
        if(this.boddy.length == 0){
            this.boddy.push(val)
        }else{
            for(var i = 0; i < this.boddy.length; i++){
                if(val == this.boddy[i]){
                    return
                }
            }
            this.boddy.push(val)
        }

    }

    get size(){
        return this.boddy.length
    }

    delete(val){
        for(var i = 0; i < this.boddy.length; i++){
            if(val == this.boddy[i]){
                this.boddy.splice(i,1)
            }
        }
    }
    has(val){
        for(var i = 0; i < this.boddy.length; i++){
            if(val == this.boddy[i]){
                return true
            }
        }
        return false
    }
}

class Stack{
    constructor(){
        this.boddy = []
        this._length = 0
    }

    push(val){
        this.boddy.push(val)
        this._length += 1
    }

    pop(){
        this._length -= 1
        var a = this.boddy.pop()
        return a
    }

    get size(){
        return this._length
    }
}

class Queue{
    constructor(){
        this.head = null
        this._length = 0
    }

    add(val){
        this._length += 1
        var node = {val:val,next:null}
        if(this.head == null){
            this.head = node
            return
        }
        var a = this.head
        while(a.next){
            a = a.next
        }
        a.next = node
        return

    }

    pop(){
        this._length -= 1
        var a = this.head.val
        this.head = this.head.next
        return a
    }

    get size(){
        return this._length
    }
}