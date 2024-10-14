/**
 * 工具函数封装
 */
// 格式化金额
export const formatMoney = (money: number | string) => {
  const a = parseFloat(money.toString())
  return a.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

// 格式化日期
export const toLocalDate = (date?: Date, rule?: string) => {
  let curDate = new Date()
  if (date) curDate = date
  if (rule === 'yyyy-MM-dd') return curDate.toLocaleDateString()
  if (rule === 'HH:mm:ss') return curDate.toLocaleTimeString()
  return curDate.toLocaleString().replace('/', '-')
}
