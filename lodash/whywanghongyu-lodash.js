
var whywanghongyu = {

    compact: function (ary) {
        var result = []
        for (var i = 0; i < ary.length; i++) {
            if (ary[i]) {
                result.push(ary[i])
            }
        }
        return result
    },



    chunk: function (ary, size) {
        var a = []
        var b = []

        if (ary.length == size) {
            return  ary
        }

        if (size == 0) {
            return b
        }

        for (var i = 0; i < ary.length; i++) {
            a.push(ary[i])
            if (a.length == size) {
                b.push(a)
                a = []
            }
        }
        
        if (a[0]) { // 只要a数组还有元素就需要把他放进b数组
            b.push(a)

        }
        return b
    },



    fill:function (ary, value, start = 0, end = ary.length) {
        for (var i = start; i < end; i++) {
            ary[i] = value
        }
        return ary
    },


    drop:function(ary, n = 1) {
        var result = []
        for (var i = n; i < ary.length; i++) {
            result.push(ary[i])
        }
        return result
    },



    flatten:function (ary) { //对数组进行一组扁平化处理
        var result = []
        for(var i = 0; i < ary.length; i++) {
            if (Array.isArray(ary[i])) {
                for (var j = 0; j < ary[i].length; j++) {
                    result.push(ary[i][j])
                }
            } else {
                result.push(ary[i])
            }
        }
        return result
    },


    flattenDeep:function (array) { //对数组进行完全扁平化处理
        var result = []
        function a (array) {
            for (var i = 0; i < array.length; i++) {
                if (!(Array.isArray(array[i]))) {
                    result.push(array[i])
                } else {
                    a(array[i])
                }
            }
        }
        a(array)
        return result
    },



    fattenDepth:function (ary, depth = 1) { // 对数组进行指定层级的扁平化处理
        for (var k = 0; k < depth; k++) {

            var res = []
            var hasarray = false
            for (var i = 0; i <ary.length; i++) {
                var a = ary[i]
                if (Array.isArray(a)) {
                    hasarray = true
                    for (var j = 0; j < a.length; j++) {
                        res.push(a[j])
                    }
                } else {
                    res.push(a)
                }
            }
            if (!hasarray) {
                break
            }
            ary = res
        }
        return res
    },



    fromPairs:function (pairs) { //返回键值组成的对象
        var obj = {}
        for (var i = 0; i < pairs.length; i++) {
            obj[pairs[i][0]] = pairs[i][1]
        }
        return obj
    },


    head:function (array) {
        if (array.length == 0) {
            return undefined
        } else {
            return array[0]
        }
    },    



    indexOf:function (array, value, fromIndex = 0) {
        for (var i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
            return i
            }
        }
        return -1
    }



}