<script setup lang="ts">
import * as z from 'zod';
import { AutoForm } from '@/components/ui/auto-form';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';

const schema = z.object({
  message: z.boolean(),
  taskUpdate: z.boolean(),
  taskDeadline: z.boolean(),
  mentorHelp: z.boolean(),
});

function onSubmit(values: Record<string, any>) {
  toast.success('Updated successfully');
}
</script>

<template>
  <AutoForm
    class="w-full max-w-[400px] space-y-6"
    :schema="schema"
    :field-config="{
      message: {
        component: 'switch',
      },
      taskUpdate: {
        component: 'switch',
      },
      taskDeadline: {
        component: 'switch',
      },
      mentorHelp: {
        component: 'switch',
      },
    }"
    @submit="onSubmit"
  >
    <Button type="submit">Save Changes</Button>
  </AutoForm>
</template>
