"use client";
import React from 'react';
 

import Layout from '@/components/layout';
 

function ProductComponent() {
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
        <div className='pt-60 bg-black text-white'>sdfsdf</div>
      </Layout>

    </>
  );
}

export default ProductComponent;
