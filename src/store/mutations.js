// mutations里写函数怎样更改state
export const increment = state => {
    state.count = state.count + 1
    state.msg = '已经加1'
}
export const decrement = state => {
    state.count = state.count - 1
    state.msg = '已经减1'
}