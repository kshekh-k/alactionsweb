"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './button';
import Menu from './menu';
import { useState, useEffect } from "react";
// import { TbPhoneCall, TbMail } from 'react-icons/tb';
// import DialogCustom from './dialog-custom';
// import Formcontact from '../partials/form';
// import Socialmedia from './social-media';

function Header() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const openContactDialog = () => {
    setOpenDialog(true);
  };

  const onDialogOpenChange = (open: boolean) => {
    setOpenDialog(open);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`z-10 fixed top-0  inset-x-0 transition-all ${
        isScrolled ? "bg-secondary-100 shadow-md" : "bg-transparent"
      }`}>
        <div className='max-w-screen-xl px-5 mx-auto'>
          <nav className='container'>
            <div className='flex justify-between'>
              <Link href='/' className='py-4'>
                <Image
                  src={'/images/svg/logo-alactions-web.svg'}
                  alt='Advika Cloud'
                  width={254}
                  height={45}
                  className='h-auto w-20 sm:w-32 lg:w-40 xl:w-auto'
                />
              </Link>
              <Menu />
              <Button
                onClick={openContactDialog}
                className='!h-8 self-center px-3 text-sm boder-white border-2 font-medium !bg-transparent text-white duration-200 ease-in-out hover:!bg-secondary sm:!h-12 sm:px-5 sm:text-base lg:px-7 xl:px-10'
              >
                Contact Us
              </Button>

              <Button
                onClick={openContactDialog}
                className='!h-8 self-center px-3 ml-2  text-sm font-medium text-secondary-50 duration-200 ease-in-out hover:!bg-secondary/50 sm:!h-12 sm:px-5 sm:text-base lg:px-7 xl:px-10'
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Dialog */}
      {/* <DialogCustom
        open={openDialog}
        onOpenChange={onDialogOpenChange}
        className='max-w-3xl bg-primary p-3 md:p-5'
        title='fill your details'
      >
        <Formcontact />
      </DialogCustom> */}
    </>
  );
}

export default Header;
