export const randomList = (list) => {
    const randomPhras = Math.floor(Math.random() * list.length)
  return list[randomPhras]
}

export default randomList