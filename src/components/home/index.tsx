"use client";
import React from 'react';
import HomeIntro from './hero';

import Layout from '@/components/layout';
import Aboutus from './aboutus';
import States from './states';
import Services from './services';
import Crmplans from './crmplans';
import Faqaccordian from './faqaccordian';

function HomeComponent() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const openContactDialog = () => {
    setOpenDialog(true);
  };

  const onDialogOpenChange = (open: boolean) => {
    setOpenDialog(open);
  };
  return (
    <>
      <Layout>
        <HomeIntro />
        <Aboutus/>
        <States/>
        <Services/>
        <Crmplans/>
        <Faqaccordian/>
      </Layout>

    </>
  );
}

export default HomeComponent;
