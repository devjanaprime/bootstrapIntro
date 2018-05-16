console.log( 'js' );

$( document ).ready( readyNow );
let kitties = [];
// cat class
class Cat{
  constructor( name, breed, age ){
    this.name = name;
    this.breed = breed;
    this.age = age;
  } //end constructor
} // end Cat class

kitties.push( new Cat( 'Commander Wisdom', 'Calico', '2') );
kitties.push( new Cat( 'Pewter', 'Russian Blue', '9') );
kitties.push( new Cat( 'Speedbump', 'Tabby', '3') );
kitties.push( new Cat( 'Zsa Zsa', 'White Puff', '8') );
kitties.push( new Cat( 'Ruby', 'Mix', '15') );
kitties.push( new Cat( 'Cube', 'All Black', '7') );
kitties.push( new Cat( 'Sebastian', 'Tabby', '18') );

function readyNow(){
  console.log( 'JQ' );

  // select element by ID
  let el = $( '#gridTest' );
  // test loop
  for( cat of kitties ){
    // append to this element
    let outputString = '<div class="col-6">';
    outputString += '<H3>' + cat.name + '</H3>';
    outputString += '<p>' + cat.breed + '</p>';
    outputString += '<p>' + cat.age + '</p>';
    outputString += '</div>';
    el.append( outputString );
  } //end for
} // end readyNow
