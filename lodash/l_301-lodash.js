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
        predicate = iteratee(predicate)
        for(var i = fromIndex; i < array.length; i++){
            if(predicate(array[i])){
                return i
            }
        }
        return -1
    }

    function findLastIndex(array,predicate = identity,fromIndex = array.length - 1){
        predicate = iteratee(predicate)
        for(var i = fromIndex; i >= 0; i--){
            if(predicate(array[i])){
                return i
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
        predicate = iteratee(predicate)
        for(var i = 0; i < collection.length; i++){
            if(!predicate(collection[i])){
                return false
            }
        }
        return true
    }


    function some(collection,predicate = identity){
        predicate = iteratee(predicate)
        for(var i = 0; i < collection; i++){
            if(predicate(collection[i])){
                return true
            }
        }
        return false
    }


    function identity(value){
        return value
    }
    
    
    function countBy(collection,predicate = identity){
        predicate = iteratee(predicate)
        var x = {}
        for(var key in collection){
            var a = predicate(collection[key])
            if(!x[a]){
                x[a] = 1
            }else{
                x[a]++
            }
        }
        return x
    }


    function groupBy(collection,predicate = identity){
        predicate = iteratee(predicate)
        var x = {}
        var val = []
        for(var key in collection){
            var a = predicate(collection[key])
            if(!x[a]){
                val.push(collection[key])
                x[a] = val
                val = []
            }else{
                x[a].push(collection[key])
            }
        }
        return x
    }


    function keyBy(collection,predicate = identity){
        predicate = iteratee(predicate)
        var x = {}
        for(var key in collection){
            var a = predicate(collection[key])
            x[a] = collection[key]
        }
        return x
    }
    

    function forEach(collection,predicate = identity){
        for(var key in collection){
            predicate(collection[key],key,collection)
        }
    }


    function map(collection,predicate = identity){
        var f = false
        if(typeof predicate == 'function'){
            f = true
        }
        predicate = iteratee(predicate)
        var x = []
        for(var key in collection){
            if(f){
                var a = predicate(Number(collection[key]),Number(key),collection)
            }else{
                var a = predicate(collection[key])
            }
            x.push(a)
        }
        return x
    }


    function filter(collection,predicate = identity){
        predicate = iteratee(predicate)
        var x = []
        for(var key in collection){
            if(predicate(collection[key])){
                for(var k in collection[key]){
                    x.push(collection[key][k])
                    break
                }
            }
        }
        return x
    }


    function reduce(collection,predicate = identity,accumulator = 'false'){
        if(accumulator !== 'false'){
            var sum = accumulator
        }else{
            var sum = 0
        }
        for(var key in collection){
            sum = predicate(sum,collection[key],key,collection)
        }
        return sum
    }


    function reduceRight(collection,predicate = identity,accumulator = 'false'){
        if(accumulator !== 'false'){
            var sum = accumulator
        }else{
            var sum = 0
        }
        for(var i = collection.length - 1; i >= 0; i--){
            sum = predicate(sum,collection[i],i,collection)
        }
        return sum
    }


    function size(collection){
        var a = collection.length
        var count = 0
        if(!a){
            for(var key in collection){
                count++
            }
            return count
        }
        return a
    }


    function sortBy(collection,predicate = identity){
        var coll1 = collection.slice()
        if(predicate.length == 1){
            sort(coll1,predicate[0])
        }else{
            var a = iteratee(predicate[0])
            var b = iteratee(predicate[1])
            sort(coll1,a)
            sort(coll1,b)
        }
        var x = []
        var y = []
        for(var i = 0; i < coll1.length; i++){
            for(var key in coll1[i]){
                y.push(coll1[i][key])
            }
            x.push(y)
            y = []
        }
        return x

    }


    function sort(collection,predicate){
        var min = Infinity
        var idx = 0
        for(var i = 0; i < collection.length; i++){
            for(var j = i; j < collection.length; j++){
                var a = predicate(collection[j])
                if(typeof a == 'string'){
                    a = a[0].charCodeAt()
                }
                if(a < min){
                    min = a
                    idx = j
                }
            }
            var t = collection[i]
            collection[i] = collection[idx]
            collection[idx] = t
            idx = 0
            min = Infinity
        }
    }


    function sample(collection){
        var l = size(collection)
        var a = Math.floor(Math.random() * 10)
        l = 10 / l
        a = Math.floor(a / l)
        var count = 0 
        for(var i in collection){
            if(count == a){
                return collection[i]
            }
            count++
        }
    } 
    

    function property(path){
        return function(obj){
            return get(obj,path)
        }
    }


    function get(obj,path){
        var paths = toPath(path)
        for(var val of paths){
            if(!obj){
                break
            }
            obj = obj[val]
        }
        return obj

    }

    
    function toPath(str){
        return str.split('.')
    }


    function matchesProperty([path,srcValue]){
        return function(obj){
            return get(obj,path) == srcValue
        }
    }


    function matches(source){
        return function(obj){
            for(var key in source){
                if(typeof source[key] == 'object'){
                    if(isMatch(source[key],obj[key]) == false){
                        return false
                    }
                }
                if(obj[key] !== source[key]){
                    return false
                }
            }
            return true
        }
    }


    function isMatch(source,obj){
        for(var key in source){
            if(obj[key] !== source[key]){
                return false
            }
        }
        return true
    }

    /*property,matchesProperty等函数闭包，可以用他进一步的get，isMatch绑定一个参数来实现
        function property(path){
            return get.bind(null,path)
        }

        function matches(source){
            return isMatch.bing(null,source)
        }

        function bind(func,thisArg,...fixedArgs){
            return function(...args){
     
            }
        }
    */ 


    function iteratee(predicate){
        if(typeof predicate == 'function'){
            return predicate
        }
        if(typeof predicate == 'string'){
            predicate = property(predicate)
        }else if(Array.isArray(predicate)){
            predicate = matchesProperty(predicate)
        }else if(typeof predicate == 'object'){
            predicate = matches(predicate)
        }
        return predicate
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
        countBy:countBy,
        groupBy:groupBy,
        keyBy:keyBy,
        forEach:forEach,
        map:map,
        filter:filter,
        reduce:reduce,
        reduceRight:reduceRight,
        size:size,
        sortBy:sortBy,
        sort:sort,
        sample:sample,
        property:property,               //返回一个函数，函数得到一个对象的属性值
        get:get,                         //得到一个对象的嵌套属性值
        toPath:toPath,                   //把字符串转路径换为数组
        matchesProperty:matchesProperty, //返回一个函数，判断obj中是否有某值
        matches:matches,                 //返回一个函数，判断obj中是否有多个值相同的项
        isMatch:isMatch,                 //判断嵌套层次的obj的值是否相同
        //bind:bind,                       //实现绑定的跳过参数
        iteratee:iteratee,               //用来识别传入的值调用相关函数
    }
    
} ()