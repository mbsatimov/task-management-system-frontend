import { type VariantProps, cva } from 'class-variance-authority';

export { default as Avatar } from './Avatar.vue';
export { default as AvatarImage } from './AvatarImage.vue';
export { default as AvatarFallback } from './AvatarFallback.vue';

export const avatarVariant = cva(
  'inline-flex items-center justify-center font-normal text-secondary-300 select-none shrink-0 bg-muted overflow-hidden',
  {
    variants: {
      size: {
        sm: 'size-11 text-base',
        base: 'size-[52px] text-2xl',
        lg: 'size-32 text-5xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'base',
      shape: 'circle',
    },
  }
);

export type AvatarVariants = VariantProps<typeof avatarVariant>;
