<script setup lang="ts">
import AutoForm from '@/components/ui/auto-form/AutoForm.vue';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuthStore } from '@/stores/auth';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { toast } from 'vue-sonner';
import { z } from 'zod';

const authStore = useAuthStore();
const router = useRouter();

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const form = useForm({
  validationSchema: toTypedSchema(formSchema),
});

const onSubmit = async (data: FormValues) => {
  await authStore.login({ data });
  if (authStore.token) {
    toast.success('Logged in successful');
    router.push('/');
  } else {
    toast.error(authStore.errors?.[0] ?? 'Something went wrong');
  }
};
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <Card class="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AutoForm
          :form="form"
          :schema="formSchema"
          class="space-y-4"
          :field-config="{
            email: {
              label: 'Email',
              inputProps: {
                type: 'email',
                placeholder: 'Email',
              },
            },
            password: {
              label: 'Password',
              inputProps: {
                type: 'password',
                placeholder: 'Password',
              },
            },
          }"
          @submit="onSubmit"
        >
          <Button
            class="w-full"
            type="submit"
          >
            Login
          </Button>
        </AutoForm>
      </CardContent>
    </Card>
  </div>
</template>
