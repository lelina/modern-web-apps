'use strict'

function createLineSegment(len) {
    return {
        length: len,
        print: function () {
            let visualized = ''
            let remaining = this.length
            while (remaining > 0) {
                visualized += "*"
                remaining--
            }
            return visualized
        }
    }
}