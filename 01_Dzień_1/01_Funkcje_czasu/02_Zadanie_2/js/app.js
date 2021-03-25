

function countHello(limit)
{ let counter = 1;
  let id = setInterval(function () {
        console.log("Hello" + counter);
        counter++;
      if(counter >= limit) {
          clearInterval(id);
      }
    }, 2000);


}
countHello(4);