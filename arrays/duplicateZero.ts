/**
 Do not return anything, modify arr in-place instead.
 */
 function duplicateZeros(arr: number[]) {
    const output: number[] = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        output.push(0)
      }
      output.push(arr[i])
    }
    // [1,2,0,0,3,4,0,0,5,6]
  
    const a = 10
    let b = 20
  
    let temp = a
    console.log('in above temp should be a (10)', temp)
  
    for (let i = 0; i < arr.length; i++) {
      console.log('arr [i] ', arr[i], output[i])
      arr[i] = output[i]
      b = a
  
      temp = b
    }
  
    console.log('b should be a', b)
    console.log('temp should be b', temp)
  
    return output
  }
  
  const n = duplicateZeros([1, 2, 0, 3, 4, 0, 5, 6])
  
  console.log('n is', n)
  
  function intersection(nums1: number[], nums2: number[]): number[] {
    const result = nums1.filter((num) => nums2.includes(num))
    return [...new Set(result)]
  }
  
  const ins = intersection([9, 4, 9, 8, 4], [4, 9, 5])
  
  console.log('insa ', ins)
  