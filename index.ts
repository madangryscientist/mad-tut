import promptSync from "prompt-sync";
export const hello = () => {
  let name = promptSync()("Hi, What is your name? ");
  console.log(name);
};
hello();
