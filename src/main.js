'use strict';

var factorial = {

    computerFactorial : (value) => {
        if(typeof(value) != 'number')
        {
            return 'undefined';
        }
        else if(value < 0)
        {
            return 'undefined';
        }
        else
        {
            let factorial = 1;
            for(let i = value; i >= 1; i--)
            {
                factorial = factorial * i;
            }

            return factorial;
        }
    }
}


module.exports = factorial