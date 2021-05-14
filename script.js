
let screen = document.getElementById('screen');

let result = 0;


document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {
        let entry= item.value;
        if(entry == 'x'){
            entry='*';
        }

      screen.value+=entry;

      if(entry=='c'){
        screen.value='';
        screen.placeholder ='calculate...'
        }

    })
  })


document.getElementById('equal').addEventListener('click', calc => {
    if(screen.value.charAt(0)== '*' || screen.value.charAt(0)== '+' ){
        alert('expresion cannot start with an operand, can\'t calculate');
        screen.value='';

        return;
    }

    //in the future, add an else if with .matches(regex for ending with *  or -
    //or +) to handle use case where can't calculate if ends with an operand

    result=eval(screen.value);
    screen.value='';
    screen.placeholder=result;

})