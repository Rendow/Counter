import React, {useState} from 'react';
import s from './SecondCounter.module.css'
import {Button} from "@material-ui/core";
import {NavLink} from 'react-router-dom';


function Display() {
    const [count, setCount] = useState(0)


    return (
        <div className={s.wrap}>
            <div className={s.content}>
                <div className={s.display}> {count} </div>


                    <div className={s.buttons}>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            size={'small'}
                        > inc </Button>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            size={'small'}
                        > reset </Button>

                        <Button
                            variant={'contained'}
                            color={'primary'}
                            size={'small'}
                            href={'/settings'}
                        > Setting </Button>
                    </div>

                
            </div>
        </div>
    )

}

export default Display