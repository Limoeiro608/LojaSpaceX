
export const PaymentsMetods = (props) =>{

    function reconheceMetod(props){

       if (props.alt === 'boleto' || props.alt === 'bitcoin'){
            console.log('10% de desconto')
        }

        if (props.alt === 'master card'){

            const numbers = [1,2,3,4]
            const answer = numbers.map((number) => 1000 / number)
            
            for(var i = 0; i<4; i++){

                var result = answer[i].toFixed(2)
                var toString = (String(result)).replace(".",",")

                console.log(i+1," x ", toString)

            }
            
            
            
        }
    }

    return <li className='Footer-payments-metods__li'><a href={props.href}><img alt={props} onClick={reconheceMetod.bind('2',props)} src={props.src}/></a></li>

}