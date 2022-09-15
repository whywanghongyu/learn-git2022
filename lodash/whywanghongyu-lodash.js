
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



    flatten:function (ary) {
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


    flattenDeep:function (array) {
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



    fattenDepth:function (ary, depth = 1) {
        for (var k = 0; k < depth; k++) {

            var res = []
        }
    },


}