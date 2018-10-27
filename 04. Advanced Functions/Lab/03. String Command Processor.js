function processCommands(commands) {
  const commandProcessor = (function () {
    let text = '';
    return {
      append: (t) => text = text + t,
      removeStart: (count) => text = text.slice(count),
      removeEnd: (count) => text = text.slice(0, text.length - count),
      print: function () {
        console.log(text);
      }
    };
  })();

  for (let cmd of commands) {
    let [command, argument] = cmd.split(' ');
    commandProcessor[command](argument);
  }
}

processCommands([
  'append hello',
  'append again',
  'removeStart 3',
  'removeEnd 4',
  'print',
]);

processCommands([
  'append 123',
  'append 45',
  'removeStart 2',
  'removeEnd 1',
  'print',
]);
