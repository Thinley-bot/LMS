export function CheckMatching(pwd, cpwd) {
    if (pwd.length === 0 || cpwd.length === 0) {
        return false;
    }
    return pwd === cpwd;
}
