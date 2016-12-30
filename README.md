### osx-quartz

`npm install osx-quartz --save`

Apple Core Graphics framework provides some useful OS X information through [CGSessionCopyCurrentDictionary](https://developer.apple.com/reference/coregraphics/1454780-cgsessioncopycurrentdictionary) call.

#### Example

```js
const quartz = require('osx-quartz');

console.log(quartz.CGSessionCopyCurrentDictionary());

/*
{ kCGSSessionAuditIDKey: '100005',
  kCGSSessionGroupIDKey: '20',
  kCGSSessionLoginwindowSafeLogin: '0',
  kCGSSessionOnConsoleKey: '1',
  kCGSSessionSystemSafeBoot: '0',
  kCGSSessionUserIDKey: '503',
  kCGSSessionUserNameKey: 'john-doe',
  kCGSessionLoginDoneKey: '1',
  kCGSessionLongUserNameKey: 'JohnDoe',
  kSCSecuritySessionID: '100005' }
*/

console.log(quartz.isScreenLocked()); // returns boolean
```
