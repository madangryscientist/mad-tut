export const findLargest = () => {
  let list = [1, 34, 123, 2, 412, 433, 3, 223, 343];
  let largest = 0;
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    console.log("element", element);
  }
  if (largest === 433) {
    console.log("pass");
  }
  console.log("fail");
};
findLargest();
