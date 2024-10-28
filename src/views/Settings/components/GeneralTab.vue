<script setup lang="ts">
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';
import { useForm } from 'vee-validate';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toTypedSchema } from '@vee-validate/zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const schema = toTypedSchema(
  z.object({
    language: z.string(),
    timezoneLanguage: z.string(),
    timezone: z.string(),
  })
);

const form = useForm({
  validationSchema: schema,
  initialValues: {
    language: 'en',
    timezoneLanguage: 'en',
    timezone: '24hours',
  },
});

const onSubmit = form.handleSubmit(values => {
  toast.success(`Updated successfully ${values}`);
});
</script>

<template>
  <form
    class="w-full max-w-[400px] space-y-6"
    @submit="onSubmit"
  >
    <FormField
      v-slot="{ componentField }"
      name="language"
    >
      <FormItem>
        <FormLabel>Language</FormLabel>

        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="en">English (Default)</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ componentField }"
      name="timezoneLanguage"
    >
      <FormItem>
        <FormLabel>Timezone</FormLabel>

        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="en">English (Default)</SelectItem>
              <SelectItem value="ru">Русский</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField
      v-slot="{ componentField }"
      type="radio"
      name="timezone"
    >
      <FormItem class="space-y-3">
        <FormLabel>Timezone</FormLabel>
        <FormControl>
          <RadioGroup
            class="grid grid-cols-2 gap-4 md:gap-8"
            v-bind="componentField"
          >
            <FormItem class="space-y-0">
              <FormLabel
                class="flex w-full cursor-pointer justify-between rounded-md border border-primary px-5 py-4 font-normal"
              >
                24 Hours
                <FormControl>
                  <RadioGroupItem value="24hours" />
                </FormControl>
              </FormLabel>
            </FormItem>
            <FormItem class="space-y-0">
              <FormLabel
                class="flex w-full cursor-pointer justify-between rounded-md border border-primary px-5 py-4 font-normal"
              >
                12 Hours
                <FormControl>
                  <RadioGroupItem value="12hours" />
                </FormControl>
              </FormLabel>
            </FormItem>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">Save Changes</Button>
  </form>
</template>
