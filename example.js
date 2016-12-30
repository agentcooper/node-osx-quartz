const quartz = require('./');

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
