function test_string(input_str) {
  const is_lower_case = symbol => {
    if ('a' <= symbol && symbol <= 'z') {
      return true;
    }
    return false;
  };

  const is_upper_case = symbol => {
    if ('A' <= symbol && symbol <= 'Z') {
      return true;
    }
    return false;
  };

  const is_first_char_lower = is_lower_case(input_str[0]);
  const is_first_char_upper = is_upper_case(input_str[0]);

  if (!(is_first_char_lower || is_first_char_upper)) {
    return false;
  }

  for (let i = 1; i < input_str.length; i++) {
    if (i % 2) {
      if (is_lower_case(input_str[i]) === is_first_char_lower ||
        is_upper_case(input_str[i]) === is_first_char_upper) {
        return false;
      }
    } else {
      if (is_lower_case(input_str[i]) !== is_first_char_lower ||
        is_upper_case(input_str[i]) !== is_first_char_upper) {
        return false;
      }
    }
  }

  return true;
}

console.log(test_string('xYr'));   
console.log(test_string('XXyx'));
console.log(test_string('cHINh'));
console.log(test_string('abzZz'));
console.log(test_string('AbAbA'));


function test_string1(str) {
	return !/^[A-Z]{2}|[a-z]{2}|[\d]|[^A-Za-z]+$/g.test(str);
}

console.log(test_string1('xYr'));   
console.log(test_string1('XXyx'));
console.log(test_string1('cHINh'));
console.log(test_string1('abzZz'));
console.log(test_string1('AbAbA'));



    