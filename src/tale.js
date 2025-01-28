


function kolobok(name){
    switch (name){
        case 'дедушка':
            return 'Я от дедушки ушел';
        case 'заяц':
            return 'Я от зайца ушел';
        case 'лиса':
            return 'Меня сьела';
        default:
            return 'Никого не встретил';
    }
}
console.log(kolobok('дедушка'));
console.log(kolobok('заяц'));
console.log(kolobok('лиса'));


function createDashes(length) {
    return '-'.repeat(length);
  }
  console.log(createDashes(30)); 

function newYear(name_pers){
    if(name_pers === 'Дед Мороз') {
        return 'Дед Мороз! Дед Мороз! Дед Мороз!';
    } else if (name_pers === 'Снегурочка') {
        return 'Снегурочка! Снегурочка! Снегурочка!';
      }
   }
console.log(newYear('Дед Мороз')); 
console.log(newYear('Снегурочка')); 