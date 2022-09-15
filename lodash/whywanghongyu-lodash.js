
var whywanghongyu = {

    compact:function (ary) {
        var result = []
        for (var i = 0; i < ary.length; i++) {
            if (ary[i]) {
                result.push(ary[i])
            }
        }
    }



    chunk:function (ary, size) {
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
    }



    fill:function (ary, value, [start = 0], [end = ary.length]) {
        for (var i = start; i < end; i++) {
            ary[i] = value
        }
        return ary
    }





}