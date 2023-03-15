import { defineStore } from 'pinia'

const useProvince = defineStore('province', () => {
  const provinceMap = new Map([
    [1, '北京'],
    [348, '内蒙古'],
    [464, '辽宁'],
    [649, '黑龙江'],
    [2580, '云南'],
    [2808, '陕西'],
    [19, '天津'],
    [1681, '湖北'],
    [1798, '湖南'],
    [2277, '四川'],
    [37, '河北'],
    [1350, '山东'],
    [1505, '河南'],
    [1021, '安徽'],
    [792, '上海'],
    [3108, '新疆'],
    [810, '江苏'],
    [2079, '广西'],
    [2926, '甘肃'],
    [1935, '广东'],
    [1143, '福建'],
    [1238, '江西'],
    [920, '浙江'],
    [2236, '重庆'],
    [579, '吉林'],
    [217, '山西'],
    [2726, '西藏'],
    [3027, '青海'],
    [2205, '海南'],
    [2482, '贵州'],
    [3080, '宁夏'],
    [3229, '香港'],
    [3251, '澳门'],
  ])

  const provinceList = computed(() => {
    // label value
    return Array.from(provinceMap).map(([value, text]) => ({
      text,
      value,
    }))
  })

  const getProvinceName = (id: number) => {
    return provinceMap.get(id)
  }

  return {
    provinceMap,
    provinceList,
    getProvinceName,
  }
})

export default useProvince
