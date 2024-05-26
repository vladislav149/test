// /*
//     1 часть
//  Нужно выполнить функцию processor для каждого элемента
//  processTime нужно добавить в каждый элемент результирующего массива

//     2 часть
//  Если processTime больше PROCESS_TIME_LIMIT - элемент нужно исключить из результирующего массива

//     3 часть
//  Элементы в результирующем массиве должны быть в том же порядке, что и в оригинальном
// */

// type AsyncProcessor = (item: Item) => Promise<{processTime: string}>
// type Item = Record<string, string>
// type RichItem = Item & {processTime: string}
// const PROCESS_TIME_LIMIT = 1000

// async function processItems(
//   items: Item[],
//   processor: AsyncProcessor
// ): Promise<RichItem[]> {
//   const arr = items.map(item => processor(item))
//   const result1 = await Promise.all(arr)
//   return items.map((item, index) => ({
//     ...item,
//     processTime: result1[index].processTime,
//   }))
// }
