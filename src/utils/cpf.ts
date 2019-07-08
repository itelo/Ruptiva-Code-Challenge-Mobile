export const formatCPF = (str: string): string => {
  const numbers = str.replace(/\D/g, "").split("");
  const char = { 3: ".", 6: ".", 9: "-" };

  const cpf = numbers.reduce((cpf, n, i) => {
    //@ts-ignore
    return `${cpf}${(char[i] || "") + n}`;
  }, "");

  return cpf.substr(0, 14);
};

// source: https://github.com/benhurott/react-native-masked-text/blob/master/lib/masks/cnpj.mask.js
export const validateCPF = (cpf: string) => {
  if (cpf == '') {
      return true
  }

  cpf = cpf.replace(/\./gi, '').replace(/-/gi, '')
  var isValid = true
  var sum
  var rest
  var i
  i = 0
  sum = 0

  if (
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
  ) {
      isValid = false
  }

  for (i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  }

  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) {
      rest = 0
  }

  if (rest != parseInt(cpf.substring(9, 10))) {
      isValid = false
  }

  sum = 0

  for (i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  }

  rest = (sum * 10) % 11

  if (rest == 10 || rest == 11) {
      rest = 0
  }
  if (rest != parseInt(cpf.substring(10, 11))) {
      isValid = false
  }

  return isValid
}