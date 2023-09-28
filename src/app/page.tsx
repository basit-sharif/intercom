"use client"
// import { IntercomProvider } from '@/components/shared/Intercom/IntercomProvider'
import React, { useEffect, useState } from 'react';
import { IntercomProvider, useIntercom } from 'react-use-intercom';

const INTERCOM_APP_ID = 'isn9f467';

const Home = () => {


    return (
        <IntercomProvider shouldInitialize={true} appId={INTERCOM_APP_ID}>
            <HomePage />
        </IntercomProvider>
    )
}

const HomePage = () => {
    const { boot, shutdown, hide, show, update } = useIntercom();
    const [isOpened, setOpened] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isSecondTime, setSecondTime] = useState(false);

    useEffect(() => {
        if(isOpened){
        };
    }, [isOpened])
    

    const bootingProc = () => {
        setLoading(true);
        boot();
        setTimeout(() => {
            setOpened(true);
            setLoading(false);
        }, 500);
    };;

    const shutDownProc = () => {
        setLoading(true);
        shutdown();
        setTimeout(() => {
            setOpened(false);
            setLoading(false);
        }, 500);
    };

    return (
        <div className='w-full h-s flex justify-center items-center'>
            <div className='flex justify-start flex-col gap-4'>
                {
                    isOpened ?
                        <button onClick={shutDownProc}> Click Here for ShutDown ☎️{isLoading && (<div>Loading...</div>)}</button> :
                        <button onClick={bootingProc}> Click Here for Home ☎️{isLoading && (<div>Loading...</div>)}</button>
                }
            </div>
        </div>
    )
};

export default Home