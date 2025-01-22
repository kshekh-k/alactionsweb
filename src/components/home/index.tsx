"use client";
import React from 'react';
import HomeIntro from './hero';

import Layout from '@/components/layout';

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
      </Layout>

    </>
  );
}

export default HomeComponent;
