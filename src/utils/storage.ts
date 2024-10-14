/**
 * localStorage 封装
 *
 * */

export default {
  /**
   * storage存储
   * @param key {string} 参数名称
   * @param value {any} 写入值
   */
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * storage获取
   * @param key {string}
   */
  get(key: string): string {
    const val = localStorage.getItem(key)
    if (!val) return ''
    try {
      return JSON.parse(val)
    } catch (error) {
      console.error(error)
      return val
    }
  },
  /**
   * storage 删除
   * @param key {string}
   */
  remove(key: string) {
    localStorage.removeItem(key)
  },
  /**
   * 清空storage
   */
  clear() {
    localStorage.clear()
  }
}
