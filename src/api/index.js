import ajax from './ajax'

// 通过mock拿到数据
// 获取home中数据
export const reqHomeData = () => ajax('/homeData')
// 获取分类列表中的数据
export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/categoryList')
