import type { FC, PropsWithChildren, ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ModalBaseProps extends PropsWithChildren {
  className?: string;
  description?: string;
  footer?: ReactNode;
  heading: string;
  isOpen: boolean;
  onClose: () => void;
}

const ModalBase: FC<ModalBaseProps> = ({
  children,
  className,
  description,
  footer: Footer,
  heading,
  isOpen,
  onClose,
}) => {
  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent className={cn(`border-transparent`, className)}>
        <DialogHeader>
          <DialogTitle className="font-semibold uppercase text-[#0B3B3C]">{heading}</DialogTitle>
          {description && <DialogDescription className="text-red">{description}</DialogDescription>}
        </DialogHeader>
        {children}
        {Footer && <DialogFooter>{Footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default ModalBase;
