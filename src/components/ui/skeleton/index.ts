import { type VariantProps, cva } from 'class-variance-authority';

export { default as Skeleton } from './Skeleton.vue';

export const skeletonVariants = cva('animate-pulse rounded-md bg-muted', {
  variants: {
    variant: {
      default: 'bg-primary/30',
      secondary: 'bg-primary/10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type SkeletonVariants = VariantProps<typeof skeletonVariants>;
