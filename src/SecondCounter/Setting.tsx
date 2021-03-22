import React from 'react';
import {Button} from "@material-ui/core";
import s from "./SecondCounter.module.css";

function Setting(){

    const onClick =() => {

    }

    return(
        <div>

            <div className={s.wrap}>
                <div className={s.content}>
                    <div className={s.display}>
                       <div className={s.countWrap}> 3 3 </div>

                    </div>

                    <div className={s.buttons}>
                       <Button
                            href={'/Counter'}
                            variant={'contained'}
                            color={'secondary'}
                            size={'large'}
                            onClick={onClick}>
                           set
                        </Button>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}




export default Setting