export const formatCNPJ = (str: string): string => {
  const numbers = str.replace(/\D/g, "").split("");
  const char = { 2: ".", 5: ".", 8: "/", 12: '-' };

  const cnpj = numbers.reduce((cnpj, n, i) => {
    //@ts-ignore
    return `${cnpj}${(char[i] || "") + n}`;
  }, "");

  return cnpj.substr(0, 18);
};

// source: https://github.com/benhurott/react-native-masked-text/blob/master/lib/masks/cnpj.mask.js

export const validateCnpj = (cnpj: string) => {
  var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2)
  var dig1 = new Number() as number;
  var dig2 = new Number() as number;
  var i = 0

  var exp = /\.|\-|\//g
  cnpj = cnpj.toString().replace(exp, '')
  var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13))) as number;

  for (i = 0; i < valida.length; i++) {
      // @ts-ignore
      dig1 += i > 0 ? cnpj.charAt(i - 1) * valida[i] : 0
      // @ts-ignore
      dig2 += cnpj.charAt(i) * valida[i]
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11)
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11)

  return dig1 * 10 + dig2 == digito
}
