"use client";

import React from 'react';
import NotfoundButton from '@/components/ui/notfound-button';
import { NewsletterForm } from '@/components/landing/newsletter-form';
const Page = () => {


    return (
        <div className='max-w-6xl w-full mx-auto px-4'>
            <div className=' h-[80vh] flex justify-center items-center relative bg-[#000000] mb-[30px]'>
                <div className='text-center absolute top-[70px] '>
                    <h1 className='text-4xl font-bold text-[#FFFFFF] font-mono'>4 0 4</h1>
                    <p className='text-lg mt-4 text-[#FFFFFF] font-mono'>This page could not be found.</p>
                    <ul className='mt-[50px]'>
                        <NotfoundButton />
                    </ul>
                </div>
                <ul className='absolute top-[240px]'>
                    <NewsletterForm />
                </ul>
            </div>
        </div>
    );
}

export default Page;
