var katzDeli = []

function takeANumber(katzDeli,name) {
  katzDeli.push(`${name}`)
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {
  var i = 0
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
      return ("There is nobody waiting to be served!")
    }
    else {
      return (`Currently serving ${katzDeli.shift()}.`)
    }
}



function currentLine(katzDeli) {
  var line = []
  var i = 0
  while (i < katzDeli.length) {
<<<<<<< HEAD
    line.push(" " + [i + 1] + ". " + katzDeli[i]);
=======
    line.push("" + [i + 1] + ". " + katzDeli[i]) + " ";
>>>>>>> befb0b4a7869192134bf50e6827454aff24db058
    i++;
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  }
  else {
<<<<<<< HEAD
    return (`The line is currently:${line}`)
=======
    return (`The line is currently: ${line}`)
>>>>>>> befb0b4a7869192134bf50e6827454aff24db058
  }
}