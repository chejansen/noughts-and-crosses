const seperator = `
------------------------------------->>>
`
const printError = (msg, err) =>
  console.error(msg, seperator, err)

//TODO: Introduce proper error handling w 3rd party
const handleError = msg => err =>
  printError(msg, err);

const then = f => p => p.then(f)

const catchP = f => p => p.catch(f)

export {
  handleError,
  then,
  catchP
}