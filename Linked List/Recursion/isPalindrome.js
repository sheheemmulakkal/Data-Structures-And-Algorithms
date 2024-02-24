const isPalindrome = (string) => {
  if (string.length < 2) return true;
  if (string[0] !== string[string.length - 1]) return false;
  return isPalindrome(string.substring(1, string.length - 1));
};

console.log(isPalindrome("malayalam"));
