let randomNum=Math.random();
            let result;
            let guss='heads';
            if(randomNum<0.5){
                result='heads'
            }
            else {
                result='tails'
            }
            if(guss===result){
                console.log('you won')
            }
            else {
                console.log('you lost')
            }