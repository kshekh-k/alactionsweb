import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';

const DialogCustom = React.forwardRef<
  React.ElementRef<typeof Dialog>,
  React.ComponentPropsWithoutRef<typeof Dialog> & {
    title?: string;
    className?: string;
  }
>(({ open, onOpenChange, children, title, className }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideClose className={className}>
        <DialogHeader className='pb-5'>
          <DialogTitle className='text-2xl font-semibold uppercase tracking-wider text-white'>
            {title || 'App title here'}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
});

DialogCustom.displayName = 'DialogCustom';

export default DialogCustom;
