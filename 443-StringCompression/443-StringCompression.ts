// Last updated: 4/8/2026, 2:07:19 AM
function compress(chars: string[]): number {
  let i = 0;
  let res = 0;

  while(i < chars.length) {
    let groupL = 1;

    while(i + groupL < chars.length && chars[i + groupL] == chars[i]) {
      groupL++
    }

    chars[res] = chars[i]
    res++
    if(groupL > 1) {
      for(let n of groupL.toString()) {
        chars[res] = n;
        res++;
      }
    }

    i += groupL
  }

  return res
};