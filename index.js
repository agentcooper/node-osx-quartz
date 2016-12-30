const { execSync } = require('child_process');

const pythonCommand = `
  python -c 'import sys,Quartz; d=Quartz.CGSessionCopyCurrentDictionary(); print d'
`;

const rxNSDictionaryEntry = /(\w+)\s+=\s+\"?([^\"]+)\"?;/;

const parseNSDictionaryString = (nsDictionaryString) => {
  return nsDictionaryString.split('\n').map(line => {
    const match = line.match(rxNSDictionaryEntry);

    if (match) {
      return {
        key: match[1],
        value: match[2],
      };
    }
  }).reduce((acc, item) => {
    if (item) {
      acc[item.key] = item.value;
    }

    return acc;
  }, {});
};

const CGSessionCopyCurrentDictionary = () => {
  const stdout = execSync(pythonCommand).toString();

  return parseNSDictionaryString(stdout);
};

const isScreenLocked = () => {
  const session = CGSessionCopyCurrentDictionary();

  return Boolean(session['CGSSessionScreenIsLocked']);
};

module.exports = {
  CGSessionCopyCurrentDictionary,
  isScreenLocked,
};
