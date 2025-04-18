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


    function isUndefined(value){
        return value === undefined
    }


    function isNull(value){
        return value === null
    }


    function isNil(value){
        if(value === null || value === undefined){
            return true
        }else{
            return false
        }
    }


    function max(array){
        if(array.length == 0){
            return
        }
        var max = array[0]
        for(var i = 1; i < array.length; i++){
            if(array[i] > max){
                max = array[i]
            }
        }
        return max
    }


    function min(array){
        if(array.length == 0){
            return
        }
        var min = array[0]
        for(var i = 1; i < array.length; i++){
            if(array[i] < min){
                min = array[i]
            }
        }
        return min
    }


    function maxBy(array,predicate = identity){
        predicate = iteratee(predicate)
        var max = -Infinity
        for(var i = 0; i < array.length; i++){
            if(predicate(array[i]) > max){
                max = predicate(array[i])
            }
        }
        return max
    }


    function minBy(array,predicate = identity){
        predicate = iteratee(predicate)
        var min = Infinity
        for(var i = 0; i < array.length; i++){
            if(predicate(array[i]) < min){
                min = predicate(array[i])
            }
        }
        return min
    }


    function round(number,precision = 0){
        if(precision >= 0){
            number += ''
            number = number.split('.')
            var a = Number(number[1][precision])
            if(a >= 5){
                if(precision == 0){
                    return Number(number[0]) + 1
                }else{
                    var b = Number(number[1][precision - 1])
                    b++
                    number[1] = number[1].slice(0,precision - 1)
                    number[1] += '' + b 
                    return Number(number[0] + '.' + number[1])
                }
            }else{
                number[1] = number[1].slice(0,precision)
                return Number(number[0] + '.' + number[1])
            }
        }else{
            number += ''
            precision = Math.abs(precision)
            var l = number.length - precision
            l = Math.pow(10,l)
            var a = Number(number[precision])
            if(a >= 5){
                var b = Number(number[precision - 1])
                b++
                number = number.slice(0,precision - 1)
                number = Number(number + b + '')
                return number * l
            }else{
                number = Number(number.slice(0,precision))
                return number * l
            }
        }
    }


    function sumBy(array,predicate = identity){
        predicate = iteratee(predicate)
        var sum = 0
        for(var key in array){
            sum += predicate(array[key])
        }
        return sum
    }


    function flatMap(collection,predicate = identity){
        var x = []
        for(var key in collection){
            var a = predicate(collection[key])
            for(var i = 0; i < a.length; i++){
                x.push(a[i])
            }
        }
        return x
    }


    function flatMapDepth(collection,predicate = identity,depth = 1){
        var x = []
        for(var key in collection){
            var a = predicate(collection[key])
            a = deep(a)
            if(depth == 2){
                x.push(a)
            }else if(depth < 2){
                for(var i = 0; i < a.length; i++){
                    x.push(a[i])
                }
            }else{
                for(var j = 2; j < depth; j++){
                    a = [a]
                }
                x.push(a)
            }
        }
        return x
        function deep(array){
            if(typeof array[0] == 'object'){
                array = deep(array[0])
            }
            return array
        }
    }


    function has(object,path){
        if(typeof path == 'string'){
            var path = toPath(path)
        }
        for(var val of path){
            if(!object || typeof object !== 'object'){
                return false
            }
            object = object[val]
        }
        return true
    }


    function mapKeys(object,predicate = identity){
        var x = {}
        for(var key in object){
            var a = predicate(object[key],key,object)
            x[a] = object[key]
        }
        return x
    }


    function mapValues(object,predicate = identity){
        predicate = iteratee(predicate)
        var x = {}
        for(var key in object){
            var a = predicate(object[key])
            x[key] = a
        }
        return x
    }
    

    function range(start = 0,end = false,step = 1){
        var x  = []
        if(!end){
            end = start
            start = 0
        }
        if(step == 0){
            var j = start
            for(var i = start;i < end; i++){
                x.push(j)
            }
            return x
        }
        if(end >= 0){
            for(var i = start; i < end; i += step){
                x.push(i)
            }
        }else{
            if(step > 0){
                step = Number('-' + step)
            }
            for(var i = start; i > end; i += step){
                x.push(i)
            }
        }
        return x
    }
    
    
    /*function stringifyJSON(){

    }*/


    function concat(array,...value){
        if(value.length == 0){
            return array
        }
        for(var i = 0; i < value.length; i++){
            if(typeof value[i] == 'object'){
                value[i] = value[i][0]
            }
            array.push(value[i])
        }
        return array
    }


    function isEqual(value,other){
        if(typeof value == 'object' && typeof other == 'object' && value !== null && other !== null){
            var counta = 0
            var countb = 0
            for(var key1 in value){
                counta++
            }
            for(var key2 in value){
                countb++
            }
            if(counta !== countb){
                return false
            }
            for(var key in value){
                if(key in value && key in other && !l_301.isEqual(value[key],other[key])){
                    return false
                }
            }
            return true
        }else{
            return value === other
        }
    }


    function repeat(string = '',n = 1){
        if(n == 0){
            return ''
        }
        var a = ''
        for(var i = 0; i < n; i++){
            a += string
        }
        return string = a
    }


    function padStart(string = '',length = 0, chars = ' '){
        var l = length - string.length
        var x = ''
        for(var i = 0; i < l; i += chars.length){
            x += chars
        }
        x = x.slice(0,l)

        return x + string
    }


    function padEnd(string = '', length = 0, chars = ' '){
        var l = length - string.length
        var x = ''
        for(var i = 0; i < l; i += chars.length){
            x += chars
        }
        x = x.slice(0,l)

        return string + x
    }


    function pad(string = '', length = 0, chars = ' '){
        var l = length - string.length
        var rl = l >> 1
        var ll = l - rl
        var xr = ''
        var xl = ''
        for(var i = 0; i < l; i += chars.length){
            xr += chars
            xl += chars
        }
        xr = xr.slice(0,rl)
        xl = xl.slice(0,ll)
        return xr + string + xl
    }


    function keys(object){
        var x = []
        for(var key in object){
            x.push(key)
        }
        return x
    }


    function values(object){
        var x = []
        for(var key in object){
            x.push(object[key])
        }
        return x
    }


    /*function random(lowre = 0,upper = 1,floating){
        
    }*/


    function ceil(number,precision = 0){
        if(precision >= 0){
            number += ''
            number = number.split('.')
            var a = number[1].slice(precision)
            number[1] = number[1].slice(0,precision)
            var up = false
            for(var i = 0; i < a.length; i++){
                if(a[i] !== '0'){
                    up = true
                    break
                }
            }
            if(up){
                if(number[1].length == 0){
                    return Number(number[0]) + 1
                }
                var b = Number(number[1][precision - 1])
                b++
                number[1] = number[1].slice(0,precision - 1)
                number[1] += '' + b 
                return Number(number[0] + '.' + number[1])
            }else{
                number[1] = number[1].slice(0,precision)
                return Number(number[0] + '.' + number[1])
            }
        }else{
            number += ''
            precision = Math.abs(precision)
            var l = number.length - precision
            l = Math.pow(10,l)
            var a = number.slice(precision)
            number = number.slice(0,precision)
            var up = false
            for(var i = 0; i < a.length; i++){
                if(a[i] !== '0'){
                    up = true
                    break
                }
            }
            if(up){
                var b = Number(number[precision - 1])
                b++
                number = number.slice(0,precision - 1)
                number = Number(number + b + '')
                return number * l
            }else{
                number = Number(number.slice(0,precision))
                return number * l
            }
        }
    }


    function floor(number,precision = 0){
        if(precision >= 0){
            number += ''
            number = number.split('.')
            number[1] = number[1].slice(0,precision)
            return Number(number[0] + '.' + number[1])
        }else{
            number += ''
            precision = Math.abs(precision)
            var l = number.length - precision
            l = Math.pow(10,l)
            number = number.slice(0,precision)
            number = Number(number.slice(0,precision))
            return number * l
        }
    }


    function cloneDeep(value){
        if(typeof value == 'object' && value !== null){
            if(Array.isArray(value)){
                var x = []
                for(var i = 0; i < value.length; i++){
                    if(typeof value[i] == 'object'){
                        x.push(l_301.cloneDeep(value[i]))
                    }else{
                        x.push(value[i])
                    }
                }
                return x
            }else{
                var x = {}
                for(var key in value){
                    if(typeof value[key] == 'object'){
                        x[key] = l_301.cloneDeep(value[key])
                    }else{
                        x[key] = value[key]
                    }
                }
                return x
            }
        }else{
            return value
        }
    }


    function trim(string = '',chars = ' '){
        var x = ''
        var get = false
        for(var i = 0; i < string.length; i++){
            if(chars.length == 1){
                if(string[i] !== chars){
                    x += string[i]
                }
            }else{
                for(var j = 0; j < chars.length; j++){
                    if(string[i] == chars[j]){
                        get = true
                    }
                }
                if(!get){
                    x += string[i]
                }
                get = false
            }
        }
        return string = x
    }


    function trimStart(string = '',chars = ' '){
        var x = ''
        var l = string.length >> 1
        var get = false
        for(var i = 0; i < string.length; i++){
            if(chars.length == 1){
                if(string[i] !== chars || i >= l){
                    x += string[i]
                }
            }else{
                for(var j = 0; j < chars.length; j++){
                    if(string[i] == chars[j] && i < l){
                        get = true
                    }
                }
                if(!get){
                    x += string[i]
                }
                get = false
            }
        }
        return string = x
    }


    function trimEnd(string = '', chars = ' '){
        var x = ''
        var l = string.length >> 1
        var get = false
        for(var i = 0; i < string.length; i++){
            if(chars.length == 1){
                if(string[i] !== chars || i < l){
                    x += string[i]
                }
            }else{
                for(var j = 0; j < chars.length; j++){
                    if(string[i] == chars[j] && i >= l){
                        get = true
                    }
                }
                if(!get){
                    x += string[i]
                }
                get = false
            }
        }
        return string = x
    }


    function assign(object,...source){
        for(var i = 0; i < source.length; i++){
            for(var key in source[i]){
                object[key] = source[i][key]
            }
        }
        return object
    }


    function merge(object,...source){
        for(var i = 0; i < source.length; i++){
            for(var key in source[i]){
                if(!object[key]){
                    object[key] = source[i][key]
                }else{
                    for(var j = 0; j < object[key].length; j++){
                        l_301.merge(object[key][j],source[i][key][j])
                    }
                }
            }
        }
        return object
    }


    function flip(func){
        return function(...args){
            var x = []
            for(var i = args.length - 1; i >= 0; i--){
                x.push(args[i])
            }
            return func(x)
        }
    }


    function negate(func){
        return function(n){
            if(func(n)){
                return false
            }else{
                return true
            }
        }
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
        pull:pull,                      //删除数组中和给定x相同的值
        reverse:reverse,                //反转数组
        every:every,                    //全真返回真
        some:some,                      //全假返回假
        identity:identity,              //返回其本身
        countBy:countBy,                //对集合进行新的映射
        groupBy:groupBy,                //对集合进行新的映射，val为数组存储原值
        keyBy:keyBy,                    //对集合进行新的映射，val为集合完整项
        forEach:forEach,                //遍历集合
        map:map,                        //遍历映射集合
        filter:filter,                  //遍历筛选集合
        reduce:reduce,                  //遍历聚集集合
        reduceRight:reduceRight,        //反向遍历聚集集合
        size:size,                      //返回数组长度
        sortBy:sortBy,                  //排序
        sort:sort,                      //选择排序
        sample:sample,                  //返回随机元素
        property:property,              //返回一个函数，函数得到一个对象的属性值
        get:get,                        //得到一个对象的嵌套属性值
        toPath:toPath,                  //把字符串转路径换为数组
        matchesProperty:matchesProperty,//返回一个函数，判断obj中是否有某值
        matches:matches,                //返回一个函数，判断obj中是否有多个值相同的项
        isMatch:isMatch,                //判断嵌套层次的obj的值是否相同
        //bind:bind,                      //实现绑定的跳过参数
        iteratee:iteratee,              //用来识别传入的值调用相关函数
        isUndefined:isUndefined,        //判定是否为undefined
        isNull:isNull,                  //判断是否为null
        isNil,isNil,                    //判断是否为unde/null
        max:max,                        //返回数组最大值
        min:min,                        //返回数组最小值
        maxBy:maxBy,                    //返回相关最大值
        minBy:minBy,                    //返回相关最小值
        round:round,                    //4舍5入
        sumBy:sumBy,                    //按情况求和
        flatMap:flatMap,
        flatMapDepth:flatMapDepth,
        has:has,
        mapKeys:mapKeys,
        mapValues:mapValues,
        range:range,
        //stringifyJSON:stringifyJSON,
        concat:concat,
        isEqual:isEqual,
        repeat:repeat,
        padStart:padStart,
        padEnd:padEnd,
        pad:pad,
        keys:keys,
        values:values,
        //random,random,
        ceil:ceil,
        floor:floor,
        cloneDeep:cloneDeep,
        trim:trim,
        trimStart:trimStart,
        trimEnd:trimEnd,
        assign:assign,
        merge:merge,
        flip:flip,
        negate:negate,
    }
    


} ()