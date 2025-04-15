var l_301 = function(){
    function compact(array) {       //去除数组中的null、0、""、undefined、 和NaN值
        var x = []
        for(var i = 0; i < array.length; i++){
            if(array[i]){
                x.push(array[i])
            }
        }
        return x
    }


    function chunk(array,size = 1) {
        var x = []
        var a = []
        var count = 0
        for(var i = 0; i < array.length; i++){
            a.push(array[i])
            count++
            if(count == size){
                x.push(a)
                count = 0
                a = []
            }
        }
        if(count > 0){
            x.push(a)
        }
        return x
    }


    function fill(array,value,start = 0,end = array.length){
        for(var i = start; i < end; i++){
            array[i] = value
        }
        return array
    }


    function drop(array,n = 1){
        if(n >= array.length){
            return array = []
        }
        if(n == 0){
            return array
        }
        var x = []
        for(var i = n; i < array.length; i++){
            x.push(array[i])
        }
        return array = x
    }


    function findIndex(array,predicate = identity,fromIndex = 0){
        for(var i = fromIndex; i < array.length; i++){
            if(predicate(array[i],i,array)){
                return i
            }
        }
        return -1
    }

    function findLastIndex(array,predicate = identity,fromIndex = array.length - 1){
        for(var i = fromIndex; i >= 0; i--){
            if(typeof predicate == 'function'){
                if(predicate(array[i],i,array)){
                    return i
                }
            }
        }
        return -1
    }
    
    
    function flatten(array){
        var x = []
        for(var i = 0; i < array.length; i++){
            if(typeof array[i] == 'object'){
                for(var j = 0; j < array[i].length; j++){
                    x.push(array[i][j])
                }
            }else{
                x.push(array[i])
            }
        }
        return x
    }


    function flattenDeep(array,x = []){
        for(var i = 0; i < array.length; i++){
            if(typeof array[i] == 'object'){
                flattenDeep(array[i],x)
            }else{
                x.push(array[i])
            }
        }
        return x
    }


    function flattenDepth(array,depth = 1,x = [],d = 0){
        for(var i = 0; i < array.length; i++){
            if(typeof array[i] == 'object'){
                if(d < depth){
                    flattenDepth(array[i],depth,x,d+1)
                }else{
                    x.push(array[i])
                }
            }else{
                x.push(array[i])
            }
        }
        return x
    }


    function fromPairs(pairs){
        var obj = {}
        for(var i = 0; i < pairs.length ; i++){
            obj[pairs[i][0]] = pairs[i][1]
        }
        return obj
    }


    function toPairs(object){
        var a = []
        var b = []
        for(var key in object){
            b.push(key)
            b.push(object[key])
            a.push(b)
            b = []
        }
        return a
    }


    function head(array){
        if(array.length == 0){
            return
        }
        return array[0]
    }


    function indexOf(array,value,fromIndex = 0){
        if(fromIndex < 0){
            fromIndex = array.length + fromIndex - 1
        }
        for(var i = fromIndex; i < array.length; i++){
            if(array[i] == value){
                return i
            }
        }
        return -1
    }


    function lastIndexOf(array,value,fromIndex = array.length - 1){
        if(fromIndex < 0){
            fromIndex = Math.abs(fromIndex)
        }
        if(fromIndex > array.length){
            return -1
        }
        for(var i = fromIndex; i >= 0; i--){
            if(array[i] == value){
                return i
            }
        }
        return -1
    }


    function initial(array){
        if(array.length == 0){
            return []
        }
        var x = []
        for(var i = 0; i < array.length - 1; i++){
            x.push(array[i])
        }
        return array = x
    }


    function join(array,separator = ','){
        var str = ''
        for(var i = 0; i < array.length; i++){
            str = str + array[i] + separator
        }
        return str.slice(0,str.length - 1)
    }


    function last(array){
        if(array.length == 0){
            return
        }
        return array[array.length - 1]
    }


    function pull(array,...arg){
        var obj = {}
        for(var i of arg){
            obj[i] = 1
        }
        var x = []
        for(var j = 0; j < array.length; j++){
            if(!obj[array[j]]){
                x.push(array[j])
            }
        }
        return array = x
    }


    function reverse(array){
        var x = []
        for(var i = array.length - 1; i >= 0; i--){
            x.push(array[i])
        }
        return array = x
    }


    function every(collection,predicate = identity){
        for(var i = 0; i < collection.length; i++){
            if(!predicate(collection[i],i,collection)){
                return false
            }
        }
        return true
    }


    function some(collection,predicate = identity){
        for(var i = 0; i < collection; i++){
            if(predicate(collecion[i],i,collection)){
                return true
            }
        }
        return false
    }

    function identity(value){
        return value
    }
    

    return {
        comapct: compact,               //去除数组中的null、0、""、undefined、 和NaN值
        chunk:chunk,                    //给数组分组
        fill:fill,                      //把数组某段填充为
        drop:drop,                      //把数组从x往后切
        findIndex:findIndex,            //数组第x项符合条件
        findLastIndex:findLastIndex,    //反向判定数组第x项符合条件
        flatten:flatten,                //扁平化一层数组
        flattenDeep:flattenDeep,        //全部扁平化数组
        flattenDepth:flattenDepth,      //设定x为扁平化深度
        fromPairs:fromPairs,            //数组转obj
        toPairs:toPairs,                //obj转数组
        head:head,                      //获取数组头部的值
        indexOf:indexOf,                //检索x最先出现的位置
        lastIndexOf:lastIndexOf,        //从后往前检索x最先出现的位置
        initial:initial,                //获取最后一个之外的数组
        join:join,                      //将数组转为以x分隔的str
        last:last,                      //获取数组的最后一个值
        pull:pull,
        reverse:reverse,
        every:every,
        some:some,
        identity:identity,
    }
    
} ()