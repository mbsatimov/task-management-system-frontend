<script setup lang="ts">
import { SiteHeader } from '@/components/SiteHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import GeneralTab from './components/GeneralTab.vue';
import NotificationTab from './components/NotificationTab.vue';
</script>

<template>
  <SiteHeader class="border-b border-l bg-background">
    <template #title>
      <h1 class="text-2xl font-semibold">Settings</h1>
    </template>
  </SiteHeader>
  <div class="p-6 md:p-8">
    <Tabs
      default-value="account"
      class="rounded-md bg-white p-6 md:p-8"
    >
      <TabsList>
        <TabsTrigger value="account">General</TabsTrigger>
        <TabsTrigger value="notification">Notification</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <GeneralTab />
      </TabsContent>
      <TabsContent value="notification">
        <NotificationTab />
      </TabsContent>
    </Tabs>
  </div>
</template>
